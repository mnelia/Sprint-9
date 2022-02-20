import { useState } from "react";

import './Flights.css';


const NO_FLIGHTS_FOUND = 'No hay vuelos disponibles, por favor haga su busqueda';

const getFlightFromRaw = rawData => {

  console.log(rawData.ScheduleResource.Schedule);

  const result = rawData.ScheduleResource.Schedule.map(item => {
    return {
      arrival: item.Flight.Arrival.AirportCode,
      departure: item.Flight.Departure.AirportCode,
      scheduleTime: item.Flight.Departure.ScheduledTimeLocal.DateTime,
      flightNumber: item.Flight.MarketingCarrier.FlightNumber
    };
  });
  
  return result;
}

const searchFLights = ({
  codeAirport,
  codeCountry,
  departureDate,
  directFlights
}) => {
  return fetch(`https://api.lufthansa.com/v1/operations/schedules/${codeAirport}/${codeCountry}/${departureDate}?${directFlights ? 'directFlights='+directFlights : ''}`,{
        method: 'GET',
        headers: {
            "Accept": "application/json",
            "Authorization": "Bearer xzhuem54jn4ahnqxgab4qybw"
        }
    })
      .then(result => result.json())
      .then(data => {
          return getFlightFromRaw(data);
      })
}



const Flights = () => {

  const [flights, setFlights] = useState([]);
  const [codeAirport, setCodeAirport] = useState('MUC');
  const [codeCountry, setCodeCountry] = useState('FRA');
  const [departureDate, setDepartureDate] = useState('');
  const [directFlights, setDirectFlights] = useState(false);

  const handleSearch = async () => {

    const availableFlights = await searchFLights({
      codeAirport,
      codeCountry,
      departureDate,
      directFlights: directFlights ? 1 : 0 
    });

    setFlights(availableFlights);
  }

  return (
    <div>
      <h3>Buscador de vuelos</h3>
      <input type="text" name="departure_date" placeholder="Fecha (2022-03-03)" className="btn"value={departureDate} onInput={e => setDepartureDate(e.target.value)} />
      <label for="country_code">Desde</label>
      <select name="country_code" value={codeCountry} className="btn" onChange={e => setCodeCountry(e.target.value)}>
        <option value="FRA" selected>FRA</option>
        <option value="ARG">ARG</option>
        <option value="BRA">BRA</option>
      </select>
      <label for="airport_code">Hasta</label>
      <select name="airport_code" value={codeAirport}  className="btn"onChange={e => setCodeAirport(e.target.value)}>
        <option value="MUC" selected>MUC</option>
        <option value="XX">XX</option>
        <option value="YY">YY</option>
      </select>
      <label for="direct_flights">Vuelos directos?</label>
      <input type="checkbox" name="direct_flights" defaultChecked={directFlights} onChange={e => {setDirectFlights(e.target.value === 'on' ? true : false)}} />
      <button className="btn" onClick={handleSearch}>Buscar</button>
      <br />
      <span>
        {flights.length > 0 ? flights.map(flight => (
          <div className="flightCard">
            <div>arrival: {flight.arrival}</div>
            <div>departure: {flight.departure}</div>
            <div>scheduleTime: {flight.scheduleTime}</div>
            <div>flightNumber: {flight.flightNumber}</div>
          </div>
        )) : NO_FLIGHTS_FOUND}
      </span>
    </div>
  )
}

export default Flights;
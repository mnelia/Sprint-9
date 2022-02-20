
import React from 'react';
import { BrowserRouter, Routes, Route  } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar"
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetail from './components/ItemDetail/ItemDetail';
import Cart from './components/Cart/Cart';
import Flights from './components/Flights/Flights';
import Home from './components/Home';
import Footer from './components/Footer/Footer';
import LogIn from './components/Login/Login';
import fotoUrl from './img/europaEste.jpg'
import fotoUrls from './img/roma.jpg'
import fotoUrlx from './img/japon.jfif'
import fotoUrlz from './img/Kenya.jfif'

//datos moqueados
const productos = [
    { id: 1,foto: fotoUrl, categoria: "Travel", name: "Europa del Este", price: "USD 1100", stock: 5 },
    { id: 2, foto: fotoUrls, categoria: "Travel", name: "Europa Occidental", price: "USD 1300", stock: 6 },
    { id: 3, foto: fotoUrlx, categoria: "Travel", name: "Japon", price: "USD 1650", stock: 4 },
    { id: 4, foto: fotoUrlz, categoria: "Travel", name: "Knya y Tanzania", price: "USD 1780", stock: 5 }
]


function App() {

  localStorage.setItem('products', JSON.stringify(productos));

  return (
   <BrowserRouter>
    <center>
      <Navbar />
      <Routes>
       <Route path="/" element={<Home />}/>
        <Route path="/categorias" element={<ItemListContainer />}/>
        <Route path="/contador" element={<ItemDetail />}/>
        <Route path="/carrito" element={<Cart />}/>
        <Route path="/flights" element={<Flights />}/>
        <Route path="/login" element={<LogIn />}/>
      </Routes>
      <Footer />
    </center>
    </BrowserRouter> 
  );
}

export default App;

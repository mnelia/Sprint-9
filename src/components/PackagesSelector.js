
import { useState } from 'react'

function PackagesSelector({ max, inicial, itemId }) {
   
    const [ contador, setContador ] = useState(inicial)

    const handleSuma = () => {
       contador < max ?  setContador(contador + 1) : alert ('compra maxima')
    }

    const handleResta = () => {
        console.log(contador)
        contador > inicial ?  setContador(contador - 1) : alert ('compra minima')
    }

    const handleAddToCar = () => {
        const item = {
            id: itemId,
            quantity: contador
        };

        //buscar carrito existente
        const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

        // guardar item en el carrito
        carrito.push(item);
        
        // guardar carrito en el localStorage
        localStorage.setItem('carrito', JSON.stringify(carrito));

        //ir a vista de carrito
        window.location.href = '/carrito';
    }

    return (
        <div>
            <p>{contador}</p>
            <button className="btn" onClick={handleSuma}>Click +</button>
            <button className="btn" onClick={handleResta}>Click -</button>
            <button className="btn" onClick={handleAddToCar}>Agregar al Carrito</button>
            
        </div>
    )
}

export default PackagesSelector

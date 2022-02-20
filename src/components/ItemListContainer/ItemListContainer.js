import {useState, useEffect } from 'react'
import { getFetch } from "../../getFetch"


const ItemCard = ({prod}) => {

	const handleClick = () => {
		
		// guardar en el localStorage el producto al cual estoy haciendo click

		localStorage.setItem('current-item', JSON.stringify(prod))

		// redirigir al detalle
		window.location.href = '/contador';

	}

	return (
		<div className='col-md-4'>
			<div className="card w-100 mt-5" >
				<div className="card-header cardName">
					{`${prod.name} - ${prod.categoria}`}
				</div>
				<div className="card-header cardName">
					{`${prod.price}`}
				</div>
				<div className="card-body">
					<img src={prod.foto} alt='' className='w-50' />
					
				</div>
				<div className="card-footer">
					
					<button onClick={handleClick} className="btn btn-outline-primary btn-block">
						detalle producto
					</button>
					
				</div>
			</div>
		</div>)
}


function ItemListContainer() {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
		getFetch
			.then(resp => setProductos(resp))
			.catch(err => console.log(err))
			.finally(()=>setLoading(false))
    }, [])
    
    return (
        
        <div>
            { loading ?
                <h2>Cargando..</h2>
                :
                productos.map(prod => <ItemCard prod={prod} />)
            }
        </div>
    )
}


export default ItemListContainer;

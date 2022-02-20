
const ItemCard = ({prod}) => {

	return (
		<div className='col-md-4'>
			<div className="card w-100 mt-5" >
				<div className="card-header cardName">
					{`${prod.name} - ${prod.categoria}`}
				</div>
				<div className="card-header cardName">
					{`${prod.price}`}
				</div>
        <div className="card-header cardName">
					Cantidad: {`${prod.quantity}`}
				</div>
				<div className="card-body">
					<img src={prod.foto} alt='' className='w-50' />
					
				</div>
			</div>
		</div>
    )
}


const getProductsFromCart = () => {

  // busco el carrito en el localStorage
  const carrito = JSON.parse(localStorage.getItem('carrito'))  || [];

  // busco la lista de productos del localStorage
  const products = JSON.parse(localStorage.getItem('products'))  || [];

  // Crear una lista nueva solo con los productos del carrito
  // incluyendo el detalle y la cantidad
  const productsInCart = carrito.map(productoEnCarrito => {
    const product = products.find(product => product.id === productoEnCarrito.id);
    
    return {
      ...product,
      quantity: productoEnCarrito.quantity
    }
  })

  return productsInCart;
}


function Cart() {

    const productos = getProductsFromCart()

    const handleCheckout = () => {
      localStorage.setItem('carrito', JSON.stringify([]));
      window.location.href = '/carrito';
    }
    
    return (
        
        <div>
            { productos.map(prod => <ItemCard prod={prod} />) }
            { productos.length > 0 ? (
              <div className="card-footer">
                <button onClick={handleCheckout} className="btn btn-outline-primary btn-block">
                  Checkout
                </button>
                
              </div>
            ) : (
              <div className="card-footer">
                No hay productos en el carrito                
              </div>
            )}
        </div>
    )
}

export default Cart;

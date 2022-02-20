
export const getFetch = new Promise((resolve)=>{

    const productos = JSON.parse(localStorage.getItem('products')) || [];

    setTimeout(()=>{
        resolve(productos)
    }, 3000)
})

export const getProducto = id => 
    new Promise((res, rej) => {
        const productos = JSON.parse(localStorage.getItem('products')) || [];

        const producto = productos.find((value) => value.id === id);   
        setTimeout(res(producto), 1000);  
    });

getProducto(4);
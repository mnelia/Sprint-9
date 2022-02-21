import React, {Fragment, useState} from 'react';
import '../Login/Login.css'


 const LogIn = () => {

    const [datos, setDatos] = useState({
        usuario: '',
        password: ''
    })

    

    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name] : event.target.value
        })
    }

    const enviarDatos = event => {
        event.preventDefault()
        console.log('enviando datos...' + datos.usuario + ' ' + datos.password)
        localStorage.setItem("datosUsuario", JSON.stringify({
          usuario: datos.usuario,
          password: datos.password
        }))
    }

    return (
        <Fragment>
            <div className="alignModal">
            <img src='/images/login.png' alt="Alt de la imagen" className="imageModal" />
            </div>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input type="text" placeholder="e-mail" className="form-control" onChange={handleInputChange} name="e-mail"></input>
                </div>
                <div className="col-md-3">
                    <input type="password" placeholder="password" className="form-control" onChange={handleInputChange} name="password"></input>
                </div>
                <button  className="btnF btn-primary">Sign In</button>
            </form>
        </Fragment>
    );
}
 
export default LogIn;
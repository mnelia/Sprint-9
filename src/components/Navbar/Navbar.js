import React, { Component } from "react";
import CartWidget from "./CartWidget";
import { MenuItems } from "./MenuItems";
import './Navbar.css'


class Navbar extends Component {
    state  = { clicked: false }

    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    handleGoToCar = () => {
        if (!window.location.href.includes('/carrito'))
            window.location.href = '/carrito';
    }

    handleClicktoHome = () => {
        window.location.href = '/';
    }

    render () {
        return(
            <nav className="NavbarItems">
                
                 <h1 className="navbar-logo" onClick={this.handleClicktoHome}>ON THE GO</h1>
                 <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                 </div>
                 <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                     {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li>
                        )   
                        })}
                     
                 </ul>
                 <div className="cart-button" onClick={this.handleGoToCar}>
                    <CartWidget />
                 </div>
            </nav>
        )
    }
}

export default Navbar
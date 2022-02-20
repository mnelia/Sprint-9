import React from 'react'
import '../Footer/Footer.css'

const Footer = () => {
  return (
    <div className="main-footer">
        <div className="container">
            <div className="row">
                {/* Column1 */}
            <div className="col">
                <h4>ON THE GO INC</h4>
                <ul className="list-unstyled">
                    <li>684-314-774</li>
                    <li>Barcelona, Catalunya</li>
                    <li> Carrer Iberia 7th</li>
                </ul>
            </div>
                {/* column2 */}
                
            </div>
        </div>
        <hr />
        <div className="row">
            <p className="col-sn">
                &copy;{new Date().getFullYear()} ON THE GO INC | All right reserved | Terms Of Service | Privacy
            </p>
        </div>
    </div>
  )
}

export default Footer
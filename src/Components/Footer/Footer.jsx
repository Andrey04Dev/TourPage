import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ReactDOM from 'react-dom'
import './Footer.css'

const Footer = () => {
    return ReactDOM.createPortal(
        <Fragment>
        <div className='footer footer-responsive'>
            <div className ='row'>
                <div className="footer-informacion">
                <h4>Nombre de la Compañia o Logo</h4>
                    <p>Nuestra compañia busca la satifación, seguridad y el disfrute de las bella que 
                    tiene nuestra localidad Pavones</p>
                </div>
                <div className="footer-tours">
                <h4>Tours</h4>
                    <NavLink to='/' className='footer-link'>Pesca Deportiva</NavLink>
                    <NavLink to='/' className='footer-link'>Surfing</NavLink>
                    <NavLink to='/' className='footer-link'>Senderismo</NavLink>
                    <NavLink to='/' className='footer-link'>Cabalgatas</NavLink>
                </div>
                <div className=" footer-actividades">
                <h4>Actividades</h4>
                    <NavLink to='/' className='footer-link'>Yoga</NavLink>
                    <NavLink to='/' className='footer-link'>Pilates</NavLink>
                    <NavLink to='/' className='footer-link'>Masaje</NavLink>
                    <NavLink to='/' className='footer-link'>Chocolate Orgánico</NavLink>
                    <NavLink to='/' className='footer-link'>Comida Típica</NavLink>
                </div>
                <div className=" footer-contacto">
                <h4>Contactanos</h4>
                    <p><FontAwesomeIcon icon={['fas','phone-alt']} className='icon'/>+506 8748-9868</p>
                    <p><FontAwesomeIcon icon={['fas','phone-alt']} className='icon'/>+506 8748-9868</p>
                    <p><FontAwesomeIcon icon={['fas','clock']} className='icon'/> 8:00 a.m a 4:00 p.m </p>
                    <p><FontAwesomeIcon icon={['fas','map-marker-alt']} className='icon'/><a href="https://goo.gl/maps/j1zgLcaHvd5VSRTa7" target="blank" rel="noopener noreferrer">   Rio Claro, Pavones</a></p>
                <div className="footer-social">
                    <a target='blank' href='https://www.facebook.com/'><FontAwesomeIcon className='icon-social'icon={['fab','facebook']}/></a>
                    <a target='blank' href='https://www.instagram.com/'><FontAwesomeIcon className='icon-social'icon={['fab','instagram']}/></a>
                    <a target='blank' href='https://myaccount.google.com/'><FontAwesomeIcon className='icon-social'icon={['fab','google-plus']}/></a>
                </div>
                </div>
            </div>
        </div>
        <div className="footer-copy">
            <p>Copyright © 2020 Nombre de la Compañia – Pavones, Costa Rica. All rights reserved.</p>
        </div>
        </Fragment>,document.querySelector('#footer')
    )
}

export default Footer

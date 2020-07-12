import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import items from '../../data/menuActividades'
import './Navbar.css'

const NavBarActvidades = () => {
    return (
        <Fragment>
            <nav>
                <ul className='navbar-act'>
                    {
                        items.actividades.map(item =>(
                        <li className='link-act-li'><Link className='link-act' to={item.url}><img className='img-act' src={item.src} alt={item.alt}/>{item.nombre}</Link></li>      
                        ))
                    }
                    
                </ul>
            </nav>
        </Fragment>
    )
}

export default NavBarActvidades

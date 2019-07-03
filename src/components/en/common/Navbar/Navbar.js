import React from 'react'
import Logo from '../../../../assets/arango_logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

export const Navbar = () => (
    <div className="typo">
        <nav className="uk-navbar-container uk-navbar-transparent hide" uk-navbar="" >
            <div className="uk-navbar-left">
                <Link to="/">
                    <img style={{ marginLeft: '10%' }} src={Logo} className="logo" alt="" />
                </Link>
            </div>
            <div className="uk-navbar-right">
                <ul className="uk-navbar-nav">
                    <li><Link to="/en/">Home</Link></li>
                    <li><Link to="/en/about">About us</Link></li>
                    <li><Link to="/en/menu">Menu</Link></li>
                    <li><Link to="/en/events">Events</Link></li>
                    <li><Link to="/en/reservation">Reservation</Link></li>
                    <li><Link to="/en/press">Press</Link></li>
                    <li><Link to="/en/contact">Contact us</Link></li>
                </ul>
            </div>
        </nav>
        <div className="uk-offcanvas-content uk-hidden@m">
            <div id="sidenav" uk-offcanvas="overlay: true">
                <div className="uk-offcanvas-bar uk-flex uk-flex-column">
                    <ul className="uk-nav uk-nav-primary uk-nav-left uk-margin-auto-vertical">
                        <li><Link to="/en/" uk-toggle="target: #sidenav">Home</Link></li>
                        <li><Link to="/en/about" uk-toggle="target: #sidenav">About</Link></li>
                        <li><Link to="/en/menu" uk-toggle="target: #sidenav">Menu</Link></li>
                        <li><Link to="/en/events" uk-toggle="target: #sidenav">Events</Link></li>

                        <li><Link to="/en/reservations" uk-toggle="target: #sidenav">Reservation</Link></li>
                        <li><Link to="/en/press" uk-toggle="target: #sidenav">Press</Link></li>
                        <li><Link to="/contact" uk-toggle="target: #sidenav">Contact us</Link></li>
                        <li className="uk-nav-divider" uk-toggle="target: #sidenav"></li>
                        <li><a uk-toggle="target: #sidenav"><span className="uk-margin-small-right" uk-icon="icon: close"></span> Cerrar</a></li>
                    </ul>
                </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ paddingLeft: '10px' }} uk-toggle="target: #sidenav" uk-navbar-toggle-icon=""></div>
                <div style={{ margin: '0 auto' }}>
                    <Link to="/">
                        <img src={Logo} className="logo" alt="" />
                    </Link>
                </div>
            </div>

        </div >
    </div>
)
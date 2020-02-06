import React from 'react';
import Logo from '../../../assets/arango_logo.png'
import { Link } from 'react-router-dom'
import './Sidebar.css'

export const Sidebar = () => 
(

    <div className="sidebar">
        <li><img src={Logo} alt="" className="image"/></li>
        <li><Link to="/dashboard/">Inicio</Link></li>
        <li><Link to="/dashboard/galery">Galería</Link></li>
        <li><Link to="/dashboard/menu">Menú</Link></li>
        <li><Link to="/dashboard/press">Prensa</Link></li>
    </div>
)

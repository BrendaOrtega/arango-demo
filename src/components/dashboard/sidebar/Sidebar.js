import React, {Component} from 'react';
import Logo from '../../../assets/arango_logo.png'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import firebase from '../../../firebase';

class Sidebar extends Component {
    constructor(props) {
        super(props)

        this.logout = this.logout.bind(this)
    }

    logout() {
        firebase.auth().signOut();
    }

    render() {
        return (
            <div className="sidebar">
                <li><img src={Logo} alt="" className="image"/></li>
                <li><Link to="/dashboard/">Inicio</Link></li>
                <li><Link to="/dashboard/galery">Galería</Link></li>
                <li><Link to="/dashboard/menu">Menú</Link></li>
                <li><Link to="/dashboard/press">Prensa</Link></li>
                <li onClick={this.logout} className="logout">Cerrar sesión</li>
            </div>
        );
    }
}
export default Sidebar;
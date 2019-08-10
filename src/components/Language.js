import React, { Component } from 'react';
import './Language.css';
import {Link} from 'react-router-dom';

class Language extends Component {
    render() {
        return (
            <div className="language">
                <meta
                    name="description"
                    content="Arango | Cocina de Raíz"
                />
                <meta
                    name="keywords"
                    content="arango, arango restaurante, cocina, cocina gourmet, comida mexicana, comida"
                />
                <title>Arango</title>
                <div className="cubierta">
                <div className="welcome">
                    <h2 className="float">¿En qué idioma prefieres visitar nuestro sitio?</h2>
                </div>
                <div className="es">
                    <Link to="/es/">
                            <p>Español</p>

                            <hr/>
                    </Link>
                </div>
                <div className="en">
                    <Link to="/en/">
                        <p>Inglés</p>
                        <hr/>
                    </Link>
                </div>
                </div>
            </div>
        )
    }
}

export default Language;

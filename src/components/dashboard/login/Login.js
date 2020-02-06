import React, {Component} from 'react';
import './Login.css';

class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return(
            <div className="login-container">
                <div className="title">
                    Iniciar sesión
                </div>
                <form className="login-form">
                    <div className="form-group">
                        <label htmlFor="email">Correo electrónico</label>
                        <input type="text" name="email" placeholder="Correo electrónico"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input type="password" name="password" placeholder="Contraseña"></input>
                    </div>
                </form>
                <button className="btn_send" type="submit">Iniciar sesión</button>
            </div>
        );
    }
}

export default Login
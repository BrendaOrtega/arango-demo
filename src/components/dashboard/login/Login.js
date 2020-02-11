import React, {Component} from 'react';
import './Login.css';
import firebase from '../../../firebase';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    login(e) {
        e.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) =>{
        }).catch((error) => {
            console.log(error);
        });
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state.user)
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
                        <input value={this.state.email} onChange={this.handleChange} type="text" name="email" placeholder="Correo electrónico"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="Contraseña"></input>
                    </div>
                    <button className="btn_send" type="submit" onClick={this.login}>Iniciar sesión</button>
                </form>
            </div>
        );
    }
}

export default Login
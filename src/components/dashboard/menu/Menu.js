import React, {Component} from 'react';
import {Sidebar} from '../sidebar/Sidebar';
import './Menu.css';
import firebase from '../../../firebase'
import MenuSaucer from './MenuSaucer';

class Menu extends Component {
    constructor() {
        super();
        this.state = {
            saucerName: '',
            saucerPrice: '',
            saucerCategory: '',
            saucers: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeSaucer = this.removeSaucer.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const saucersRef = firebase.database().ref('saucers');
        const saucer = {
            saucerName: this.state.saucerName,
            saucerPrice: this.state.saucerPrice,
            saucerCategory: this.state.saucerCategory
        }
        saucersRef.push(saucer);
        this.setState({
            saucerName: '',
            saucerPrice: '',
            saucerCategory: ''
        });
    }

    componentDidMount() {
        const saucersRef = firebase.database().ref('saucers');
        saucersRef.on('value', (snapshot) => {
            let saucers = snapshot.val();
            let newState = [];
            for(let saucer in saucers) {
                newState.push({
                    saucerId: saucer,
                    saucerName: saucers[saucer].saucerName,
                    saucerPrice: saucers[saucer].saucerPrice,
                    saucerCategory: saucers[saucer].saucerCategory
                });
            }
            this.setState({
                saucers: newState
            });
        });
    }

    removeSaucer(saucerId) {
        const saucerRef = firebase.database().ref(`/saucers/${saucerId}`);
        saucerRef.remove();
        console.log("base de datos");
      }

    render() {
        return (
            <div className="container">
                <Sidebar />
                <section className="display-saucer">
                    <ul>
                        {
                            this.state.saucers.map((saucer) => {
                                return (
                                    <MenuSaucer
                                    saucerName={saucer.saucerName}
                                    saucerPrice={saucer.saucerPrice}
                                    saucerCategory={saucer.saucerCategory}
                                    key={saucer.saucerId}
                                    saucerId={saucer.saucerId}
                                    removeSaucer={this.removeSaucer} />
                                )
                            })
                        }
                    </ul>
                </section>
                <section className="add-saucer">
                    <button className="uk-button uk-button-default" uk-toggle="target: #modal-center">Open</button>

                    <div id="modal-center" className="uk-flex-top uk-modal">
                        <div className="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">

                            <button className="uk-modal-close-default uk-close" type="button"></button>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        </div>
                    </div>
                    <div className="form-container">
                        <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="saucer">Platillo: </label>
                            <input type="text" name="saucerName" placeholder="Platillo" onChange={(e)=>{this.handleChange(e)}} value={this.state.saucerName}/>
                        </div>
                        <div>
                            <label htmlFor="price">Precio: </label>
                            <input type="number" name="saucerPrice" placeholder="0.00" onChange={(e)=>{this.handleChange(e)}} value={this.state.saucerPrice}/> 
                        </div>
                        <div>
                            <label htmlFor="category">Categoría: </label>
                            <div className="select-style">
                                <select name="saucerCategory" onChange={(e)=>{this.handleChange(e)}} value={this.state.saucerCategory}>
                                    <option value="Para compartir">Para compartir</option>
                                    <option value="Entradas">Entradas</option>
                                    <option value="Ensaladas">Ensaladas</option>
                                    <option value="Sopa y pasta">Sopa y pasta</option>
                                    <option value="Principales">Principales</option>
                                    <option value="Dulce final">Dulce final</option>
                                    <option value="Digestivos">Digestivos</option>
                                    <option value="Bebidas">Bebidas</option>
                                    <option value="Cerveza">Cerveza</option>
                                </select>
                            </div>                      
                        </div>
                        <br /><br/>  
                        <button className="btn_send">Agregar</button>
                    </form>
                    </div>
                </section>
            </div>
        )
    }
}

export default Menu;
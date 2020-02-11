import React, {Component} from 'react';
import Sidebar from '../sidebar/Sidebar';
import './Menu.css';
import firebase from '../../../firebase'
import MenuSaucer from './MenuSaucer';
import Modal from 'react-responsive-modal';


class Menu extends Component {
    constructor() {
        super();
        this.state = {
            saucerName: '',
            saucerPrice: '',
            saucerCategory: '',
            add: false,
            saucers: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeSaucer = this.removeSaucer.bind(this);
    }

    onOpenModalAdd = () => {
        this.setState({add: true});
    }

    onCloseModalAdd = () => {
        this.setState({add: false});
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
        
        const {add} = this.state;

        return (
            <div className="container">
                <Sidebar />
                <p>Menu</p>
                <div className="display-saucer">
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
                </div>
                <div className="btn-add"><button className="btn_modal" onClick={this.onOpenModalAdd}><span uk-icon="icon: plus; ratio: 2"></span></button></div>
                <div className="add-saucer">
                    <Modal open={add} onClose={this.onCloseModalAdd}>
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
                    </Modal>
                </div>
            </div>
        )
    }
}

export default Menu;
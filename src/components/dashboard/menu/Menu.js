import React, {Component} from 'react';
import Sidebar from '../sidebar/Sidebar';
import './Menu.css';
import firebase from '../../../firebase'
import MenuSaucer from './MenuSaucer';
import Modal from 'react-responsive-modal';
import { Redirect } from 'react-router-dom';


class Menu extends Component {
    constructor() {
        super();
        this.state = {
            saucerName: '',
            saucerNameEn: '',
            saucerPrice: '',
            saucerCategory: '',
            saucerCategoryEn: '',
            add: false,
            edit: false,
            saucers: [],
            editValues: {
                saucerName:'',
                saucerNameEn: '',
                saucerPrice: '',
                saucerCategory: '',
                saucerCategoryEn: ''
            },
            idEdit: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeSaucer = this.removeSaucer.bind(this);
        this.updateSaucer = this.updateSaucer.bind(this);
    }

    onOpenModalAdd = () => {
        this.setState({add: true});
    }

    onCloseModalAdd = () => {
        this.setState({add: false});
    }

    onOpenModalEdit = (saucerId) => {
        this.setState({edit: true});
        const saucerRef = firebase.database().ref(`/saucers/${saucerId}`);
        saucerRef.on('value', (snapshot) => {
            let saucer = snapshot.val();
            let editValues = {
                saucerName: saucer.saucerName,
                saucerNameEn: saucer.saucerNameEn,
                saucerPrice: saucer.saucerPrice,
                saucerCategory: saucer.saucerCategory,
                saucerCategoryEn: saucer.saucerCategoryEn
            }
            let idEdit = saucerId
            this.setState({editValues, idEdit})
            }
        )    
    }

    onCloseModalEdit = () => {
        this.setState({edit: false});
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleChangeEdit(e) {
        let {editValues} = this.state;
        editValues[e.target.name] = e.target.value
        this.setState({
            editValues
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const saucersRef = firebase.database().ref('saucers');
        const saucer = {
            saucerName: this.state.saucerName,
            saucerNameEn: this.state.saucerNameEn,
            saucerPrice: this.state.saucerPrice,
            saucerCategory: this.state.saucerCategory,
            saucerCategoryEn: this.state.saucerCategoryEn
        }
        saucersRef.push(saucer);
        this.setState({
            saucerName: '',
            saucerNameEn: '',
            saucerPrice: '',
            saucerCategory: '',
            saucerCategoryEn: ''
        });
    }

    removeSaucer(saucerId) {
        const saucerRef = firebase.database().ref(`/saucers/${saucerId}`);
        saucerRef.remove();
        console.log("base de datos");
    }

    updateSaucer(saucerId) {
        const saucerRef = firebase.database().ref();
        saucerRef.child(`saucers/${saucerId}`).update(this.state.editValues).then((e)=>{
            this.setState({saucers:[]})
            this.showData(); this.onCloseModalEdit()}).catch((e)=>console.log(e));
    }

    showData() {
        const saucersRef = firebase.database().ref('saucers');
        saucersRef.on('value', (snapshot) => {
            let saucers = snapshot.val();
            let newState = [];
            for(let saucer in saucers) {
                newState.push({
                    saucerId: saucer,
                    saucerName: saucers[saucer].saucerName,
                    saucerNameEn: saucers[saucer].saucerNameEn,
                    saucerPrice: saucers[saucer].saucerPrice,
                    saucerCategory: saucers[saucer].saucerCategory,
                    saucerCategoryEn: saucers[saucer].saucerCategoryEn
                });
            }
            this.setState({
                saucers: newState
            });
        });
    }

    componentDidMount() {
        this.showData();

        firebase.auth().onAuthStateChanged((user) => {
            if(!user){
                const {history} = this.props;
                history.push('/dashboard/login')
            }
        })
       
    }

    render() {
        
        const {add} = this.state;
        const {edit} = this.state;
            return(
                <div className="container">
                    <Sidebar />
                    <p style={{fontSize: "30px", fontWeight: "400"}}>Menu</p>
                    <div className="btn-add">
                        <button className="btn_modal" onClick={this.onOpenModalAdd}><span uk-icon="icon: plus; ratio: 2"></span></button>
                    </div>
                    <div className="display-saucer">
                        <table className="uk-table">
                            <tbody>
                            {
                                this.state.saucers.map((saucer) => {
                                    return (
                                        <MenuSaucer
                                        saucer = {saucer}
                                        removeSaucer = {this.removeSaucer}
                                        onOpenModalEdit = {this.onOpenModalEdit} />
                                    )
                                })
                            }
                            </tbody>
                        </table>    
                    </div>
                    <div className="add-saucer">
                        <Modal open={add} onClose={this.onCloseModalAdd}>
                            <div className="form-container">
                                <form onSubmit={this.handleSubmit}>
                                <div>
                                    <label htmlFor="saucer">Platillo: </label>
                                    <input type="text" name="saucerName" placeholder="Platillo" onChange={(e)=>{this.handleChange(e)}} value={this.state.saucerName}/>
                                </div>
                                <div>
                                    <label htmlFor="saucer">Platillo en inglés: </label>
                                    <input type="text" name="saucerNameEn" placeholder="Platillo" onChange={(e)=>{this.handleChange(e)}} value={this.state.saucerNameEn}/>
                                </div>
                                <div>
                                    <label htmlFor="price">Precio: </label>
                                    <span>$</span><input type="number" name="saucerPrice" placeholder="0.00" onChange={(e)=>{this.handleChange(e)}} value={this.state.saucerPrice}/><span>.00</span> 
                                </div>
                                <div>
                                    <label htmlFor="category">Categoría: </label>
                                    <div className="select-style">
                                        <select name="saucerCategory" onChange={(e)=>{this.handleChange(e)}} value={this.state.saucerCategory}>
                                            <option value="seleccionar">seleccionar</option>
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
                                <div>
                                    <label htmlFor="category">Categoría en inglés: </label>
                                    <div className="select-style">
                                        <select name="saucerCategoryEn" onChange={(e)=>{this.handleChange(e)}} value={this.state.saucerCategoryEn}>
                                            <option value="seleccionar">seleccionar</option>
                                            <option value="For Share">For Share</option>
                                            <option value="Entreé">Entreé</option>
                                            <option value="Salads">Salads</option>
                                            <option value="Soup & Pasta">Soup & Pasta</option>
                                            <option value="Main Courses">Main Courses</option>
                                            <option value="Desserts">Desserts</option>
                                            <option value="Digestives">Digestives</option>
                                            <option value="Water">Water</option>
                                            <option value="Beer">Beer</option>
                                        </select>
                                    </div>                      
                                </div>
                                <br /><br/>  
                                <button className="btn_send">Agregar</button>
                            </form>
                            </div>
                        </Modal>
                    </div>
                    <div className="edit-saucer">
                        <Modal open={edit} onClose={this.onCloseModalEdit}>
                            <div className="form-container">
                                <form onSubmit={(e)=>{
                                    e.preventDefault();
                                    this.updateSaucer(this.state.idEdit)}}>
                                <div>
                                    <label htmlFor="saucer">Platillo: </label>
                                    <input type="text" name="saucerName" placeholder="Platillo" onChange={(e)=>{this.handleChangeEdit(e)}} value={this.state.editValues.saucerName}/>
                                </div>
                                <div>
                                    <label htmlFor="saucer">Platillo en inglés: </label>
                                    <input type="text" name="saucerNameEn" placeholder="Platillo" onChange={(e)=>{this.handleChangeEdit(e)}} value={this.state.editValues.saucerNameEn}/>
                                </div>
                                <div>
                                    <label htmlFor="price">Precio: </label>
                                    <span>$</span><input type="number" name="saucerPrice" placeholder="0.00" onChange={(e)=>{this.handleChangeEdit(e)}} value={this.state.editValues.saucerPrice}/><span>.00</span> 
                                </div>
                                <div>
                                    <label htmlFor="category">Categoría: </label>
                                    <div className="select-style">
                                        <select name="saucerCategory" onChange={(e)=>{this.handleChangeEdit(e)}} value={this.state.editValues.saucerCategory}>
                                            <option value="seleccionar">seleccionar</option>
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
                                <div>
                                    <label htmlFor="categoryEn">Categoría en inglés: </label>
                                    <div className="select-style">
                                        <select name="saucerCategoryEn" onChange={(e)=>{this.handleChangeEdit(e)}} value={this.state.editValues.saucerCategoryEn}>
                                            <option value="seleccionar">seleccionar</option>
                                            <option value="For Share">For Share</option>
                                            <option value="Entreé">Entreé</option>
                                            <option value="Salads">Salads</option>
                                            <option value="Soup & Pasta">Soup & Pasta</option>
                                            <option value="Main Courses">Main Courses</option>
                                            <option value="Desserts">Desserts</option>
                                            <option value="Digestives">Digestives</option>
                                            <option value="Water">Water</option>
                                            <option value="Beer">Beer</option>
                                        </select>
                                    </div>                      
                                </div>
                                <br /><br/>  
                                <button className="btn_send">Actualizar</button>
                            </form>
                            </div>
                        </Modal>   
                    </div>
                </div>
            )
        
    }
}

export default Menu;
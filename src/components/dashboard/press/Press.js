import React, {Component} from 'react';
import Sidebar from '../sidebar/Sidebar';
import './Press.css';
import firebase from '../../../firebase'
import Modal from 'react-responsive-modal';
import PressNotice from './PressNotice';

class Press extends Component {
    constructor() {
        super();
        this.state = {
            noticeUrl: '',
            noticeTitle: '',
            noticePaper: '',
            noticeMonth: '',
            noticeYear: '',
            add: false,
            notices: [],
            images:[],
            showImageUrl: '',
            name: '',
            inputRef: this.refs.myInput
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeNotice = this.removeNotice.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
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

    handleUpload(e) {
        const imagesPress = e.target.files[0]
        const newName = Date.now().toString() + imagesPress.name
        const storageRef = firebase.storage().ref(`imagesPress/${newName}`)
        const task = storageRef.put(imagesPress);

        task.on('state_changed', (snapshot) =>{
            
        }, (error)=>{
            console.log(error.message)
        }, () => {
            storageRef.getDownloadURL().then(url => {
                this.setState({
                    showImageUrl: url,
                    name: newName                    
                })
            })
        });
        this.inputFiles.value='';
    }

    handleSubmit(e){
        e.preventDefault();
        const noticesRef = firebase.database().ref('notices');
        const notice = {
            noticeUrl: this.state.noticeUrl,
            noticeTitle: this.state.noticeTitle,
            noticePaper: this.state.noticePaper,
            noticeMonth: this.state.noticeMonth,
            noticeYear: this.state.noticeYear,
            showImageUrl: this.state.showImageUrl,
            name: this.state.name
        }
        noticesRef.push(notice);
        this.setState({
            noticeUrl: '',
            noticeTitle: '',
            noticePaper: '',
            noticeMonth: '',
            noticeYear: '',
            showImageUrl: '',
            name: ''
        });
    }

    componentDidMount() {
        const noticesRef = firebase.database().ref('notices');
        noticesRef.on('value', (snapshot) => {
            let notices = snapshot.val();
            let newState = [];
            for(let notice in notices) {
                newState.push({
                    noticeId: notice,
                    noticeUrl: notices[notice].noticeUrl,
                    noticeTitle: notices[notice].noticeTitle,
                    noticePaper: notices[notice].noticePaper,
                    noticeMonth: notices[notice].noticeMonth,
                    noticeYear: notices[notice].noticeYear,
                    showImageUrl: notices[notice].showImageUrl,
                    name:notices[notice].name
                });
            }
            this.setState({
                notices: newState
            });
        });

    }

    removeNotice(noticeId, name) {
        const noticeRef = firebase.database().ref('notices');
        const storageRef = firebase.storage().ref('imagesPress')
        storageRef.child(name).delete().then((e)=>console.log(e)).catch((e)=>console.log(e))
        noticeRef.child(noticeId).remove().then((e)=>console.log(e)).catch((e)=>console.log(e))
      }

    render() {

        const {add} = this.state;

        return (
            <div className="container">
                <Sidebar />
                <p style={{fontSize: "30px", fontWeight: "400"}}>Prensa</p>
                <section className="display-notice">
                    <ul>
                        {
                            this.state.notices.map((notice) => {
                                return (
                                    <PressNotice
                                    noticeUrl={notice.noticeUrl}
                                    imageUrl={notice.showImageUrl}
                                    name={notice.name}
                                    noticeTitle={notice.noticeTitle}
                                    noticePaper={notice.noticePaper}
                                    noticeMonth={notice.noticeMonth}
                                    noticeYear={notice.noticeYear}
                                    key={notice.noticeId}
                                    noticeId={notice.noticeId}
                                    removeNotice={this.removeNotice} />
                                )
                            })
                        }
                    </ul>
                </section>
                <div className="btn-add"><button className="btn_modal" onClick={this.onOpenModalAdd}><span uk-icon="icon: plus; ratio: 2"></span></button></div>
                <section className="add-notice">
                    <Modal open={add} onClose={this.onCloseModalAdd}>
                        <div className="form-container">
                            <form onSubmit={this.handleSubmit}>
                            <div>
                                <label htmlFor="noticeUrl">Link de noticia: </label>
                                <input type="url" name="noticeUrl" placeholder="Link de la noticia" onChange={(e)=>{this.handleChange(e)}} value={this.state.noticeUrl} required/>
                            </div>    
                            <div>
                                <label htmlFor="noticeTitle">Título de la nota: </label>
                                <input type="text" name="noticeTitle" placeholder="Título" onChange={(e)=>{this.handleChange(e)}} value={this.state.noticeTitle} required/> 
                            </div>
                            <div>
                                <label htmlFor="noticePaper">Periódico: </label>
                                <input type="text" name="noticePaper" placeholder="Periódico" onChange={(e)=>{this.handleChange(e)}} value={this.state.noticePaper}required/> 
                            </div>
                            <div>
                                <label htmlFor="noticeMonth">Mes: </label>
                                <div className="select-style">
                                    <select name="noticeMonth" onChange={(e)=>{this.handleChange(e)}} value={this.state.noticeMonth} required>
                                        <option value="seleccionar">seleccionar</option>
                                        <option value="Enero">Enero</option>
                                        <option value="Febrero">Febrero</option>
                                        <option value="Marzo">Marzo</option>
                                        <option value="Abril">Abril</option>
                                        <option value="Mayo">Mayo</option>
                                        <option value="Junio">Junio</option>
                                        <option value="Julio">Julio</option>
                                        <option value="Agosto">Agosto</option>
                                        <option value="Septiembre">Septiembre</option>
                                        <option value="Octubre">Octubre</option>
                                        <option value="Noviembre">Noviembre</option>
                                        <option value="Diciembre">Diciembre</option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <label htmlFor="noticeYear">Año: </label>
                                <input type="number" name="noticeYear" placeholder="2020" onChange={(e)=>{this.handleChange(e)}} value={this.state.noticeYear} required/> 
                            </div>
                            <div>
                                <input ref={input=>{this.inputFiles=input}} className="imagePress" type="file" name="imageUrl" onChange={(e)=>{this.handleUpload(e)}} accept="image/png, image/jpeg"/>
                                <input className="imageValue" onChange={(e)=>{this.handleChange}} value ={this.state.showImageValue}/>
                                {console.log(this.state.showImageUrl)}
                                <input className="nameValue" onChange={(e)=>{this.handleChange}} value ={this.state.name}/>
                                {console.log(this.state.name)}
                            </div>
                            <button className="btn_send">Agregar</button>
                        </form>
                        </div>
                    </Modal>
                    
                </section>
            </div>
        )
    }
}

export default Press;
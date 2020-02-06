import React, {Component} from 'react';
import {Sidebar} from '../sidebar/Sidebar';
import './Press.css';
import firebase from '../../../firebase'

class Press extends Component {
    constructor() {
        super();
        this.state = {
            noticeTitle: '',
            noticePaper: '',
            noticeImage: '',
            notices: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeNotice = this.removeNotice.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const noticesRef = firebase.database().ref('notices');
        const notice = {
            noticeTitle: this.state.noticeTitle,
            noticePaper: this.state.noticePaper,
            noticeImage: this.state.noticeImage
        }
        noticesRef.push(notice);
        this.setState({
            noticeTitle: '',
            noticePaper: '',
            noticeImage: ''
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
                    noticeTitle: notices[notice].noticeTitle,
                    noticePaper: notices[notice].noticePaper,
                    noticeImage: notices[notice].noticeImage
                });
            }
            this.setState({
                notices: newState
            });
        });
    }

    removeNotice(noticeId) {
        const noticeRef = firebase.database().ref(`/notices/${noticeId}`);
        noticeRef.remove();
      }

    render() {
        return (
            <div className="container">
                <Sidebar />
                <section className="display-notice">

                </section>
                <section className="add-notice">
                    <div className="form-container">
                        <form onSubmit={this.handleSubmit}>
                        <div>
                            <label htmlFor="noticeTitle">Titulo: </label>
                            <input type="text" name="noticeTitle" placeholder="Título de noticia" onChange={(e)=>{this.handleChange(e)}} value={this.state.noticeTitle}/>
                        </div>
                        <div>
                            <label htmlFor="noticePaper">Periódico: </label>
                            <input type="text" name="noticePaper" placeholder="Periódico" onChange={(e)=>{this.handleChange(e)}} value={this.state.noticePaper}/> 
                        </div>
                        <div>
                            <label htmlFor="image"> Añadir imagen </label>
                            <input className="image-file" type="file" id="image" name="noticeImage" accept="image/png, image/jpeg"></input>                           
                        </div>
                        <button className="btn_send">Agregar</button>
                    </form>
                    </div>
                </section>
            </div>
        )
    }
}

export default Press;
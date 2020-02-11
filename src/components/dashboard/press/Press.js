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
            noticeTitle: '',
            noticePaper: '',
            noticeImage: '',
            add: false,
            notices: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.removeNotice = this.removeNotice.bind(this);
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
        console.log(noticeId)
      }

    render() {

        const {add} = this.state;

        return (
            <div className="container">
                <Sidebar />
                <p>Prensa</p>
                <section className="display-notice">
                    <ul>
                        {
                            this.state.notices.map((notice) => {
                                return (
                                    <PressNotice
                                    noticeTitle={notice.noticeTitle}
                                    noticePaper={notice.noticePaper}
                                    noticeImage={notice.noticeImage}
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
                                <label htmlFor="noticeTitle">Titulo: </label>
                                <input type="text" name="noticeTitle" placeholder="Título de noticia" onChange={(e)=>{this.handleChange(e)}} value={this.state.noticeTitle}/>
                            </div>
                            <div>
                                <label htmlFor="noticePaper">Periódico: </label>
                                <input type="text" name="noticePaper" placeholder="Periódico" onChange={(e)=>{this.handleChange(e)}} value={this.state.noticePaper}/> 
                            </div>
                            <div>
                                <label htmlFor="image"> Añadir imagen </label>
                                <input className="image-file" type="text" id="image" name="noticeImage"></input>                           
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
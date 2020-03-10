/**
 * Created by brendaortega on 30/09/18.
 */
import React, { Component } from 'react';
import './Prensa.css';
import sr from '../home/scrollReveal.js';
import {Navbar} from "../common/Navbar/Navbar";
import firebase from '../../../firebase';

class Prensa extends Component {

        state = {
            noticeUrl: '',
            noticeTitle: '',
            noticePaper: '',
            noticeMonth: '',
            noticeYear: '',
            notices: [],
            showImageUrl: ''
        };

    componentDidMount () {

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
                    showImageUrl: notices[notice].showImageUrl
                });
            }
            this.setState({
                notices: newState
            });
        });

        window.scroll(0, 0)

        const config3 = {
            origin: 'bottom',
            duration: 800,
            delay: 100,
            distance: '50%',
            scale: 1,
            easing: 'ease',
        }

        sr.reveal('.bot', config3);
    }
    render() {

        return (
            <section>
                <meta
                    name="description"
                    content="Nos pondremos en contacto contigo lo antes posible"
                />
                <title>Press | Arango</title>
                <Navbar/>
            <div className="prensa" style={{paddingTop:"30px"}}>
                <div className="medios">
                    {/* <h2 className="bot">Prensa</h2>*/}
                    {
                        this.state.notices.map((notice, index) => {
                            return(
                                <div key={index}>
                                    <a href={notice.noticeUrl} target="blank">
                                        <div className="card bot">
                                                <img src={notice.showImageUrl} alt="noticia1"/>
                                                <div className="nota">
                                                    <h3>{notice.noticeTitle}</h3>
                                                    <p>{notice.noticePaper}
                                                    </p>
                                                    <span>{notice.noticeMonth}, {notice.noticeYear}</span>
                                                </div>
                                        </div>
                                    </a>
                                </div>                                
                            )
                        })
                    }
                </div>
            </div>
        </section>
        )
    }
}

export default Prensa;

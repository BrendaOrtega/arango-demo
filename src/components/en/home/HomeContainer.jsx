import React, { Component } from 'react'
import './Home.css'
import sr from './scrollReveal.js';
import firebase from '../../../firebase'
import {Navbar} from "../common/Navbar/Navbar";


/*
const date = new Date(2018, 10, 20, 11);
*/

class HomeContainer extends Component {
    state = {
        loading:false,
        images: [],

    };
    componentDidMount () {
        window.scroll(0, 0)
        const config = {
            origin: 'right',
            duration: 1000,
            delay: 150,
            distance: '100%',
            scale: 1,
            easing: 'ease',
        }

        const config2 = {
            origin: 'left',
            duration: 1000,
            delay: 150,
            distance: '100%',
            scale: 1,
            easing: 'ease',
        }
        const config3 = {
            origin: 'bottom',
            duration: 800,
            delay: 100,
            distance: '100%',
            scale: 1,
            easing: 'ease',
        }

        sr.reveal('.right', config2);
        sr.reveal('.left', config);
        sr.reveal('.bot', config3);

        //console.log('mijo')
        let div = document.createElement('div')
        div.id = 'fb-root'
        document.body.appendChild(div)


        let script = document.createElement('script')
        script.id = 'bliss'
        script.async = true;

        const text = document.createTextNode(`
            window.fbAsyncInit = function() {
            FB.init({
                xfbml            : true,
                version          : 'v3.2'
            });
        };

        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
            `)
        script.appendChild(text)
        let div2 = document.createElement('div')
        div2.classList = 'fb-customerchat'
        div2.innerHTML = `
            <div class="fb-customerchat"
        attribution="setup_tool"
        page_id="204530763746823"
        theme_color="#d4a88c"
        logged_in_greeting="Hola! ¿Como podemos ayudarte?"
        logged_out_greeting="Hola! ¿Como podemos ayudarte?">
            </div>
        `
        document.body.appendChild(div2)
        document.body.appendChild(script)

        const databaseRef = firebase.database().ref('images');
        databaseRef.on('value', (snapshot) => {
            let images  = snapshot.val();
            let newState = [];
            for(let image in images) {
                newState.push({
                    imageId: image,
                    url: images[image].url
                });
            }
            this.setState({
                images: newState
            });
        });
    }


    render() {
        return (
        <section>
            <Navbar/>
            <div style={{width:"90%", margin:"0 auto", paddingTop:"70px"}}>

                <section className="uk-section-small">
                    <div className="uk-container contain">
                       {/* <h1 style={{fontFamily: 'Arango', textAlign:"center", fontSize:"50px"}}>Reserva al <br/>+ 52 57 05 5034 </h1>
                        <h2 className="bot" style={{fontFamily: 'Arango', textAlign:"center", fontSize:"50px"}}>Próximamente 🕰</h2>
                        <div className="uk-text-center bot" style={{fontSize:"32px"}}>Abrimos el 1 de Diciembre a las 12:00 pm</div>
                        <div className="outter">
                            <div className="inner bot" uk-countdown="date: 2018-12-01T12:12:00+00:00">
                                <span className="uk-countdown-number uk-countdown-days bot"></span> días.
                                <span className="uk-countdown-number uk-countdown-hours bot"></span> horas.
                                <span className="uk-countdown-number uk-countdown-minutes bot"></span> minutos.
                            </div>
                        </div>*/}
                        <div className="uk-grid uk-child-width-1-4@l  uk-child-width-1-3@m uk-child-width-1-2@s uk-grid-small" uk-grid="masonry: true" uk-lightbox="animation: slide">
                            {this.state.images.map((image, index) => {
                                return (
                                    <div key={index}>
                                        <div className="uk-card uk-card-default">
                                            <a className="uk-inline" href={image.url ? image.url : "https://getuikit.com/docs/images/photo.jpg"} data-type="image" data-caption="<span uk-icon='icon:expand' id='expand'></span>">
                                                <img className="bot" src={image.url ? image.url : "https://getuikit.com/docs/images/photo.jpg"} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </div>
        </section>
        )
    }
}

export default HomeContainer
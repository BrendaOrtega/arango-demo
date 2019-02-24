import React, { Component } from 'react'
import './Home.css'
import sr from './scrollReveal.js';
import uno from '../../assets/1.JPG';
import tres from '../../assets/3.JPG';
import cuatro from '../../assets/4.JPG';
import cinco from '../../assets/5.JPG';
import siete from '../../assets/7.JPG';
import nueve from '../../assets/9.JPG';
import diez from '../../assets/10.JPG';
import once from '../../assets/11.JPG';
import doce from '../../assets/12.JPG';
import trece from '../../assets/13.JPG';
import catorce from '../../assets/14.JPG';
import ocho from '../../assets/8.JPG';


/*
const date = new Date(2018, 10, 20, 11);
*/

class HomeContainer extends Component {
    state = {
        loading:false,
        images: [
            uno,
            ocho,
            cuatro,
            tres,
            cinco,
            trece,
            siete,
            nueve,
            diez,
            doce,
            once,

            catorce

        ],

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
    }


    render() {
        return (

            <div style={{width:"90%", margin:"0 auto"}}>

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
                                            <a className="uk-inline" href={image ? image : "https://getuikit.com/docs/images/photo.jpg"} data-type="image" data-caption="<span uk-icon='icon:expand' id='expand'></span>">
                                                <img className="bot" src={image ? image : "https://getuikit.com/docs/images/photo.jpg"} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default HomeContainer
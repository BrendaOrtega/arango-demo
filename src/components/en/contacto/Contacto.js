/**
 * Created by brendaortega on 30/09/18.
 */
import React, { Component } from 'react';
import './Contacto.css';
import sr from '../home/scrollReveal.js';
import {Navbar} from "../common/Navbar/Navbar";

class Contacto extends Component {
    componentDidMount() {
        window.scroll(0, 0)

        const config3 = {
            origin: 'bottom',
            duration: 800,
            delay: 50,
            distance: '100%',
            scale: 1,
            easing: 'ease',
        }

        sr.reveal('.bot', config3);

    }
    render() {
        return (
            <div>
                <meta
                    name="description"
                    content="Nos pondremos en contacto contigo lo antes posible"
                />

                <title>Contact | Arango</title>
                <Navbar/>
                <div className="contacto none" style={{paddingTop:"70px"}}>
                    <div className="flex">
                        <div className="horarios">
                            <div>
                                <h3 className="bot">Service hours</h3>
                                <p className="bot">Sunday to Wednesday: 1:00 pm a 11:00 pm </p>
                                <p className="bot">Thursday to Saturday: 1:00 pm a 1:00 am</p>
                                <br />
                                <h3 className="bot">Contact us</h3>
                                <p className="bot">contacto@arango.com</p>
                                <p className="bot">+52 55 57 05 5034 </p>
                            </div>
                        </div>
                        <div className="map bot">

                            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15050.469744390388!2d-99.1640399708374!3d19.428928640180988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x42f387a1de967257!2sARANGO+Cocina+de+Ra%C3%ADces!5e0!3m2!1ses-419!2smx!4v1542000386220" frameborder="0" style={{ border: "0" }} allowfullscreen></iframe>
                        </div>
                    </div>

                </div>
                <div className="contacto display">
                    <div className="flex">
                        <div className="horarios">
                            <div>
                                <h3 >Service hours</h3>
                                <p >Sunday to Wednesday: 1:00 pm a 11:00 pm </p>
                                <p >Thursday to Saturday: 1:00 pm a 1:00 am</p>
                                <br />
                                <h3 >Contact us</h3>
                                <p >contacto@arango.com</p>
                                <p>+52 55 57 05 5034 </p>
                            </div>
                        </div>
                        <div className="map">
                            <iframe title="map"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.4497161888457!2d-99.15485238536316!3d19.436168086882297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f8d3bd190007%3A0xe948db4a7a4ceb23!2sDe+La+Rep%C3%BAblica+157%2C+Tabacalera%2C+06030+Ciudad+de+M%C3%A9xico%2C+CDMX!5e0!3m2!1ses-419!2smx!4v1538369504370" frameborder="0" style={{ border: "0" }} allowfullscreen></iframe>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Contacto;

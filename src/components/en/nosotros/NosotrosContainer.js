import React, { Component } from 'react'
import './Nosotros.css'
import sr from '../home/scrollReveal.js';
import {Navbar} from "../common/Navbar/Navbar";

class NosotrosContainer extends Component {
    state = {
        images: [
            "https://images.unsplash.com/photo-1529564879024-c54e7c2dd0e5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4db9250c2b7ca32530838c559be60f56&auto=format&fit=crop&w=1500&q=80",
            "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c5d544bcd4ed70a95394185b2340f9ab&auto=format&fit=crop&w=750&q=80",
            "https://images.unsplash.com/photo-1512485800893-b08ec1ea59b1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=4ad59d9235c26b813c3450d63d88ac20&auto=format&fit=crop&w=750&q=80",
            "https://images.unsplash.com/photo-1517254456976-ee8682099819?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f90bb66387a2b9edf0dd7f518eb2b658&auto=format&fit=crop&w=358&q=80",
            "https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9571e7dfc1016803908833844646dbb3&auto=format&fit=crop&w=750&q=80",
            "https://images.unsplash.com/photo-1416453072034-c8dbfa2856b5?ixlib=rb-0.3.5&s=187dae45de9bab8f7f667ae3759a8dce&auto=format&fit=crop&w=758&q=80",
            "https://images.unsplash.com/photo-1527224538127-2104bb71c51b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c7fc4917011de5709727efa4b8497bad&auto=format&fit=crop&w=751&q=80",


        ],

    };

    componentDidMount() {
        window.scroll(0, 0)

        const config3 = {
            origin: 'bottom',
            duration: 800,
            delay: 100,
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
                    content="La historia de Doroteo Arango, nuestro heróe revolucionario."
                />

                <title>About| Arango</title>

            <Navbar/>
            <section className="uk-section-small" style={{paddingTop:"120px"}}>
                <div className="uk-container snappy-scroll">
                    <div className="filosofia">
                        <div className="img-box">

                        </div>
                        <div className="text-box">
                            <h3 className="uk-text-lead uk-text-uppercase bot">We are the revolution</h3>
                            <p className="text-justify uk-text-muted bot">
                                Doroteo Arango fought for an ideal, for a better country, for a dream; today the
                                young people of Mexico have the responsibility to continue with this fight and make a
                                homage to our roots, shout to our Mexico that the Arangos'' dream can be fulfilled
                                every day in different ways. <br /> <br />

                                Today we fight for equality, for sustainability and for helping our
                                communities; We fight to help eradicate hunger and poverty, we fight to be
                                a socially responsible company and promote change in Mexico; in each dish it
                                it demonstrates our passion, our roots and the pride of our flavors. <br /> <br />

                                In Arango our vision goes beyond being an extraordinary restaurant, but a place
                                that really exalts the Mexican being, a place that shows through every dish and
                                every flavor that can be had what one day began as a dream, a better Mexico.
                            </p>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <div className="about-chef">
                        <div className="texti-box">
                            <h3 className="uk-text-lead uk-text-uppercase bot">Acerca del chef</h3>
                            <p className="text-justify uk-text-muted bot">
                                <strong>Alejandro Cuatepotzo </strong>
                                born in Puebla city, for this chef, the kitchen represents passion, creativity and perseverance. Dedicated to discovering the magic of the Mexico's flavors, "there is nothing richer than refreshing the memory, much more so with the palate". He was recognized in 2015 as "Rising Star Chef de México" for the Festival of Wine and Food Festival of Cancun-Riviera Maya, one of the most important festivals in Latin America.
                                He was also nominated for Travel and Leisure and Food and Travel Mexico as one of the best culinary proposals in the country. Chef Enrique Olvera's booklet has brought his flavors and passion for Mexican food to London, the Turks and Caicos Islands, Colombia, the United Arab Emirates and the US.
                                He share his cuisine and knowledge with the chef Martha Ortiz and in his project the restaurant Antonia Bistro in San Miguel de Allende, Gto and the newly inaugurated ARANGO Cocina de Raíces in Mexico City where the aim is to enhance Mexican cuisine through its roots poblanas.

                            </p>
                        </div>
                       {/* <div className="img-box">
                            <img style={{ margin: 'auto' }}
                                src="https://images.unsplash.com/photo-1532635224-cf024e66d122?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd420ae5e15c23ec48bf9b60125b7dca&auto=format&fit=crop&w=750&q=80"
                                alt="" />
                        </div>*/}
                    </div>

                </div>
            </section></div>
        )
    }
}
export default NosotrosContainer;


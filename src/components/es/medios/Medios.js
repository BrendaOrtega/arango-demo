import React, { Component } from 'react';
import sr from '../inicio/scrollReveal.js';
import {Navbar} from "../compartidos/Navbar";

class Medios extends Component {
    componentDidMount () {
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
                <Navbar/>
                <div className="prensa" style={{paddingTop:"30px"}}>
                    <div className="medios">
                        {/* <h2 className="bot">Prensa</h2>*/}
                        <a href="https://www.elfinanciero.com.mx/buena-vida/revolucion-a-la-carta-sabor-textura-y-color" target="blank">
                            <div className="card bot">
                                <img src="https://www.elfinanciero.com.mx/uploads/2019/01/13/01ded4259d1547443783_standard_desktop_medium_retina.png" alt="noticia1"/>
                                <div className="nota">
                                    <h3>Revolución a la carta: sabor, textura y color</h3>
                                    <p>El Financiero
                                    </p>
                                    <span>Enero, 2019</span>
                                </div>
                            </div>
                        </a>
                        <a href="https://lopezdoriga.com/vida-y-estilo/recomendaciones-para-el-fin-de-semana-del-13-al-16-de-diciembre/" target="blank">
                            <div className="card bot">
                                <img src="https://i2.wp.com/lopezdoriga.com/wp-content/uploads/2018/12/arango.jpg?ssl=1" alt="noticia1"/>
                                <div className="nota">
                                    <h3>Recomendaciones para el fin de semana</h3>
                                    <p>López Doriga Digital
                                    </p>
                                    <span>Diciembre 2018</span>
                                </div>
                            </div>
                        </a>
                        <a href="https://www.timeoutmexico.mx/ciudad-de-mexico/restaurantes/arango" target="blank">
                            <div className="card bot">
                                <img src="https://media.timeout.com/images/105387936/1372/772/image.jpg" alt="noticia1"/>
                                <div className="nota">
                                    <h3>Arango</h3>
                                    <p>Timeout Ciudad de México
                                    </p>
                                    <span>Diciembre 2018</span>
                                </div>
                            </div>
                        </a>
                        <a href="https://www.eluniversal.com.mx/menu/6-restaurantes-que-tienes-que-conocer-este-2019" target="blank">
                            <div className="card bot">
                                <img src="https://www.eluniversal.com.mx/sites/default/files/u15544/arango_cocina_de_raices_instagram_alejandro_cuatepotzo.jpg" alt="noticia1"/>
                                <div className="nota">
                                    <h3>6 restaurantes que tienes que conocer este 2019</h3>
                                    <p>El Universal
                                    </p>
                                    <span>Enero, 2019</span>
                                </div>
                            </div>
                        </a>
                        <a href="https://foodandtravel.mx/wp-content/uploads/2019/02/arangomural.jpg" target="blank">
                            <div className="card bot">
                                <img src="https://foodandtravel.mx/wp-content/uploads/2019/02/arangomural.jpg" alt="noticia1"/>
                                <div className="nota">
                                    <h3>Hot spots de Arango, Cocina de raíces

                                    </h3>
                                    <p>Food & Travel
                                    </p>
                                    <span>Febrero, 2019</span>
                                </div>
                            </div>
                        </a>
                        <a href="https://www.eluniversal.com.mx/menu/6-restaurantes-que-tienes-que-conocer-este-2019" target="blank">
                            <div className="card bot">
                                <img src="http://www.godinezgourmet.com/wp-content/uploads/2019/02/arango-1228x691.jpg" alt="noticia1"/>
                                <div className="nota">
                                    <h3>Arango, cocina de raíces llega a ciudad de México</h3>
                                    <p>Chilango
                                    </p>
                                    <span>Febrero, 2019</span>
                                </div>
                            </div>
                        </a>
                        <a href="http://monchitime.com/2019/02/entre-amigos-en-arango-cocinas-de-raices-sabado-16-de-febrero/" target="blank">
                            <div className="card bot">
                                <img src="http://monchitime.com/www/wp-content/uploads/2019/02/Alejandro-Cuatepotzo-600x400.jpg" alt="noticia1"/>
                                <div className="nota">
                                    <h3>“Entre amigos” en Arango, Cocinas de Raíces</h3>
                                    <p>MonchiTime
                                    </p>
                                    <span>Febrero, 2019</span>
                                </div>
                            </div>
                        </a>
                        <a href="https://mxcity.mx/2019/01/restaurantes-de-la-cdmx-que-debes-conocer-en-enero-2019/" target="blank">
                            <div className="card bot">
                                <img src="https://mxcity.mx/wp-content/uploads/2019/01/ARANGO-Cocina-de-Rai%CC%81ces-Google-Maps.png" alt="noticia1"/>
                                <div className="nota">
                                    <h3>Restaurantes de la CDMX que debes conocer este 2019</h3>
                                    <p>Chilango
                                    </p>
                                    <span>Enero, 2019</span>
                                </div>
                            </div>
                        </a>
                        <a href="https://hotbook.com.mx/recomendaciones-para-el-fin-de-semana-del-13-al-16-de-diciembre/" target="blank">
                            <div className="card bot">
                                <img src="https://i2.wp.com/hotbook.com.mx/wp-content/uploads/2018/12/arango.jpg?w=1024&ssl=1" alt="noticia1"/>
                                <div className="nota">
                                    <h3>Recomendaciones para el fin de semana <br/>del 13 al 16 de diciembre</h3>
                                    <p>Hootbook
                                    </p>
                                    <span>Febrero, 2019</span>
                                </div>
                            </div>
                        </a>
                        <a href="https://robbreport.mx/food/conoce-los-hot-spots-que-recien-abrieron-sus-puertas-en-la-cdmx/" target="blank">
                            <div className="card bot">
                                <img src="https://media.timeout.com/images/105387939/1372/772/image.jpg" alt="noticia1"/>
                                <div className="nota">
                                    <h3>Conoce los hot spots que recién abrieron sus puertas <br/>en la CDMX</h3>
                                    <p>Robb Report
                                    </p>
                                    <span>Enero, 2019</span>
                                </div>
                            </div>
                        </a>
                        <a href="https://www.bleublanc.mx/sibarita/nuevos-lugares-en-la-cdmx-en-2019-direccion-y-precios/2019/01/" target="blank">
                            <div className="card bot">
                                <img src="https://media.timeout.com/images/105387945/1372/772/image.jpg" alt="noticia1"/>
                                <div className="nota">
                                    <h3>8 nuevos lugares en la CDMX que debes visitar este 2019</h3>
                                    <p>Bleu Blanc
                                    </p>
                                    <span>Diciembre, 2018</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div></section>
        )
    }
}

export default Medios;

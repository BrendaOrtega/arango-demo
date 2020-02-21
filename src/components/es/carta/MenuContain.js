import React, { Component } from 'react'
import sr from '../inicio/scrollReveal.js';
import {Navbar} from "../compartidos/Navbar";
import firebase from '../../../firebase'

class MenuContain extends Component {

    saucersRef = firebase.database().ref('saucers');
    
    

    data  = {
        0: {
            category: 'Para compartir',
            recipes: []
        },
        1: {
            category: 'Entradas',
            recipes: []
        },
        2: {
            category: 'Ensaladas',
            recipes: []
        },
        3: {
            category: 'Sopa y pasta',
            recipes: []
        },
        4: {
            category: 'Principales',
            recipes: []
        },
        5: {
            category: 'Dulce final',
            recipes: []
        },
        6: {
            category: 'Digestivos',
            recipes: []
        },
        7: {
            category: 'Bebidas',
            recipes: []
        },
        8: {
            category: 'Cerveza',
            recipes: []
        },
    }    

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
                <Navbar/>
                <section className="uk-section-small menu " style={{paddingTop:"70px"}}>
                    <div className="uk-container" >
                        <h3 className="uk-text-lead display " style={{ marginTop: "30px", textAlign:"center" }}>Menú</h3>

                        <h3 className="uk-text-lead bot none" style={{ marginTop: "30px",textAlign:"center" }}>Menú</h3>
                        <ul uk-accordion="multiple: true">
                            <li >
                                <a className="uk-accordion-title" >Para compartir</a>
                                <div className="uk-accordion-content" style={{marginLeft:"20px"}}>
                                    <div className="food">
                                        <p > Aguacate con chicharrón de res y cerdo</p><p>$135.00</p>
                                    </div>
                                    <div className="food">
                                        <p> Tartar Mar y Tierra Tribilín como en las cantinas pero frío</p><p>$245.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Molotes de Yuca</p><p>$155.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Tacos árabes de pierna de cordero</p><p>$225.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Queso de puerco con paté de foie gras</p><p>$235.00</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a className="uk-accordion-title" >Entradas</a>
                                <div className="uk-accordion-content" style={{marginLeft:"20px"}}>
                                    <div className="food">
                                        <p className="">Peneque de frijol con acociles</p><p>$150.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Tamal tatemado de elote con hierbas a las brasas</p><p>$115.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Chile pasilla relleno de tartar de atún</p><p>$245.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Láminas de pescado con aguachile de piña</p><p>$230.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Tostada de amaranto con jaiba de concha suave</p><p>$210.00</p>
                                    </div>

                                    <div className="food">
                                        <p>Pinto de camote con barbacoa de lengua de res</p><p>$220.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Esquites negros de maíz cacahuazintle con rabo de res</p><p>$165.00</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a className="uk-accordion-title" >Ensaladas</a>
                                <div className="uk-accordion-content" style={{marginLeft:"20px"}}>
                                    <div className="food">
                                        <p>Ensalada de hojas verdes con aderezo de elote asado</p><p>$135.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Ensalada de betabeles y palmitos</p><p>$155.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Ensalada tibia de langosta confitada y jaiba</p><p>$190.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Burrata con Jitomates y emulsión de hoja santa</p><p>$175.00</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a className="uk-accordion-title" >Sopa y pasta</a>
                                <div className="uk-accordion-content" style={{marginLeft:"20px"}}>
                                    <div className="food">
                                        <p>Fideo Seco</p><p>$135.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Consomé de frijol tatemado y hongos</p><p>$145.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Arroz negro con huevo ponchado</p><p>$165.00</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a className="uk-accordion-title " >Principales</a>
                                <div className="uk-accordion-content" style={{marginLeft:"20px"}}>
                                    <div className="food">
                                        <p>Chile-atole rojo con verduras de la temporada</p><p>$235.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Agnolottis Rellenos de espinacas y acelgas</p><p>$235.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Pesca del día sellada con granos de maíz "Pibinal" cocinado por 12 horas</p><p>$265.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Pollito de leche braseado</p><p>$285.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Lomo de vaca a las brasas con clemole (250g)</p><p>$460.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Chateaubriand rostizado en su jugo, tuétano, cacao (2 personas, 500g)</p><p>$880.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Cachete de res braseado con Huaxmole</p><p>$330.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Calabaza de Yucatán Rostizada con mole verde</p><p>$235.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Salmón sellado con caponata de berenjena</p><p>$310.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Estofado de mejillones de Ensenada en salsa de mantequilla con mostaza</p><p>$335.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Pato confitado con mole mancha manteles</p><p>$335.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Suadero al Bourguignon</p><p>$330.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Lechón confitado con salsa de chipotle tatemado</p><p>$380.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Rack de cordero con mole Barroco</p><p>$475.00</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a className="uk-accordion-title " >Dulce Final</a>
                                <div className="uk-accordion-content" style={{marginLeft:"20px"}}>
                                    <div className="food">
                                        <p>Natilla celestia; de vainilla y rompope</p><p>$125.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Dulce de limón y coco</p><p>$130.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Tarta de manzana</p><p>$130.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Buñuelo de arroz y amaranto</p><p>$125.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Panqué de nata con helado de aceite de oliva</p><p>$130.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Loreto y guadalupe</p><p>$165.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Tabla de quesos artesanales</p><p>$180.00</p>
                                    </div>

                                </div>
                            </li>
                            <li>
                                <a className="uk-accordion-title " >Digestivos</a>
                                <div className="uk-accordion-content" style={{marginLeft:"20px"}}>
                                    <div className="food">
                                        <p>Amaretto disarono</p><p>$90.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Chartreuse amarillo</p><p>$140.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Chartreuse verde</p><p>$130.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Corajito</p><p>$110.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Fernet</p><p>$110.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Frangelico</p><p>$110.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Licor 43</p><p>$110.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Oporto ferreira</p><p>$90.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Oporto taylor 10 anos</p><p>$250.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Pacháran basarana</p><p>$90.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Pacharán Zoco</p><p>$90.00</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a className="uk-accordion-title" >Bebidas</a>
                                <div className="uk-accordion-content" style={{marginLeft:"20px"}}>
                                    <div className="food">
                                        <p>Café Americano</p><p>$45.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Espresso</p><p>$50.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Espresso Doble</p><p>$65.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Capuccino</p><p>$55.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Carajillo</p><p>$160.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Infusiones de la casa</p><p>$45.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Tomás - Casa editora de té</p><p>$55.00</p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a className="uk-accordion-title " >Cerveza</a>
                                <div className="uk-accordion-content" style={{marginLeft:"20px"}}>
                                    <div className="food">
                                        <p>Allende (355ml)</p><p>$85.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Bocanegra (355ml)</p><p>$80.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Cucapá Clásica (355ml)</p><p>$80.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Goose Island IPA (355ml)</p><p>$85.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Sofie Goose Island (355ml)</p><p>$85.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Corona (355ml)</p><p>$55.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Pacífico (355ml)</p><p>$55.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Victoria (355ml)</p><p>$55.00</p>
                                    </div>
                                    <div className="food">
                                        <p>León (355ml)</p><p>$55.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Modelo Especial (355ml)</p><p>$65.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Modelo Ambar (355ml)</p><p>$65.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Negra Modelo (355ml)</p><p>$65.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Michelob Ultra (355ml)</p><p>$65.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Bud Light (355ml)</p><p>$65.00</p>
                                    </div>
                                    <div className="food">
                                        <p>Stella (330ml)</p><p>$70.00</p>
                                    </div>

                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

            </div>
        )
    }
}

export default MenuContain;
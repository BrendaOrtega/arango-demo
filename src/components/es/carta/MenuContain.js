import React, { Component } from 'react'
import sr from '../inicio/scrollReveal.js';
import {Navbar} from "../compartidos/Navbar";
import firebase from '../../../firebase'

class MenuContain extends Component {
    constructor(){
        super();
        this.state={
            data: {}
        }
    }
    
    checkCategory() {
        const saucersRef = firebase.database().ref('saucers');
        saucersRef.on('value', (snapshot) => {
            let saucers = snapshot.val();
            let category = ''
            let data={}
            for(let saucer in saucers) {
                category = saucers[saucer].saucerCategory
                let recipesExist= data[category] ? data[category].recipes : undefined; 
                data[category]={
                    name:category,
                    recipes: recipesExist ? [...recipesExist, saucers[saucer] ] : [saucers[saucer]]
                }
            }
            this.setState({data})
        })

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

        this.checkCategory()

        console.log(this.state.data)

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
                            {Object.keys(this.state.data).map((item)=>{
                                return(
                                <li>
                                    <a className="uk-accordion-title">{this.state.data[item].name}</a>
                                        <div className="uk-accordion-content" style={{marginLeft:"20px"}}>
                                            {this.state.data[item].recipes.map((subitem)=>{
                                                return(
                                                <div className="food">
                                                    <p>{subitem.saucerName}</p><p>${subitem.saucerPrice}.00</p>
                                                </div>
                                                )
                                            })}                                                
                                        </div>
                                </li>
                                )
                            })
                            }
                        </ul>
                    </div>
                </section>

            </div>
        )
    }
}

export default MenuContain;
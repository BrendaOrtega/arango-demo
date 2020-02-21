import React, { Component } from 'react'
import firebase from '../../../firebase'
import {Navbar} from "../compartidos/Navbar";


/*
const date = new Date(2018, 10, 20, 11);
*/

class HomeContain extends Component {
    state = {
        loading:false,
        images: [],

    };

    componentDidMount () {
        window.scroll(0, 0)

        //console.log('mijo')
        let div = document.createElement('div')
        div.id = 'fb-root'
        document.body.appendChild(div)


        let script = document.createElement('script')
        script.id = 'blissito'
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
        attribution=setup_tool
        page_id="204530763746823"
        theme_color="#d4a88c"
        logged_in_greeting="¡Hola!, ¿Cómo podemos ayudarte?"
        logged_out_greeting="¡Hasta pronto!">
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

export default HomeContain
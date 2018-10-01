import React, {Component} from 'react'
import sr from '../home/scrollReveal.js';
import './Menu.css';

class MenuContainer extends Component {
    componentDidMount () {
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

    <section className="uk-section-small menu">
        <div className="uk-container" >
            <h3 className="uk-text-lead bot" style={{marginTop:"50px"}}>Menú</h3>
            <ul uk-accordion="multiple: true">
                <li className="uk-open">
                    <a className="uk-accordion-title bot" href="#">Alimentos</a>
                    <div className="uk-accordion-content">
                        <p className="bot">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                </li>
                <li>
                    <a className="uk-accordion-title bot" href="#">Bebidas</a>
                    <div className="uk-accordion-content">
                        <p className="">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
                    </div>
                </li>
                <li>
                    <a className="uk-accordion-title bot" href="#">Postres</a>
                    <div className="uk-accordion-content">
                        <p className="">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
        )
    }
}

export default MenuContainer;
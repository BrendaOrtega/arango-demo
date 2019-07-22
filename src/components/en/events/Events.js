import React, { Component } from 'react';
import {Navbar} from "../common/Navbar/Navbar";

class Eventos extends Component {

    state = {token:'cocinaDeRaices'}

    onChange = e => this.setState({[e.target.name]:e.target.value})

    sendForm = e => {
        e.preventDefault()
        fetch('https://fixtercamp.herokuapp.com/mailing/arango/contacto', {
            body: JSON.stringify(this.state),
            headers:{"Content-Type":"application/json"},
            method:'post'
        }).then(res=>{
            //console.log(res)
            res.json()
        })
            .then(resp=>{
                alert('Hemos recibido tu mensaje!')
                this.props.history.push('/en')
            })
    }

    render() {
        return (
            <section >
                <meta
                    name="description"
                    content="Organiza con nosotros tus mejores eventos. Arango Restaurante. Cocina de raíz."
                />

                <title>Events | Arango</title>
                <Navbar/>
                <div className="formulario">
                    <section className="sect" style={{paddingTop:"70px"}}>
                        <div>
                            <h3 className="uk-text-lead " style={{ marginTop: "30px", textAlign:"center", fontSize: "32px"}}>Events</h3>
                            <p className="text-justify uk-text-muted" >Do you want to organize your events with us? Tell us what you need and we will contact you</p>
                            <br/>
                            <img src="https://images.pexels.com/photos/1268558/pexels-photo-1268558.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt=""/>
                            <br/>
                            <br/>
                            <form onSubmit={this.sendForm}>
                                <div className="uk-margin">
                                    <label  htmlFor="form-stacked-text">Name</label>
                                    <div className="uk-form-controls">
                                        <input
                                            onChange={this.onChange}
                                            name="name"
                                            className="uk-input uk-form-blank uk-form-width-large" type="text"
                                               placeholder="Name"/>
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <label  htmlFor="form-stacked-text">Email</label>
                                    <div className="uk-form-controls">
                                        <input
                                            onChange={this.onChange}
                                            name="email"
                                            className="uk-input uk-form-blank uk-form-width-large" type="text"
                                               placeholder="example@example.com"/>
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <label  htmlFor="form-stacked-text">Phone number</label>
                                    <div className="uk-form-controls">
                                        <input
                                            onChange={this.onChange}
                                            name="tel"
                                            className="uk-input uk-form-blank uk-form-width-large" type="text"
                                               placeholder="55 555 55 555"/>
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <label  htmlFor="form-stacked-text">How many people is your event?</label>
                                    <div className="uk-form-controls">
                                        <input
                                            onChange={this.onChange}
                                            name="numPeople"
                                            className="uk-input uk-form-blank uk-form-width-large" type="number"
                                               placeholder="10" />
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <label  htmlFor="form-stacked-text">What is your budget per person?</label>
                                    <div className="uk-form-controls">
                                        <input
                                            onChange={this.onChange}
                                            name="budget"
                                            className="uk-input uk-form-blank uk-form-width-large" type="text"
                                               placeholder="Approximate" />
                                    </div>
                                </div>
                                <div className="uk-margin">
                                    <label  htmlFor="form-stacked-text">What is the date of your event?</label>
                                    <div className="uk-form-controls">
                                        <input
                                            onChange={this.onChange}
                                            name="date"
                                            className="uk-input uk-form-blank uk-form-width-large" type="date"
                                        />
                                    </div>
                                </div>

                                <button className="btn_send">Submit</button>
                            </form>
                            <br/>
                        </div>
                    </section>

                </div>
            </section>
        )
    }
}

export default Eventos;
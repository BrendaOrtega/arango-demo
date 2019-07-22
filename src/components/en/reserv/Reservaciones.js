import React, { Component } from "react";
import "./Reservaciones.css";
import sr from "../home/scrollReveal";
import {Navbar} from "../common/Navbar/Navbar";

class Reservaciones extends Component {

    setScript = () => {
        const script = document.createElement("script");
        script.src =
            "//www.opentable.com.mx/widget/reservation/loader?rid=1030873&type=standard&theme=tall&iframe=true&overlay=false&domain=commx&lang=es-MX";
        const bliss = document.getElementById("bliss");
        bliss.appendChild(script);

    };

    componentDidMount() {
        this.setScript();
        window.scroll(0, 0);

        const config3 = {
            origin: "bottom",
            duration: 800,
            delay: 100,
            distance: "100%",
            scale: 1,
            easing: "ease"
        };
        sr.reveal('.bot', config3);
    }

    render() {
        return (
            <div>
                <meta
                    name="description"
                    content="Reserva con nosotros una mesa, con una hermosa vista hacía el monumento a la revolución."
                />

                <title>Reservation | Arango</title>
                <Navbar/>
                <div className="reservaciones none" style={{paddingTop:"70px"}}>
                    <h2 className="bot">Reservations</h2>
                </div>
                <div className="reservaciones display">
                    <h2 >Reservaciones</h2>
                </div>
                <div
                    style={{ textAlign: "center", width: "80%", margin: "0 auto" }}
                    id="bliss"
                />
                <div className="reservaciones display" />
            </div>
        );
    }
}

export default Reservaciones;
import React, { Component } from "react";
import "./Reservaciones.css";
import sr from "../home/scrollReveal";

class Reservaciones extends Component {

    setScript = () => {
        const script = document.createElement("script");
        script.src =
            "//www.opentable.com/widget/reservation/loader?rid=1030873&type=standard&theme=wide&iframe=true&overlay=false&domain=com&lang=es-MX";
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
                <div className="reservaciones none">
                    <h2 className="bot">Reservaciones</h2>
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
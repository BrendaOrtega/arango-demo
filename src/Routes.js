import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeContainer from './components/en/home/HomeContainer'
import HomeContain from './components/es/inicio/HomeContain'

import NosotrosContainer from './components/en/nosotros/NosotrosContainer'
import ArangoContainer from './components/es/arango/ArangoContainer'

import { Construccion } from './components/en/nosotros/Contruccion'
import MenuContainer from './components/en/menu/MenuContainer'
import MenuContain from './components/es/carta/MenuContain';

import Contacto from './components/en/contacto/Contacto';
import Prensa from './components/en/prensa/Prensa';
import Reservaciones from './components/en/reserv/Reservaciones';
import Language from "./components/Language";
import Reservacion from "./components/es/reservacion/Reservaciones";
import Eventos from "./components/es/eventos/Eventos";
import Medios from "./components/es/medios/Medios";
import Contactos from "./components/es/contactos/Contactos";
import Events from "./components/en/events/Events"

export const Router = () => (
    <Switch>
        <Route exact path="/" component={Language} />
        <Route exact path="/en/" component={HomeContainer} />
        <Route path="/en/about" component={NosotrosContainer} />
        <Route path="/en/menu" component={MenuContainer} />
        <Route path="/en/contact" component={Contacto}/>
        <Route path="/en/press" component={Prensa}/>
        <Route path="/en/reservation" component={Reservaciones} />
        <Route path="/en/events" component={Events}/>
        <Route exact path="/es/" component={HomeContain}/>
        <Route path="/es/nosotros" component={ArangoContainer} />
        <Route path="/es/menu" component={MenuContain} />
        <Route path="/es/reservaciones" component={Reservacion} />
        <Route path="/es/eventos" component={Eventos}/>
        <Route path="/es/prensa" component={Medios}/>
        <Route path="/es/contacto" component={Contactos}/>
        <Route component={Construccion} />
    </Switch>
)

export default Router;
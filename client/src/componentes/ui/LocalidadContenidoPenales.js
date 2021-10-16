import React, { Component } from 'react'
import Castelli from '../Localidades/penales/Castelli'
import Charata from '../Localidades/penales/Charata'
import Resistencia from '../Localidades/penales/Resistencia'
import SaenzPeña from '../Localidades/penales/SaenzPeña'
import SanMartin from '../Localidades/penales/SanMartin'
import VillaAngela from '../Localidades/penales/VillaAngela'
import Home from 'pages/Home'

//import DefaultLegend from './DefaultLegend'
import DefaultLegend from './DefaultLegendPenales'

import {Route, Switch} from 'react-router-dom'
import {Link} from 'react-router-dom'
import MiembrosPenales from './MiembrosPenales'

export default class LocalidadContenidoPenales extends Component {
    render() {
        return (
        <Switch>
            <Route  exact path="/miembrosPenales" component={DefaultLegend}/>
            <Route  exact path="/miembrosPenales/castelli" component={Castelli}/>
            <Route  exact path="/miembrosPenales/charata" component={Charata}/>
            <Route  exact path="/miembrosPenales/resistencia" component={Resistencia}/>
            <Route  exact path="/miembrosPenales/saenzPeña" component={SaenzPeña}/>
            <Route  exact path="/miembrosPenales/sanMartin" component={SanMartin}/>
            <Route  exact path="/miembrosPenales/villaAngela" component={VillaAngela}/>
        </Switch>
        )
    }
}
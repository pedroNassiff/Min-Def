import React, { Component } from 'react'
import Castelli from '../Localidades/anna/Castelli'
import Charata from '../Localidades/anna/Charata'
import Resistencia from '../Localidades/anna/Resistencia'
import SaenzPeña from '../Localidades/anna/SaenzPeña'
import SanMartin from '../Localidades/anna/SanMartin'
import VillaAngela from '../Localidades/anna/VillaAngela'
import Home from 'pages/Home'

//import DefaultLegend from './DefaultLegend'
import DefaultLegend from './DefaultLegendANNA'

import {Route, Switch} from 'react-router-dom'
import {Link} from 'react-router-dom'
import MiembrosANNA from './MiembrosANNA'

export default class LocalidadContenidoANNA extends Component {
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
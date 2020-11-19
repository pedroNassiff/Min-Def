import React, { Component } from 'react'
import Castelli from '../Localidades/anna/Castelli'
import Charata from '../Localidades/anna/Charata'
import Resistencia from '../Localidades/anna/Resistencia'
import SaenzPeña from '../Localidades/anna/SaenzPeña'
import SanMartin from '../Localidades/anna/SanMartin'
import VillaAngela from '../Localidades/anna/VillaAngela'
import Home from 'pages/Home'

//import DefaultLegend from './DefaultLegend'
import DefaultLegend from './DefaultLegend'

import {Route, Switch} from 'react-router-dom'
import {Link} from 'react-router-dom'
import MiembrosANNA from './MiembrosANNA'

export default class LocalidadContenidoANNA extends Component {
    render() {
        return (
            <div className="card shadow">
                <div className="card-body1" >
                
                <Switch>
                    <Route  exact path="/miembrosANNA" component={DefaultLegend}/>
                    <Route  exact path="/miembrosANNA/castelli" component={Castelli}/>
                    <Route  exact path="/miembrosANNA/charata" component={Charata}/>
                    <Route  exact path="/miembrosANNA/resistencia" component={Resistencia}/>
                    <Route  exact path="/miembrosANNA/saenzPeña" component={SaenzPeña}/>
                    <Route  exact path="/miembrosANNA/sanMartin" component={SanMartin}/>
                    <Route  exact path="/miembrosANNA/villaAngela" component={VillaAngela}/>
                </Switch>
                </div>
            </div>
        )
    }
}
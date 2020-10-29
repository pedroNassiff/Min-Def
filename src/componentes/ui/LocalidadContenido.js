import React, { Component } from 'react'
import Castelli from '../Localidades/Castelli'
import Charata from '../Localidades/Charata'
import Resistencia from '../Localidades/Resistencia'
import SaenzPeña from '../Localidades/SaenzPeña'
import SanMartin from '../Localidades/SanMartin'
import VillaAngela from '../Localidades/VillaAngela'
import Home from 'pages/Home'

//import DefaultLegend from './DefaultLegend'
import DefaultLegend from './DefaultLegend'

import {Route, Switch} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Miembros from './Miembros'

export default class LocalidadContenido extends Component {
    render() {
        return (
            <div className="card shadow">
                <div className="card-body" style={{background: "#E0463C"}}>
                <Link to="/">
                    <h5 className="card-header">MIEMBROS</h5>
                </Link>
                <Switch>
                    <Route exact path="/" component={DefaultLegend}/>
                    <Route exact path="/castelli" component={Castelli}/>
                    <Route exact path="/charata" component={Charata}/>
                    <Route exact path="/resistencia" component={Resistencia}/>
                    <Route exact path="/saenzPeña" component={SaenzPeña}/>
                    <Route exact path="/sanMartin" component={SanMartin}/>
                    <Route exact path="/villaAngela" component={VillaAngela}/>
                </Switch>
                </div>
            </div>
        )
    }
}

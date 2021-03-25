import React, { Component } from 'react'
import Castelli from '../Localidades/civiles/Castelli'
import Charata from '../Localidades/civiles/Charata'
import Resistencia from '../Localidades/civiles/Resistencia'
import SaenzPeña from '../Localidades/civiles/SaenzPeña'
import SanMartin from '../Localidades/civiles/SanMartin'
import VillaAngela from '../Localidades/civiles/VillaAngela'
import Home from 'pages/Home'

//import DefaultLegend from './DefaultLegend'
import DefaultLegend from './DefaultLegend'

import {Route, Switch} from 'react-router-dom'
import {Link} from 'react-router-dom'
import MiembrosCiviles from './MiembrosCiviles'

export default class LocalidadContenidoCiviles extends Component {
    render() {
        return (
        <Switch>
            {/* <Route  exact path="/miembrosCiviles" component={DefaultLegend}/> */}
            <Route  exact path="/miembrosCiviles/castelli" component={Castelli}/>
            <Route  exact path="/miembrosCiviles/charata" component={Charata}/>
            <Route  exact path="/miembrosCiviles/resistencia" component={Resistencia}/>
            <Route  exact path="/miembrosCiviles/saenzPeña" component={SaenzPeña}/>
            <Route  exact path="/miembrosCiviles/sanMartin" component={SanMartin}/>
            <Route  exact path="/miembrosCiviles/villaAngela" component={VillaAngela}/>
        </Switch>
        )
    }
}
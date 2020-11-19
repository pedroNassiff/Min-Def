import React, { Component } from 'react'
import SingleLegend from 'componentes/ui/SingleLegend'
import CardGrid from 'componentes/cardGrid'
import Grid from '@material-ui/core/Grid';
import avatar1 from ' ../../assets/img/avatar1.jpg'

export default class Castelli extends Component {
    render() {
        return (
            <div>
                <div className="contenedor-card">
               <SingleLegend img={avatar1} 
               defOficNum="Defensoría Oficial N° 13 Castelli ANNA: Dra. Patricia Aleksich"
               tel="Teléfono fijo: 3624-4453887"
               email="defensoria13-rcia@justiciachaco.gov.ar"
               />
               </div>
               
            </div>
            
        )
    }
}

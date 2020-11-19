import React, { Component } from 'react'
import SingleLegend from 'componentes/ui/SingleLegend'
import avatar4 from ' ../../assets/img/avatar4.jpg'

export default class SaenzPeña extends Component {
    render() {
        return (
            <div>
               <SingleLegend img={avatar4} 
               defOficNum="Defensoría Oficial N° 13 Saenz Peña ANNA: Dra. Patricia Aleksich"
               tel="Teléfono fijo: 3624-4453887"
               email="defensoria13-rcia@justiciachaco.gov.ar"
               />
            </div>
        )
    }
}
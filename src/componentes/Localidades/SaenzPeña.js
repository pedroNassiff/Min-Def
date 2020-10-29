import React, { Component } from 'react'
import SingleLegend from 'componentes/ui/SingleLegend'

export default class SaenzPeña extends Component {
    render() {
        return (
            <div>
               <SingleLegend //img={} 
               defOficNum="Defensoría Oficial N° 13: Dra. Patricia Aleksich"
               tel="Teléfono fijo: 3624-4453887"
               email="defensoria13-rcia@justiciachaco.gov.ar"
               />
            </div>
        )
    }
}

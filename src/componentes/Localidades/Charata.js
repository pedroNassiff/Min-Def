import React, { Component } from 'react'
import SingleLegend from 'componentes/ui/SingleLegend'
import avatar2 from ' ../../assets/img/avatar2.jpg'
export default class Charata extends Component {
    render() {
        return (
            <div>
               <SingleLegend img={avatar2} 
               defOficNum="Defensoría Oficial N° 13 Charata: Dra. Patricia Aleksich"
               tel="Teléfono fijo: 3624-4453887"
               email="defensoria13-rcia@justiciachaco.gov.ar"
               />
            </div>
        )
    }
}

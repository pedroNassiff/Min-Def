import React, { Component } from 'react'
import SingleLegend from 'componentes/ui/SingleLegend'
import avatar3 from ' ../../assets/img/avatar3.jpg'

export default class Resistencia extends Component {
    render() {
        return (
            <div>
               <SingleLegend img={avatar3} 
               defOficNum="Defensoría Oficial N° 13 Resistencia ANNA: Dra. Patricia Aleksich"
               tel="Teléfono fijo: 3624-4453887"
               email="defensoria13-rcia@justiciachaco.gov.ar"
               />
            </div>
        )
    }
}

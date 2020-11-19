import React, { Component } from 'react'
import SingleLegend from 'componentes/ui/SingleLegend'
import avatar5 from ' ../../assets/img/avatar5.jpg'

export default class VillaAngela extends Component {
    render() {
        return (
            <div>
               <SingleLegend img={avatar5} 
               defOficNum="Defensoría Oficial N° 13 Villa Angela CIVILES: Dra. Patricia Aleksich"
               tel="Teléfono fijo: 3624-4453887"
               email="defensoria13-rcia@justiciachaco.gov.ar"
               />
            </div>
        )
    }
}

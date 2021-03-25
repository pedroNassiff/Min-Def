import React, { Component } from 'react'

import Mapa from './MapaANNA';
import './miembros.css';
import LocalidadContenido from './LocalidadContenidoANNA';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import {Link} from 'react-router-dom'
// import Card from 'react-bootstrap/Card'
// import Accordion from 'react-bootstrap/Accordion'

export default class MiembrosCiviles extends Component {
    state ={
        hideNav:null
    }
    componentDidMount(){
        window.addEventListener("resize", this.resize.bind(this))
        this.resize();
    }

    resize(){
        this.setState({hideNav: window.innerHeight})
    }

    render(){   
        return (
            <>
            <div className="App">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center" >
                                <div>
                                    <h5 style={{fontFamily: "Roboto", fontSize:"20px", color:"black"}}>Selecciona la Circunscripción en el mapa</h5>
                                </div>
                                <Mapa />
                            </div>
                            <div className="col-1">
                                <LocalidadContenido />
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}
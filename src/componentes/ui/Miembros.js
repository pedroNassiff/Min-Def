import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Link} from 'react-router-dom'

import Mapa from './Mapa';
import './miembros.css';
import LocalidadContenido from './LocalidadContenido';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion'

export default class Miembros extends Component {
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
                    <div className="row justify-content-md-center">
                        <div className="col">
                            <LocalidadContenido />
                        </div>
                        <div className="col col-lg-5">
                            <Accordion className="shadow" >
                                <Card>
                                    <Card.Header style={{background: "#ccc"}}>
                                        <Accordion.Toggle as={Card.Header} eventKey="0" style={{background: "#80B8C8"}}>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body style={{background: "linear-gradient(135deg, rgba(4,189,96,1) 0%, rgba(54,170,224,1) 73%, rgba(54,170,224,1) 100%)"}}>
                                            <Mapa />
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                        </div>
                    
                    </div>
                </div>
            </div>

            </>
        );
    }
}
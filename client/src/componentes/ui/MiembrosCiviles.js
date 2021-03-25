import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Link} from 'react-router-dom'

import Mapa from './MapaCiviles';
import './miembros.css';
import LocalidadContenido from './LocalidadContenidoCiviles';
import Card from 'react-bootstrap/Card'
import Accordion from 'react-bootstrap/Accordion'

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
                    <div className="col-lg-3 offset-lg-9" > 
                            {/* <Accordion className="shadow" >
                                <Card>
                                    <Card.Header style={{background: "#ccc"}}>
                                        <Accordion.Toggle as={Card.Header} eventKey="0" style={{background: "#80B8C8"}}>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                    <Accordion.Collapse eventKey="0">
                                        <Card.Body>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        </Card>
                                    </Accordion>   */}
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
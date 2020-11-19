import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class MapaANNA extends Component {
  
    render() {
        return (
            <div>
                <div className="contenedor-mapa">
                    <Link to="/miembrosANNA/castelli">
                        <a id="div-btn1">
                        <div id="botonCastelli" className="boton button1"  title="Castelli" ><span></span></div></a>
                    </Link>

                    <Link to="/miembrosANNA/charata">
                        <a  id="div-btn2">
                        <div id="botonCharata" className="boton button2"  title="Charata" ><span></span></div></a>
                    </Link>
                    <Link to="/miembrosANNA/resistencia">
                        <a  id="div-btn3">
                        <div id="botonResistencia" class="boton button3"  title="Resistencia" ><span></span></div></a>
                    </Link>

                    <Link to="/miembrosANNA/saenzPeña">
                        <a  id="div-btn4">
                        <div id="botonSaenzPeña" class="boton button4"  title="SaenzPeña" ><span></span></div></a>
                    </Link>

                    <Link to="/miembrosANNA/sanMartin">
                        <a  id="div-btn5">
                        <div id="botonSanMartin" class="boton button5"  title="SanMartin" ><span></span></div></a>
                    </Link>

                    <Link to="/miembrosANNA/villaAngela">
                        <a id="div-btn6">
                        <div id="botonVillaAngela" class="boton button6"  title="VillaAngela" ><span></span></div></a> 
                    </Link>
                    
                </div>


            </div>
        )
    }
}

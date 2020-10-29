import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class Mapa extends Component {

    
  
    render() {
        return (
            <div>

                <div className="contenedor-mapa">
                    <Link to="/Castelli">
                        <a id="div-btn1" onClick={this.handleClick}>
                        <div id="botonCastelli" className="boton button9"  title="Castelli" ><span></span></div></a>
                    </Link>

                    <Link to="/Charata">
                        <a  id="div-btn2" onClick={this.handleClick}  >
                        <div id="botonCharata" className="boton button8"  title="Charata" ><span></span></div></a>
                    </Link>
                    <Link to="/Resistencia">
                        <a  id="div-btn3" onClick={this.handleClick}>
                        <div id="botonResistencia" class="boton button7"  title="Resistencia" ><span></span></div></a>
                    </Link>

                    <Link to="/SaenzPeña">
                        <a  id="div-btn4" onClick={this.handleClick}>
                        <div id="botonSaenzPeña" class="boton button13"  title="SaenzPeña" ><span></span></div></a>
                    </Link>

                    <Link to="/SanMartin">
                        <a  id="div-btn5" onClick={this.handleClick}>
                        <div id="botonSanMartin" class="boton button6"  title="SanMartin" ><span></span></div></a>
                    </Link>

                    <Link to="/VillaAngela">
                        <a id="div-btn6" onClick={this.handleClick}>
                        <div id="botonVillaAngela" class="boton button3"  title="VillaAngela" ><span></span></div></a> 
                    </Link>
                    
                </div>


            </div>
        )
    }
}

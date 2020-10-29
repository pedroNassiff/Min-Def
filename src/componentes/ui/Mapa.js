import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class Mapa extends Component {
  
    render() {
        return (
            <div>

                <div className="contenedor-mapa">
                    <Link to="/castelli">
                        <a id="div-btn1" onClick={this.handleClick}>
                        <div id="botonCastelli" className="boton button1"  title="Castelli" ><span></span></div></a>
                    </Link>

                    <Link to="/charata">
                        <a  id="div-btn2" onClick={this.handleClick}  >
                        <div id="botonCharata" className="boton button2"  title="Charata" ><span></span></div></a>
                    </Link>
                    <Link to="/resistencia">
                        <a  id="div-btn3" onClick={this.handleClick}>
                        <div id="botonResistencia" class="boton button3"  title="Resistencia" ><span></span></div></a>
                    </Link>

                    <Link to="/saenzPeña">
                        <a  id="div-btn4" onClick={this.handleClick}>
                        <div id="botonSaenzPeña" class="boton button4"  title="SaenzPeña" ><span></span></div></a>
                    </Link>

                    <Link to="/sanMartin">
                        <a  id="div-btn5" onClick={this.handleClick}>
                        <div id="botonSanMartin" class="boton button5"  title="SanMartin" ><span></span></div></a>
                    </Link>

                    <Link to="/villaAngela">
                        <a id="div-btn6" onClick={this.handleClick}>
                        <div id="botonVillaAngela" class="boton button6"  title="VillaAngela" ><span></span></div></a> 
                    </Link>
                    
                </div>


            </div>
        )
    }
}

import React, {useState}  from 'react'
import {Link} from 'react-router-dom'
import CardGrid from 'componentes/cardGrid'
import Carousel from 'componentes/carouselNotices'
import './Home.scss'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import fpCont from '../assets/img/fpCont.svg';
import PcontResp from '../assets/img/PcontResp.svg';
import backSegCont from '../assets/img/backSegCont.png';
import ScontResp from '../assets/img/ScontResp.svg';
import backTercerCont from '../assets/img/backTercerCont.svg';
import TcontResp from '../assets/img/TcontResp.svg';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import gps from '../assets/img/gps.svg';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Footer from 'componentes/ui/Footer';


const useStyles = makeStyles(theme => ({
    mainContainer: {
        marginTop: "5em",
        [theme.breakpoints.down("md")]: {
            marginTop: "3em",
           
        }
    },
    titulos1: {
        fontFamily: "Roboto",
        fontSize: "2.50rem",
        color: "white",
        marginTop: "5em",
        marginLeft: "4.5em",
        fontWeight: 700,
        [theme.breakpoints.down("xs")]: {
            marginLeft: "1.4em",
        }
    },
    titulos2: {
        fontFamily: "Roboto",
        fontSize: "2.50rem",
        color: "white",
        marginTop: "5em",
        marginLeft: "2em",
        fontWeight: 700,
        [theme.breakpoints.down("xs")]: {
            marginLeft: "1.4em",
        }
    },
    subtitulos1: {
        fontFamily: "Roboto",
        fontSize: "1.50rem",
        fontWeight: 300,
        color: "white",
        marginLeft: "9.7em",
        marginBottom: "1em",
        [theme.breakpoints.down("xs")]: {
            marginLeft: "3.7em",
        }
    },
    imagenUbicacion: {
        height: "2em",
        width: "2em",
        marginLeft: "9.2em",
        marginBottom: ".5em",
      
    },
    botonUbicacion: {
        fontFamily: "Roboto",
        borderColor: "#00a0dc",
        color: "white",
        borderWidth: 2,
        borderRadius: 50,
        fontFamily: "Roboto",
        marginLeft: "22em",
        marginBottom: "2em",
        fontWeight: "bold",
       "&:hover": {
           backgroundColor: "#00a0dc",
           color: "white"
       },
       [theme.breakpoints.down("xs")]: {
        marginLeft: "11.6em",
    }
    },

    botonUbicacion2: {
        fontFamily: "Roboto",
        borderColor: "#00a0dc",
        color: "white",
        borderWidth: 2,
        borderRadius: 50,
        fontFamily: "Roboto",
        
        marginBottom: "2em",
        fontWeight: "bold",
       "&:hover": {
           backgroundColor: "#00a0dc",
           color: "white",
       }
    },
    sContenedor1: {
        
    },
    fpCont: {
        backgroundImage: `url(${fpCont})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",        
        width: "100%",
        [theme.breakpoints.down("xs")]: {
            backgroundImage: `url(${PcontResp})`,
        }
    },
    backSegCont: {
        backgroundImage: `url(${backSegCont})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",        
        width: "100%",
        [theme.breakpoints.down("xs")]: {
            backgroundImage: `url(${ScontResp})`,
        }
    },
    backTercerCont: {
        backgroundImage: `url(${backTercerCont})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",        
        width: "100%",
        [theme.breakpoints.down("xs")]: {
            backgroundImage: `url(${TcontResp})`,
        }
    },
}))

export default function Home() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);
    return (
      <div className="homeContainer">
        <div className="carouselContainer">
            <Carousel/>
        </div>


        <section className='panel panel--content'>
          <article className='panel__item item--left item--first'>
            <div class='card'>
              <div className='card__header'>
                <h4>Defensorias Públicas Penales</h4>
              </div>
              <div className='card__body'>
                <p>Lorem Ipsum Lorem Ipsum lorem ipsum</p>
                <ul>
                    <li><a href='/miembros'>MIEMBROS</a></li>
                    <li><a href='/requisitos-penales'>REQUISITOS</a></li>
                </ul>
              </div>
            </div>
          </article>

          <article className='panel__item item--right item--second'>
            <div class='card'>
              <div className='card__header'>
                <h4>Defensorias Públicas Civiles</h4>
              </div>
              <div className='card__body'>
                <p>Lorem Ipsum Lorem Ipsum lorem ipsum</p>
                <ul>
                    <li><a href='/miembrosCiviles'>MIEMBROS</a></li>
                    <li><a href='/requisitos-civiles'>REQUISITOS</a></li>
                </ul>
              </div>
            </div>
          </article>

          <article className='panel__item item--left item--third'>
            <div class='card'>
              <div className='card__header'>
                <h4>Asesorias de Niños, Niñas y Adolecentes</h4>
              </div>
              <div className='card__body'>
                <p>Lorem Ipsum Lorem Ipsum lorem ipsum</p>
                <ul>
                    <li><a href='/miembrosANNA'>MIEMBROS</a></li>
                    <li><a href='/requisitos-niños'>REQUISITOS</a></li>
                </ul>
              </div>
            </div>
          </article>
        </section>

        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />

        </div>

    );
}
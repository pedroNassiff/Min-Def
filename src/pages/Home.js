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
           backgroundColor: "#00a0dc"
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
    
        <Grid 
            container 
            className={classes.mainContainer}
            direction="column">
            <Grid container style={{height: "20em", marginBottom: "2em"}}>    
            <Grid item style={{position: "absolute"}} alignItems="center"> {/*--2do Contenedor---*/}
                <Grid 
                    container direction="row"
                    justify={matchesSM ? "center" : undefined} 
                    className={classes.sContenedor1}>
                    <Grid item style={{ marginLeft: matchesSM ? 0 : "5em"}}>
                        <Typography variant="h4" className={classes.titulos1}>
                            Defensorias Públicas Penales
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitulos1}>
                            Lorem Ipsum Lorem Ipsum lorem ipsum
                        </Typography>
                        <Button 
                            variant="outlined"
                            component={Link}
                            to="/miembros" 
                            className={classes.botonUbicacion} 
                            style={{ marginRight: 20 }}>
                            <span style={{ marginRight: 0 }}>MIEMBROS</span>
                        </Button>
                        <Button
                            component={Link}
                            to="/requisitos-penales" 
                            variant="outlined" 
                            className={classes.botonUbicacion2} 
                            style={{ marginRight: 20 }}>
                            <span style={{ marginRight: 0 }}>REQUISITOS</span>
                        </Button>
                    </Grid>
                </Grid>
                </Grid>
                <div className={classes.fpCont} />
            </Grid>
            <Grid container style={{height: "20em", marginBottom: "2em"}}>    
            <Grid item style={{position: "absolute"}} alignItems="center"> {/*--2do Contenedor---*/}
                <Grid 
                    container direction="row"
                    justify={matchesSM ? "center" : undefined} 
                    className={classes.sContenedor2}>
                    <Grid item style={{ marginLeft: matchesSM ? 0 : "55em"}}>
                        <Typography variant="h4" className={classes.titulos1}>
                            Defensorias Públicas Civiles
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitulos1}>
                            Lorem Ipsum Lorem Ipsum lorem ipsum
                        </Typography>
                        <Button variant="outlined" component={Link}
                            to="/miembros" className={classes.botonUbicacion} style={{ marginRight: 20 }}>
                            <span style={{ marginRight: 0 }}>MIEMBROS</span>
                        </Button>
                        <Button 
                            component={Link}
                            to="/requisitos-civiles" 
                            variant="outlined" 
                            className={classes.botonUbicacion2} 
                            style={{ marginRight: 20 }}>
                            <span style={{ marginRight: 0 }}>REQUISITOS</span>
                        </Button>
                    </Grid>
                </Grid>
                </Grid>
                <div className={classes.backSegCont} />
            </Grid>
            <Grid container style={{height: "20em"}}>    
            <Grid item style={{position: "absolute"}} alignItems="center"> {/*--2do Contenedor---*/}
                <Grid 
                    container direction="row"
                    justify={matchesSM ? "center" : undefined} 
                    className={classes.sContenedor3}>
                    <Grid item style={{ marginLeft: matchesSM ? 0 : "2em"}}>
                        <Typography variant="h4" className={classes.titulos2}>
                            Asesorias de Niños, Niñas y Adolecentes
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitulos1}>
                            Lorem Ipsum Lorem Ipsum lorem ipsum
                        </Typography>
                        <Button variant="outlined" component={Link}
                            to="/miembros"  className={classes.botonUbicacion} style={{ marginRight: 20 }}>
                            <span style={{ marginRight: 0 }}>MIEMBROS</span>
                        </Button>
                        <Button 
                            component={Link}
                            to="/requisitos-niños" 
                            variant="outlined" 
                            className={classes.botonUbicacion2} 
                            style={{ marginRight: 20 }}>
                            <span style={{ marginRight: 0 }}>REQUISITOS</span>
                        </Button>
                    </Grid>
                </Grid>
                </Grid>
                <div className={classes.backTercerCont} />
            </Grid>
        </Grid>
        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />

        </div>

    );
}
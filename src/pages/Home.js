import React from 'react'
import CardGrid from 'componentes/cardGrid'
import Carousel from 'componentes/carouselNotices'
import './Home.scss'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import fpCont from '../assets/img/fpCont.svg';
import backSegCont from '../assets/img/backSegCont.svg';
import Button from '@material-ui/core/Button';

import Typography from '@material-ui/core/Typography';
import gps from '../assets/img/gps.svg';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles(theme => ({
    mainContainer: {
        marginTop: "5em",
        [theme.breakpoints.down("md")]: {
            marginTop: "3em",
           
        }
    },
    titulos1: {
        fontFamily: "Raleway",
        fontSize: "2.50rem",
        color: "white",
        marginTop: "7em",
        marginLeft: "5em",
        fontWeight: 700 
    },
    subtitulos1: {
        fontSize: "1.50rem",
        fontWeight: 300,
        color: "white",
        marginLeft: "9.7em",
        marginBottom: "1em",
    },
    imagenUbicacion: {
        height: "2em",
        width: "2em",
        marginLeft: "9.2em",
        marginBottom: ".5em",
      
    },
    botonUbicacion: {
        borderColor: "#00a0dc",
        color: "white",
        borderWidth: 2,
        borderRadius: 50,
        fontFamily: "Roboto",
        marginLeft: "27em",
        marginBottom: "2em",
        fontWeight: "bold",
       "&:hover": {
           backgroundColor: "#00a0dc"
       }
    },
    sContenedor1: {
        marginTop: "1em"
    },
    fpCont: {
        backgroundImage: `url(${fpCont})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "50%",
        width: "100%"
    },
    backSegCont: {
        backgroundImage: `url(${backSegCont})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "50%",
        width: "100%"
    }
}))

export default function Home() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))
    return (
        <div className="homeContainer">
            <div className="carouselContainer">
                <Carousel/>
            </div>
    
        <Grid 
            container 
            className={classes.mainContainer}
            direction="column">
            <Grid container style={{height: "35em"}}>    
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
                        <Button variant="outlined" className={classes.botonUbicacion} style={{ marginRight: 20 }}>
                            <span style={{ marginRight: 0 }}>VER MÁS</span>
                        </Button>
                    </Grid>
                </Grid>
                </Grid>
                <div className={classes.fpCont} />
            </Grid>
            <Grid container style={{height: "60em"}}>  
            <Grid item style={{position: "absolute"}} alignItems="center"> {/*--3er Contenedor---*/}
                <Grid 
                    container 
                    direction="row"
                    justify={matchesSM ? "center" : "flex-end"} 
                    className={classes.sContenedor2}>
                    <Grid item style={{ marginRight: matchesSM ? 0 : "12em"}}>
                        <Typography variant="h4" className={classes.titulos1}>
                            Defensorias Públicas y Civiles
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitulos1}>
                            Lorem Ipsum Lorem Ipsum lorem ipsum
                        </Typography>
                        <Button variant="outlined" className={classes.botonUbicacion}>
                            <span style={{ marginLeft: 10 }}>VER UBICACIÓN</span>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <div className={classes.backSegCont} />
            </Grid>
            <Grid item> {/*--2do Contenedor---*/}
                <Grid 
                    container direction="row"
                    justify={matchesSM ? "center" : undefined} 
                    className={classes.sContenedor3}>
                    <Grid item style={{ marginLeft: matchesSM ? 0 : "5em"}}>
                        <Typography variant="h4" className={classes.titulos1}>
                            Asesorías de Niñas, Niños y Adolecentes
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitulos1}>
                            Lorem Ipsum Lorem Ipsum lorem ipsum
                        </Typography>
                        <Button variant="outlined" className={classes.botonUbicacion}>
                            <span style={{ marginRight: 10 }}>VER UBICACIÓN</span>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
          
        </div>
    );
}
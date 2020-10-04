import React from 'react'
import CardGrid from 'componentes/cardGrid'
import Carousel from 'componentes/carouselNotices'
import './Home.scss'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
        color: "#00a0dc",
        marginLeft: ".5em",
        fontWeight: 700 
    },
    subtitulos1: {
        fontSize: "1.50rem",
        fontWeight: 300,
        color: "gray",
        marginLeft: "2em",
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
        color: "#00a0dc",
        borderWidth: 2,
        borderRadius: 50,
        fontFamily: "Roboto",
        marginLeft: "12.5em",
        marginBottom: "2em",
        fontWeight: "bold",
       
    },
    sContenedor: {
        marginTop: "1em"
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
            <Grid item> {/*--2do Contenedor---*/}
                <Grid 
                    container direction="row"
                    justify={matchesSM ? "center" : undefined} 
                    className={classes.sContenedor}>
                    <Grid item style={{ marginLeft: matchesSM ? 0 : "5em"}}>
                        <Typography variant="h4" className={classes.titulos1}>
                            Defensorias Públicas Penales
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitulos1}>
                            Lorem Ipsum Lorem Ipsum lorem ipsum
                        </Typography>
                        <Grid item>
                            <img alt="imagen ubi" src={gps} className={classes.imagenUbicacion}/>
                        </Grid>
                        <Button variant="outlined" className={classes.botonUbicacion}>
                            <span style={{ marginRight: 10 }}>VER UBICACIÓN</span>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/*--3er Contenedor---*/}
                <Grid 
                    container 
                    direction="row"
                    justify={matchesSM ? "center" : "flex-end"} 
                    className={classes.sContenedor}>
                    <Grid item style={{ marginRight: matchesSM ? 0 : "5em"}}>
                        <Typography variant="h4" className={classes.titulos1}>
                            Defensorias Públicas y Civiles
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitulos1}>
                            Lorem Ipsum Lorem Ipsum lorem ipsum
                        </Typography>
                        <Grid item>
                            <img alt="imagen ubi" src={gps} className={classes.imagenUbicacion}/>
                        </Grid>
                        <Button variant="outlined" className={classes.botonUbicacion}>
                            <span style={{ marginLeft: 10 }}>VER UBICACIÓN</span>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item> {/*--2do Contenedor---*/}
                <Grid 
                    container direction="row"
                    justify={matchesSM ? "center" : undefined} 
                    className={classes.sContenedor}>
                    <Grid item style={{ marginLeft: matchesSM ? 0 : "5em"}}>
                        <Typography variant="h4" className={classes.titulos1}>
                            Asesorías de Niñas, Niños y Adolecentes
                        </Typography>
                        <Typography variant="subtitle1" className={classes.subtitulos1}>
                            Lorem Ipsum Lorem Ipsum lorem ipsum
                        </Typography>
                        <Grid item>
                            <img alt="imagen ubi" src={gps} className={classes.imagenUbicacion}/>
                        </Grid>
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
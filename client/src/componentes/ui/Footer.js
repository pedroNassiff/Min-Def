import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import facebook from '../../assets/img/facebook.svg';
import instagram from '../../assets/img/instagram.svg';

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: "#00a0dc",
        width: "100%",
        zIndex: 1902,
    },
    mainContainer: {
        backgroundColor: "#00a0dc",
        position: "absolute",
        height: "20em"
    },
    link: {
        color: "white",
        fontFamily: "Roboto",
        fontSize: ".8em"
    },
    gridItem: {
        margin: "2em"
    },
    icon: {
        height: "2em",
        width: "2em",
        [theme.breakpoints.down("xs")]: {
            height: "1em",
            width: "1em",
        }
    },
    contenedorSociales: {
        position: "absolute",
        marginTop: "10em",
        marginRight: "1.5em"
    } 
}))

export default function Footer(props) {
    const classes = useStyles()

    return <footer 
            className={classes.footer}>
            
             <Grid 
            container
            justify="center" 
            className={classes.mainContainer}>
                <Hidden mdDown>
            <Grid 
                    item
                    className={classes.gridItem} 
                >
                <Grid 
                    container 
                    direction="column"
                    spacing={2}>
                    <Grid 
                        item
                        component={Link}
                        to="/"
                        onClick={() => props.setValue(0)} 
                        className={classes.link}>
                        INICIO
                    </Grid>
                </Grid>
            </Grid>
            <Grid 
                    item
                    className={classes.gridItem} 
                >
                <Grid 
                    container 
                    direction="column"
                    spacing={2}>
                    <Grid 
                        item
                        component={Link}
                        to="/institucional/mpd"
                        onClick={() => {props.setValue(1); props.setSelectedIndex(0)}}   
                        className={classes.link}>
                        INSTITUCIONAL
                    </Grid>
                    <Grid 
                        item
                        component={Link}
                        to="/institucional/mpd"
                        onClick={() => {props.setValue(1); props.setSelectedIndex(1)}}    
                        className={classes.link}>
                        ¿Qué es el MPD?
                    </Grid>
                    <Grid 
                        item
                        component={Link}
                        onClick={() => {props.setValue(1); props.setSelectedIndex(2)}} 
                        to="/institucional/queHacemos"  
                        className={classes.link}>
                        ¿Qué hacemos?
                    </Grid>
                    <Grid 
                        item
                        component={Link}
                        to="/institucional/dondeEstamos"
                        onClick={() => {props.setValue(1); props.setSelectedIndex(3)}}    
                        className={classes.link}>
                        ¿Dónde estamos?
                    </Grid>
                    <Grid 
                        item
                        component={Link}
                        to="/institucional/organizacion"
                        onClick={() => {props.setValue(1); props.setSelectedIndex(4)}}   
                        className={classes.link}>
                        Organización
                    </Grid>
                </Grid>
            </Grid>
            <Grid 
                    item
                    className={classes.gridItem} 
                >
                <Grid 
                    container 
                    direction="column"
                    spacing={2}>
                    <Grid 
                        item
                        component={Link}
                        to="/acciones/informes"
                        onClick={() => {props.setValue(2); props.setSelectedIndex(0)}}   
                        className={classes.link}>
                        ACCIONES
                    </Grid>
                    <Grid 
                        item
                        component={Link}
                        to="/acciones/informes"
                        onClick={() => {props.setValue(2); props.setSelectedIndex(1)}}    
                        className={classes.link}>
                        Informes
                    </Grid>
                    <Grid 
                        item
                        component={Link}
                        to="/acciones/monitoreos"
                        onClick={() => {props.setValue(2); props.setSelectedIndex(2)}}  
                        className={classes.link}>
                        Monitoreos
                    </Grid>
                    <Grid 
                        item
                        component={Link}
                        to="/acciones/defensoriaItinerante"
                        onClick={() => {props.setValue(2); props.setSelectedIndex(3)}}   
                        className={classes.link}>
                        Defensoria itinerante
                    </Grid>
                    <Grid 
                        item
                        component={Link}
                        to="/acciones/accionesJudiciales"
                        onClick={() => {props.setValue(2); props.setSelectedIndex(4)}}   
                        className={classes.link}>
                        Acciones Judiciales
                    </Grid>
                    <Grid 
                        item
                        component={Link}
                        to="/acciones/convenios"
                        onClick={() => {props.setValue(2); props.setSelectedIndex(5)}}   
                        className={classes.link}>
                        Convenios
                    </Grid>
                    <Grid 
                        item
                        component={Link}
                        to="/acciones/proyecto"
                        onClick={() => {props.setValue(2); props.setSelectedIndex(6)}}   
                        className={classes.link}>
                        Proyecto de Ley
                    </Grid>
                </Grid>
            </Grid>
            <Grid 
                    item
                    className={classes.gridItem} 
                >
                <Grid 
                    container 
                    direction="column"
                    spacing={2}>
                    <Grid 
                        item
                        component={Link}
                        onClick={() => {props.setValue(3); props.setSelectedIndex(0)}}
                        to="/miembros" 
                        className={classes.link}>
                        MIEMBROS
                    </Grid>
                    {/* <Grid 
                        item
                        component={Link}
                        to="/miembros"
                        onClick={() => {props.setValue(3); props.setSelectedIndex(1)}}  
                        className={classes.link}>
                        Mapa
                    </Grid> */}
                    {/* <Grid 
                        item
                        component={Link}
                        to="/miembros/turnos"
                        onClick={() => {props.setValue(3); props.setSelectedIndex(2)}}  
                        className={classes.link}>
                        Turnos
                    </Grid> */}
                    {/* <Grid 
                        item
                        component={Link}
                        to="/miembros/intranet"
                        onClick={() => {props.setValue(3); props.setSelectedIndex(3)}}  
                        className={classes.link}>
                        intranet
                    </Grid> */}
                </Grid>
            </Grid>
            <Grid 
                    item
                    className={classes.gridItem} 
                >
                <Grid 
                    container 
                    direction="column" 
                    spacing={2}>
                    <Grid 
                        item
                        component={Link}
                        to="/biblioteca"
                        onClick={() => props.setValue(4)}  
                        className={classes.link}>
                        BIBLIOTECA
                    </Grid>
                </Grid>
            </Grid>
            <Grid 
                    item 
                    className={classes.gridItem}
                >
                <Grid 
                    container 
                    direction="column" 
                    spacing={2}>
                    <Grid 
                        item
                        component={Link}
                        to="/saludMental/"
                        onClick={() => props.setValue(4)}  
                        className={classes.link}>
                        ORSM - SALUD MENTAL
                    </Grid>
                    {/* <Grid 
                        item
                        component={Link}
                        to="/saludMental/orsm"
                        onClick={() => props.setValue(4)}   
                        className={classes.link}>
                        ORSM
                    </Grid> */}
                </Grid>
            </Grid>
            <Grid 
                    item
                    className={classes.gridItem} 
                >
                <Grid 
                    container 
                    direction="column"
                    spacing={2}>
                    <Grid 
                        item
                        component={Link}
                        to="/contact"
                        onClick={() => props.setValue(5)}   
                        className={classes.link}>
                        CONTACTO
                    </Grid>
                </Grid>
            </Grid>
            </Hidden>
            <Grid 
                container
                justify="flex-end"
                spacing={2}
                className={classes.contenedorSociales}
                >
                <Grid 
                    item 
                    component={"a"} 
                    href="https://www.facebook.com" 
                    rel="noopener noreferrer"
                    target="_blank">
                    <img alt="facebook logo" src={facebook} className={classes.icon} />
                </Grid>
                <Grid 
                    item 
                    component={"a"} 
                    href="https://www.instagram.com"
                    rel="noopener noreferrer"
                    target="_blank">
                    <img alt="instagram logo" src={instagram} className={classes.icon} />
                </Grid>
            </Grid>
        </Grid>
        
        </footer>
}
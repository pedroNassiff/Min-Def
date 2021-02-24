import React, { Component } from 'react'
import SingleLegend from 'componentes/ui/SingleLegend'
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import avatar5 from ' ../../assets/img/avatar5.jpg'
import iconArroba from '../../assets/img/arroba.png'
const useStyles = makeStyles(theme => ({
}))

export default function Charata() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
        return (
            <div className='container content-city mx-auto'>
                <div className='row'>
                    <h2 className='h2 first-title'>IV CIRCUNSCRIPCIÒN - CHARATA | Cel turno: 3625-239848</h2>
                </div>
                <div className='row'>
                    <div className='item item--2 first--city'>
                    <h6>Defensoría Oficial N° 1: Dra. Patricia Paz</h6>

                        <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar5} alt='Defensoría Oficial N° 1: Dra. Cecilia Carauini' /> </figure>
                        <ul className='item--info'>
                            <li><span><img className='img-fluid' src={iconArroba} alt='Dirección'/></span>Direcciòn: Monseñor de Carlo Nº 345</li>
                            <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span>Teléfono fijo: 3731-442393</li>
                            <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span>defensoria1-ch@justiciachaco.gov.ar</li>
                        </ul>
                    </div>
                </div>
                <div className='row'>
                    <div className='item item--2'>
                    <h6>Defensoría Oficial N° 2: Dra. Lorena Pàez</h6>

                        <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar5} alt='Defensoría Oficial N° 2: Dr. Ramòn Svenson' /> </figure>
                        <ul className='item--info'>
                            <li><span><img className='img-fluid' src={iconArroba} alt='Dirección'/></span>Monseñor de Carlo Nº 345</li>
                            <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span>3731-423146 - Cel: 3731-624414</li>
                            <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span>defensoria2-ch@justiciachaco.gov.ar</li>
                        </ul>
                    </div>

                </div>
            </div>
            // <div>
            //     <Grid container >
            //         <Grid item container>
            //             <Grid item style={{ width: "30%", marginLeft: "15em" }}>
            //                 <Grid
            //                     container
            //                     style={{ padding: "5em" }}
            //                 >
            //                     <Grid item>
            //                         <Typography
            //                             variant="h2"
            //                             style={{ fontSize: matchesSM ? "0.9em" : "1.3em", fontWeight: 900, marginTop: "-4em", position: "absolute", fontFamily: "Roboto", background: "#00a0dc", color: "white", maxWidth: matchesSM ? "26em" : "43em", width: "40em", marginLeft: matchesSM ? "-7em" : "-16em" }}
            //                             align={matchesSM ? "center" : undefined}
            //                         >IV CIRCUNSCRIPCIÒN - CHARATA | Cel turno: 3625-239848
            //                             </Typography>
            //                     </Grid>
            //                 </Grid>
            //                 <Grid item style={{ marginTop: "-7em", width: matchesSM ? "18em" : "100%", marginLeft: matchesSM ? "-11em" : "0em"  }}>
            //                 <SingleLegend img={avatar5} 
            //                     defOficNum="Defensoría Oficial N° 1: Dra. Patricia Paz"
            //                     dir="Direcciòn: Monseñor de Carlo Nº 345"
            //                     tel="Teléfono fijo: 3731-442393"
            //                     email="defensoria1-ch@justiciachaco.gov.ar"
            //                     />
            //                 </Grid>
            //                 <Grid item sm direction="column" style={{ width: "100%", marginLeft:  matchesSM ? "-11em" :"-1em", marginTop: "2em" }} >
            //                     <SingleLegend img={avatar5}
            //                         defOficNum="Defensoría Oficial N° 2: Dra. Lorena Pàez"
            //                         dir="Direcciòn: Monseñor de Carlo Nº 345"
            //                         tel="Teléfono: 3731-423146 - Cel: 3731-624414"
            //                         email="defensoria2-ch@justiciachaco.gov.ar"
            //                     />
            //                 </Grid>
            //             </Grid>
                       
            //         </Grid>
            //     </Grid>
            // </div>
        )
    
}

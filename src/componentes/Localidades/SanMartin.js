import React, { Component } from 'react'
import SingleLegend from 'componentes/ui/SingleLegend'
import avatar5 from ' ../../assets/img/avatar5.jpg'
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
}))

export default function SanMartin() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
        return (
            <div>
                <Grid container >
                    <Grid item container>
                        <Grid item style={{ width: "30%", marginLeft: "15em" }}>
                            <Grid
                                container
                                style={{ padding: "5em" }}
                            >
                                <Grid item>
                                    <Typography
                                        variant="h2"
                                        style={{ fontSize: matchesSM ? "0.8em" : "1.3em", fontWeight: 900, marginTop: "-4em", position: "absolute", fontFamily: "Roboto", background: "#00a0dc", color: "white", maxWidth: matchesSM ? "29em" : "43em", width: "40em", marginLeft: matchesSM ? "-8em" : "-16em" }}
                                        align={matchesSM ? "center" : undefined}
                                    >V CIRCUNSCRIPCIÒN - GENERAL SAN MARTIN | Cel turno: 3625-239849
                                        </Typography>
                                </Grid>
                            </Grid>
                            <Grid item style={{ marginTop: matchesSM ? "-4em" : "-7em", width: matchesSM ? "18em" : "100%", marginLeft: matchesSM ? "-11em" : "0em"  }}>
                            <SingleLegend img={avatar5} 
                                defOficNum="Defensoría Oficial N° 2: Dr. Adrian Vañek"
                                dir="Direcciòn: Yrigoyen Nº 265"
                                tel="Teléfono fijo: 3725-422201"
                                email="def02-gsm@justiciachaco.gov.ar"
                                />
                            </Grid>
                          
                        </Grid>
                       
                    </Grid>
                </Grid>
            </div>
        )
    
}
import React, { Component } from 'react'
import SingleLegend from 'componentes/ui/SingleLegend'
import avatar5 from ' ../../assets/img/avatar5.jpg'
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
const useStyles = makeStyles(theme => ({
}))
export default function VillaAngela() {
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
                                        style={{ fontSize: matchesSM ? "0.9em" : "1.3em", fontWeight: 900, marginTop: "-4em", position: "absolute", fontFamily: "Roboto", background: "#00a0dc", color: "white", maxWidth: matchesSM ? "26em" : "43em", width: "40em", marginLeft: matchesSM ? "-7em" : "-16em" }}
                                        align={matchesSM ? "center" : undefined}
                                    >III CIRCUNSCRIPCIÒN - VILLA ANGELA | Cel turno: 3625-239847
                                        </Typography>
                                </Grid>
                            </Grid>
                            <Grid item style={{ marginTop: "-7em", width: matchesSM ? "18em" : "100%", marginLeft: matchesSM ? "-5em" : "0em"  }}>
                            <SingleLegend img={avatar5} 
                                defOficNum="Defensoría Oficial N° 1: Dra. Cecilia Carauini"
                                dir="Direcciòn: 9 de Julio Nº 372"
                                tel="Teléfono fijo: 375-4421213"
                                email="defensoria1-va@justiciachaco.gov.ar"
                                />
                            </Grid>
                            <Grid item sm direction="column" style={{ width: "100%", marginLeft:  matchesSM ? "-5em" :"-1em", marginTop: "2em" }} >
                                <SingleLegend img={avatar5}
                                    defOficNum="Defensoría Oficial N° 2: Dr. Ramòn Svenson"
                                    dir="Direcciòn: 9 de Julio Nº 372"
                                    tel="Teléfono fijo: 375-4421213"
                                    email="defensoria2-va@justiciachaco.gov.ar"
                                />
                            </Grid>
                        </Grid>
                       
                    </Grid>
                </Grid>
            </div>
        )
    
}

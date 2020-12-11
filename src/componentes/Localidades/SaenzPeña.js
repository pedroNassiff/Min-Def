import React, { Component } from 'react'
import SingleLegend from 'componentes/ui/SingleLegend'
import avatar5 from ' ../../assets/img/avatar5.jpg'
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
}))

export default function SaenzPeña() {
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
                                    >II CIRCUNSCRIPCIÒN - ROQUE SÀENZ PEÑA | Cel turno: 3624-766000
                                        </Typography>
                                </Grid>
                            </Grid>
                            <Grid item style={{ marginTop: "-5em", width: matchesSM ? "18em" : "100%", marginLeft: matchesSM ? "-11em" : "0em"  }}>
                            <SingleLegend img={avatar5} 
                                defOficNum="Defensoría Oficial N° 1: Dr. Ariel Juarez"
                                dir="Direcciòn: 9 de Julio Nº 326"
                                tel="Teléfono fijo: 3644-421300"
                                email="defensoria1-sp@justiciachaco.gov.ar"
                                />
                            </Grid>
                            
                        </Grid>
                        <Grid container >
                                <Grid item container direction="row" style={{ width: "100%", marginTop: "2em", marginLeft: matchesSM ? "4em" : "3em" }}>
                                    <Grid item lg direction="column" style={{ width: "100%", marginLeft:  matchesSM ? "0em" :"-1em", marginTop: "0em" }} >
                                        <SingleLegend img={avatar5}
                                        defOficNum="Defensoría Oficial N° 2: Dr. Matias Jachesky"
                                        dir="Direcciòn: 9 de Julio Nº 326"
                                        tel="Teléfono fijo: 3644-4313823"
                                        email="defensoria2-sp@justiciachaco.gov.ar"
                                        />
                                    </Grid>
                                    <Grid item lg direction="column" style={{ width: "100%", marginLeft:  matchesSM ? "0em" :"10em" }} >
                                        <SingleLegend img={avatar5}
                                          defOficNum="Defensoría Oficial N° 3: Dr. Simòn Bosio"
                                          dir="Direcciòn: 9 de Julio Nº 326"
                                          tel="Teléfono fijo: 3644-4313827"
                                          email="defensoria2-sp@justiciachaco.gov.ar"
                                        />
                                    </Grid>
                                </Grid>
                                </Grid>
                    </Grid>
                </Grid>
            </div>
        )
    
}

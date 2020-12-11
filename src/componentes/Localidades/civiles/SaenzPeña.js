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
                                    >II CIRCUNSCRIPCIÒN - SAÈN PEZA  | Calle 25 de mayo Nº 338, Piso 5
                                        </Typography>
                                </Grid>
                            </Grid>
                            <Grid item style={{ marginTop: "-7em", width: matchesSM ? "18em" : "100%", marginLeft: matchesSM ? "-12em" : "0em"  }}>
                            <SingleLegend img={avatar5} 
                                defOficNum="Defensoría Oficial N° 4: Dra. Paola Soto"
                                
                                tel="Teléfono fijo: 364-4421278"
                                email="defensoria4-sp@justiciachaco.gov.ar"
                                />
                            </Grid>
                            <Grid item sm direction="column" style={{ width: "100%", marginLeft:  matchesSM ? "-12em" :"-1em", marginTop: "2em" }} >
                                <SingleLegend img={avatar5}
                                    defOficNum="Defensoría Oficial N° 5: Dr. Rubens Ariel Aguirre"
                                    
                                    tel="Teléfono fijo: 364-4429046"
                                    email="defensoria5-sp@justiciachaco.gov.ar"
                                />
                            </Grid>
                        </Grid>
                       
                    </Grid>
                </Grid>
            </div>
        )
    
}

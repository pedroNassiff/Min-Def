import React, { Component } from 'react'
import SingleLegend from 'componentes/ui/SingleLegend'
import avatar3 from ' ../../assets/img/avatar3.jpg'
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles(theme => ({
    
}))
export default function Resistencia() {
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
                                    style={{ fontSize: "1.3em", fontWeight: 900, marginTop: "-4em", position: "absolute", fontFamily: "Roboto", background: "#00a0dc", color: "white", maxWidth: matchesSM ? "18em" : "43em", width: "40em", marginLeft: matchesSM ? "-5em" : "-16em" }}
                                    align={matchesSM ? "center" : undefined}
                                >Guemes Nº 655, 2do Piso
                                    </Typography>
                            </Grid>
                        </Grid>
                        <Grid item style={{ marginTop: "-7em", width: matchesSM ? "18em" : "100%", marginLeft: matchesSM ? "-5em" : "0em"  }}>
                            <SingleLegend img={avatar3}
                                defOficNum="Defensoría Oficial N° 1: Dra. Carmen  Sanchez"
                                tel="Teléfono: 3624-4452579"
                                email="defensoria1-rcia@justiciachaco.gov.ar"
                            />
                        </Grid>
                    </Grid>
                    <Grid container >
                        <Grid item container direction="row" style={{ width: "100%", marginTop: "2em", marginLeft: matchesSM ? "10em" : "2em" }}>
                            <Grid item sm direction="column" style={{ width: "100%" }} >
                                <SingleLegend img={avatar3}
                                    defOficNum="Defensoría Oficial N° 2: Dra. Maria de los Àngeles"
                                    tel="Teléfono: 3624-4427138"
                                    email="defensoria5-rcia@justiciachaco.gov.ar"
                                />
                            </Grid>
                            <Grid item sm direction="column" style={{ width: "100%", marginLeft:  matchesSM ? "0em" :"10em" }} >
                                <SingleLegend img={avatar3}
                                    defOficNum="Defensoría Oficial N° 3: Dra. Gabriela Rosello Brajovich"
                                    tel="Teléfono: 3624-4453887 -Cel: 3624-4427792"
                                    email="defensoria3-rcia@justiciachaco.gov.ar"
                                />
                            </Grid>
                         
                        </Grid>
                    </Grid>
                   
                    
                   
                    
                </Grid>
            </Grid>

        </div>
    )
}


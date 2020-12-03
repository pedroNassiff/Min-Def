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
                                >I - CIRCUNSCRIPCIÒN RESISTENCIA | Civiles Av. 9 de Julio Nº 466 | Cel Turno: 3624-902841
                                    </Typography>
                            </Grid>
                        </Grid>
                        <Grid item style={{ marginTop: "-7em", width: matchesSM ? "18em" : "100%", marginLeft: matchesSM ? "-5em" : "0em"  }}>
                            <SingleLegend img={avatar3}
                                defOficNum="Asesoria de NNA N° 1: Dra. Natalia Raquel Fachin"
                                tel="Teléfono: 362-4433642"
                                email="asesoriadelmenor1@justiciachaco.gov.ar"
                            />
                        </Grid>
                    </Grid>
                    <Grid container >
                        <Grid item container direction="row" style={{ width: "100%", marginTop: "2em", marginLeft: matchesSM ? "10em" : "2em" }}>
                            <Grid item sm direction="column" style={{ width: "100%" }} >
                                <SingleLegend img={avatar3}
                                    defOficNum="Asesoria de NNA N° 2: Dra. Romina Soledad Cima"
                                    tel="Teléfono: 362-4453879"
                                    email="asesoriadelmenor2@justiciachaco.gov.ar"
                                />
                            </Grid>
                            <Grid item sm direction="column" style={{ width: "100%", marginLeft:  matchesSM ? "0em" :"10em" }} >
                                <SingleLegend img={avatar3}
                                    defOficNum="Asesoria de NNA N° 5: Dra. Gabriela Carolina Coleff"
                                    tel="Teléfono: 362-44538731"
                                    email="asesoriadelmenor5@justiciachaco.gov.ar"
                                />
                            </Grid>
                            <Grid item sm direction="column" style={{ width: "100%",  marginLeft:  matchesSM ? "0em" :"10em"  }} >
                                <SingleLegend img={avatar3}
                                    defOficNum="Asesoria de NNA N° 5: Dra. Patricia Noemi Zamudio"
                                    tel="Teléfono: 362-4453872"
                                    email="asesoriadelmenor6@justiciachaco.gov.ar"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        style={{ padding: "5em" }}
                    >
                        <Grid item>
                            <Typography
                                variant="h2"
                                style={{ fontSize: "1.3em", fontWeight: 900, marginTop: "-2em", position: "absolute", fontFamily: "Roboto", background: "#00a0dc", color: "white", maxWidth: "1500px", width: "100%", marginLeft: matchesSM ? "6em" : "-4em" }}
                                align={matchesSM ? "center" : undefined}
                            >PENALES | Av. las Heras Nº 320 - 2do piso | Celular de turno: 3624-248988
                                </Typography>
                        </Grid>
                    </Grid>
                    <Grid container >
                        <Grid item container direction="row" style={{ width: "100%", marginTop: "-3em", marginLeft: matchesSM ? "10em" : "2em" }}>
                            <Grid item sm direction="column" style={{ width: "100%" }} >
                                <SingleLegend img={avatar3}
                                    defOficNum="Asesoria de NNA N° 3: Dra. Marianela Motter Lugo"
                                    tel="Teléfono: 362-4453959"
                                    email="asesoriadelmenor3@justiciachaco.gov.ar"
                                />
                            </Grid>
                            <Grid item sm direction="column" style={{ width: "100%", marginLeft:  matchesSM ? "0em" :  "10em" }} >
                                <SingleLegend img={avatar3}
                                     defOficNum="Asesoria de NNA N° 4: Dra. Elena Velazco - Prov -"
                                     tel="Teléfono: 362-4452565"
                                     email="asesoriadelmenor5@justiciachaco.gov.ar"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
}


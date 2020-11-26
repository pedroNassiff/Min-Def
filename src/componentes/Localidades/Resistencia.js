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
                                defOficNum="Defensoría Oficial N° 4: Dr. Juan Pablo Cerbera"
                                tel="Teléfono: 3624-4427795"
                                email="defensoria4-rcia@justiciachaco.gov.ar"
                            />
                        </Grid>
                    </Grid>
                    <Grid container >
                        <Grid item container direction="row" style={{ width: "100%", marginTop: "2em", marginLeft: matchesSM ? "10em" : "2em" }}>
                            <Grid item sm direction="column" style={{ width: "100%" }} >
                                <SingleLegend img={avatar3}
                                    defOficNum="Defensoría Oficial N° 5: Dra. Daniela Acosta Calvo"
                                    tel="Teléfono: 3624-4453889"
                                    email="defensoria5-rcia@justiciachaco.gov.ar"
                                />
                            </Grid>
                            <Grid item sm direction="column" style={{ width: "100%", marginLeft:  matchesSM ? "0em" :"10em" }} >
                                <SingleLegend img={avatar3}
                                    defOficNum="Defensoría Oficial N° 7: Dra. Estefania Argarate"
                                    tel="Teléfono: 3624-4453887 -Cel: 3624-071406"
                                    email="defensoria7-rcia@justiciachaco.gov.ar"
                                />
                            </Grid>
                            <Grid item sm direction="column" style={{ width: "100%",  marginLeft:  matchesSM ? "0em" :"10em"  }} >
                                <SingleLegend img={avatar3}
                                    defOficNum="Defensoría Oficial N° 10: Dra. Yamila Baldovino"
                                    tel="Teléfono: 3624-4422521"
                                    email="defensoria10-rcia@justiciachaco.gov.ar"
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
                            >Brown Nº 238
                                </Typography>
                        </Grid>
                    </Grid>
                    <Grid container >
                        <Grid item container direction="row" style={{ width: "100%", marginTop: "-3em", marginLeft: matchesSM ? "10em" : "2em" }}>
                            <Grid item sm direction="column" style={{ width: "100%" }} >
                                <SingleLegend img={avatar3}
                                    defOficNum="Defensoría Oficial N° 13: Dra. Patricia Aleksich"
                                    tel="Teléfono: 3624-4453887"
                                    email="defensoria13-rcia@justiciachaco.gov.ar"
                                />
                            </Grid>
                            <Grid item sm direction="column" style={{ width: "100%", marginLeft:  matchesSM ? "0em" :  "10em" }} >
                                <SingleLegend img={avatar3}
                                    defOficNum="Defensoría Oficial N° 14: Dra. Antonia Cuadra"
                                    tel="Teléfono: 3624-4453893"
                                    email="defensoria14-rcia@justiciachaco.gov.ar"
                                />
                            </Grid>
                            <Grid item sm direction="column" style={{ width: "100%", marginLeft:  matchesSM ? "0em" : "10em" }} >
                                <SingleLegend img={avatar3}
                                    defOficNum="Defensoría Oficial N° 15: Dra. Hector Fedeli"
                                    tel="Teléfono: 3624-4453901"
                                    email="defensoria15-rcia@justiciachaco.gov.ar"
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
                                style={{ fontSize: "1.3em", fontWeight: 900, marginTop: "-2em", position: "absolute", fontFamily: "Roboto", background: "#00a0dc", color: "white", maxWidth: "1500px", width: "100%", marginLeft:  matchesSM ? "6em" :  "-4em" }}
                                align={matchesSM ? "center" : undefined}
                            >Roque Saenz Peña Nº 34
                                </Typography>
                        </Grid>
                    </Grid>
                    <Grid container >
                        <Grid item container direction="row" style={{ width: "100%", marginTop: "-3em", marginLeft:  matchesSM ? "10em" : "2em" }}>
                            <Grid item sm direction="column" style={{ width: "100%" }} >
                                <SingleLegend img={avatar3}
                                    defOficNum="Defensoría Oficial N° 6: Dra. Julieta Dansey"
                                    tel="Teléfono: 3624-4428061 - Cel: 3624-386131"
                                    email="defensoria6-rcia@justiciachaco.gov.ar"
                                />
                            </Grid>
                            <Grid item sm direction="column" style={{ width: "100%", marginLeft:  matchesSM ? "0em" : "10em" }} >
                                <SingleLegend img={avatar3}
                                    defOficNum="Defensoría Oficial N° 11: Dra. Lorena Padovan"
                                    tel="Teléfono: 3624-4453893"
                                    email="defensoria14-rcia@justiciachaco.gov.ar"
                                />
                            </Grid>
                            <Grid item sm direction="column" style={{ width: "100%", marginLeft:  matchesSM ? "0em" : "10em" }} >
                                <SingleLegend img={avatar3}
                                    defOficNum="Defensoría Oficial N° 12: Dra. Celeste Ojeda"
                                    tel="Teléfono: 3624-4452737 - Cel: 3624-104928"
                                    email="defensoria15-rcia@justiciachaco.gov.ar"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </div>
    )
}


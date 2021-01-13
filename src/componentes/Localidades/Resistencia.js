import React, { Component } from 'react'
import avatar3 from ' ../../assets/img/avatar3.jpg'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import iconArroba from '../../assets/img/arroba.png'


const useStyles = makeStyles(theme => ({
}))
export default function Resistencia() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <div className='container content-city mx-auto'>
            <div className='row'>
                <h2 className='h2 first-title'>Guemes Nº 655, 2do Piso</h2>
            </div>
            <div className='row'>
                <div className='item item--3 first--city'>
                    <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar3} alt='Defensoría Oficial N° 4: Dr. Juan Pablo Cerbera' /> </figure>
                    <h6>Defensoría Oficial N° 4:<br /> Dr. Juan Pablo Cerbera</h6>
                    <ul className='item--info'>
                        <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span></li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span> Teléfono: 3624-4427795</li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> defensoria4-rcia@justiciachaco.gov.ar</li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <div className='item item--3'>
                    <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar3} alt='Defensoría Oficial N° 5: Dra. Daniela Acosta Calvo' /> </figure>
                    <h6>Defensoría Oficial N° 5:<br /> Dra. Daniela Acosta Calvo</h6>
                    <ul className='item--info'>
                        <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span></li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span> Teléfono: 3624-4453889</li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> defensoria5-rcia@justiciachaco.gov.ar</li>
                    </ul>
                </div>
                <div className='item item--3'>
                    <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar3} alt='Defensoría Oficial N° 7: Dra. Estefania Argarate' /> </figure>
                    <h6>Defensoría Oficial N° 7:<br /> Dra. Estefania Argarate</h6>
                    <ul className='item--info'>
                        <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span></li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span> Teléfono: 3624-4453887 -Cel: 3624-071406</li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> defensoria7-rcia@justiciachaco.gov.ar</li>
                    </ul>
                </div>
                <div className='item item--3'>
                    <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar3} alt='Defensoría Oficial N° 10: Dra. Yamila Baldovino' /> </figure>
                    <h6>Defensoría Oficial N° 10:<br /> Dra. Yamila Baldovino</h6>
                    <ul className='item--info'>
                        <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span></li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span> Teléfono: 3624-4422521</li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> efensoria10-rcia@justiciachaco.gov.ar</li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <h2 className='h2'>Brown Nº 238</h2>
            </div>
            <div className='row'>
                <div className='item item--3'>
                    <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar3} alt='Defensoría Oficial N° 13: Dra. Patricia Aleksich' /> </figure>
                    <h6>Defensoría Oficial N° 13:<br /> Dra. Patricia Aleksich</h6>
                    <ul className='item--info'>
                        <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span></li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span> Teléfono: 3624-4453887</li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> defensoria13-rcia@justiciachaco.gov.ar</li>
                    </ul>
                </div>
                <div className='item item--3'>
                    <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar3} alt='Defensoría Oficial N° 14: Dra. Antonia Cuadra' /> </figure>
                    <h6>Defensoría Oficial N° 14:<br /> Dra. Antonia Cuadra</h6>
                    <ul className='item--info'>
                        <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span></li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span> Teléfono: 3624-4453893</li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> defensoria14-rcia@justiciachaco.gov.ar</li>
                    </ul>
                </div>
                <div className='item item--3'>
                    <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar3} alt='Defensoría Oficial N° 15: Dra. Hector Fedeli' /> </figure>
                    <h6>Defensoría Oficial N° 15:<br /> Dra. Hector Fedeli</h6>
                    <ul className='item--info'>
                        <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span></li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span> Teléfono: 3624-4453901</li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> defensoria15-rcia@justiciachaco.gov.ar</li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <h2 className='h2'>Roque Saenz Peña Nº 34</h2>
            </div>
            <div className='row'>
                <div className='item item--3'>
                    <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar3} alt='Defensoría Oficial N° 6: Dra. Julieta Dansey' /> </figure>
                    <h6>Defensoría Oficial N° 6:<br /> Dra. Julieta Dansey</h6>
                    <ul className='item--info'>
                        <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span></li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span> Teléfono: 3624-4428061 - Cel: 3624-386131</li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> defensoria6-rcia@justiciachaco.gov.ar</li>
                    </ul>
                </div>
                <div className='item item--3'>
                    <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar3} alt='Defensoría Oficial N° 11: Dra. Lorena Padovan' /> </figure>
                    <h6>Defensoría Oficial N° 11:<br /> Dra. Lorena Padovan</h6>
                    <ul className='item--info'>
                        <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span></li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span> Teléfono: 3624-4453893</li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> defensoria14-rcia@justiciachaco.gov.ar</li>
                    </ul>
                </div>
                <div className='item item--3'>
                    <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar3} alt='Defensoría Oficial N° 12: Dra. Celeste Ojeda' /> </figure>
                    <h6>Defensoría Oficial N° 12:<br /> Dra. Celeste Ojeda</h6>
                    <ul className='item--info'>
                        <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span></li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span> Teléfono:  3624-4452737 - Cel: 3624-104928</li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> defensoria15-rcia@justiciachaco.gov.ar</li>
                    </ul>
                </div>
            </div>
            {/* <Grid container >
                <Grid item container>
                    <Grid item >
                        <Grid
                            container
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
                        <Grid item style={{ marginTop: "-7em", width: matchesSM ? "18em" : "100%", marginLeft: matchesSM ? "-11em" : "0em"  }}>
                            <SingleLegend img={avatar3}
                                defOficNum="Defensoría Oficial N° 4: Dr. Juan Pablo Cerbera"
                                tel="Teléfono: 3624-4427795"
                                email="defensoria4-rcia@justiciachaco.gov.ar"
                            />
                        </Grid>
                    </Grid>
                    <Grid container >
                        <Grid item container direction="row">
                            <Grid item sm direction="column" style={{ width: "100%" }} >
                                <SingleLegend img={avatar3}
                                    defOficNum="Defensoría Oficial N° 5: Dra. Daniela Acosta Calvo"
                                    tel="Teléfono: 3624-4453889"
                                    email="defensoria5-rcia@justiciachaco.gov.ar"
                                />
                            </Grid>
                            <Grid item sm direction="column">
                                <SingleLegend img={avatar3}
                                    defOficNum="Defensoría Oficial N° 7: Dra. Estefania Argarate"
                                    tel="Teléfono: 3624-4453887 -Cel: 3624-071406"
                                    email="defensoria7-rcia@justiciachaco.gov.ar"
                                />
                            </Grid>
                            <Grid item sm direction="column">
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
                        <Grid item container direction="row">
                            <Grid item sm direction="column" style={{ width: "100%" }} >
                                <SingleLegend img={avatar3}
                                    defOficNum="Defensoría Oficial N° 13: Dra. Patricia Aleksich"
                                    tel="Teléfono: 3624-4453887"
                                    email="defensoria13-rcia@justiciachaco.gov.ar"
                                />
                            </Grid>
                            <Grid item sm direction="column" >
                                <SingleLegend img={avatar3}
                                    defOficNum="Defensoría Oficial N° 14: Dra. Antonia Cuadra"
                                    tel="Teléfono: 3624-4453893"
                                    email="defensoria14-rcia@justiciachaco.gov.ar"
                                />
                            </Grid>
                            <Grid item sm direction="column">
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
                        <Grid item container direction="row">
                            <Grid item sm direction="column" style={{ width: "100%" }} >
                                <SingleLegend img={avatar3}
                                    defOficNum="Defensoría Oficial N° 6: Dra. Julieta Dansey"
                                    tel="Teléfono: 3624-4428061 - Cel: 3624-386131"
                                    email="defensoria6-rcia@justiciachaco.gov.ar"
                                />
                            </Grid>
                            <Grid item sm direction="column" >
                                <SingleLegend img={avatar3}
                                    defOficNum="Defensoría Oficial N° 11: Dra. Lorena Padovan"
                                    tel="Teléfono: 3624-4453893"
                                    email="defensoria14-rcia@justiciachaco.gov.ar"
                                />
                            </Grid>
                            <Grid item sm direction="column">
                                <SingleLegend img={avatar3}
                                    defOficNum="Defensoría Oficial N° 12: Dra. Celeste Ojeda"
                                    tel="Teléfono: 3624-4452737 - Cel: 3624-104928"
                                    email="defensoria15-rcia@justiciachaco.gov.ar"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>  */}

        </div>
    )
}


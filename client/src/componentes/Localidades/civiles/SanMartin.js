import React, { useEffect } from 'react'
import SingleLegend from 'componentes/ui/SingleLegend'
import avatar5 from ' ../../assets/img/avatar5.jpg'
import Grid from '@material-ui/core/Grid';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import iconArroba from '../../../assets/img/icon-mail.svg';
import iconPhone from '../../../assets/img/icon-phone.svg';

const useStyles = makeStyles(theme => ({
}))

export default function SanMartin() {
    const handleScroll = () => {
        let topElem = document.getElementById('content-city');
        let top = topElem.offsetTop;
        window.scrollTo({ top: top, behavior: 'smooth' });
    }

    useEffect(() => {
        handleScroll();
    },[]);

    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
        return (
            <div className='container content-city mx-auto' id='content-city'>
                <div className='row'>
                    <h2 className='h2'>V CIRCUNSCRIPCIÒN - SAN MARTIN | Uruguay Nº 635</h2>
                </div>
                <div className='row'>
                    <div className='item item--2'>
                        <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar5} alt='Defensoría Oficial N° 1: Dr. Daniel Salinas' /> </figure>
                        <h6>Defensoría Oficial N° 1: <br />Dr. Daniel Salinas</h6>
                        <ul className='item--info'>
                            {/* <li><span><img className='img-fluid' src={iconMarker} alt='Dirección'/></span> Dirección: Yrigoyen Nº 265</li> */}
                            <li><span><img className='img-fluid' src={iconPhone} alt='Teléfono'/></span> Teléfono fijo: 3725-420183</li>
                            <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> def01-gsm@justiciachaco.gov.ar</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    
}
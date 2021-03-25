import React, { useEffect } from 'react'
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
                    <h2 className='h2 first-title'>IV CIRCUNSCRIPCIÒN - CHARATA | Cel turno: 3625-239848</h2>
                </div>
                <div className='row'>
                    <div className='item item--2'>
                        <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar5} alt='Defensoría Oficial N° 1: Dra. Cecilia Carauini' /> </figure>
                        <h6>Defensoría Oficial N° 1: Dra. Patricia Paz</h6>
                        <ul className='item--info'>
                            <li><span><img className='img-fluid' src={iconArroba} alt='Dirección'/></span>Direcciòn: Monseñor de Carlo Nº 345</li>
                            <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span>Teléfono fijo: 3731-442393</li>
                            <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span>defensoria1-ch@justiciachaco.gov.ar</li>
                        </ul>
                    </div>
                    <div className='item item--2'>
                        <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar5} alt='Defensoría Oficial N° 2: Dr. Ramòn Svenson' /> </figure>
                        <h6>Defensoría Oficial N° 2: Dra. Lorena Pàez</h6>
                        <ul className='item--info'>
                            <li><span><img className='img-fluid' src={iconArroba} alt='Dirección'/></span>Monseñor de Carlo Nº 345</li>
                            <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span>3731-423146 - Cel: 3731-624414</li>
                            <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span>defensoria2-ch@justiciachaco.gov.ar</li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    
}

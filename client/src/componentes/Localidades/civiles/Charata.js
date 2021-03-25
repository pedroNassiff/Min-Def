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
                    <h2 className='h2'>IV CIRCUNSCRIPCIÒN - CHARATA | Monseñor de Carlo Nº 645, Piso 1</h2>
                </div>
                <div className='row'>
                    <div className='item item--2'>
                        <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar5} alt='Defensoría Oficial N° 2: Dra. Alicia Vogt' /> </figure>
                        <h6>Defensoría Oficial N° 2: Dra. Alicia Vogt</h6>
                        <ul className='item--info'>
                            {/* <li><span><img className='img-fluid' src={iconMarker} alt='Dirección'/></span> Dirección: Yrigoyen Nº 265</li> */}
                            <li><span><img className='img-fluid' src={iconPhone} alt='Teléfono'/></span> Teléfono fijo: 3731-422393</li>
                            <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> defensoria2-ch@justiciachaco.gov.ar</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    
}
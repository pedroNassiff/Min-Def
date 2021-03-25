import React, { useEffect } from 'react'
import avatar5 from ' ../../assets/img/avatar5.jpg'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import iconArroba from '../../assets/img/icon-mail.svg';
import iconPhone from '../../assets/img/icon-phone.svg';
import iconMarker from '../../assets/img/icon-marker.svg';

const useStyles = makeStyles(theme => ({
}))
export default function VillaAngela() {
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
                    <h2 className='h2 first-title'>III CIRCUNSCRIPCIÓN - VILLA ANGELA | Cel turno: 3625-239847</h2>
                </div>
                <div className='row'>
                    <div className='item item--2'>
                        <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar5} alt='Defensoría Oficial N° 1: Dra. Cecilia Carauini' /> </figure>
                        <h6>Defensoría Oficial N° 1: Dra. Cecilia Carauini</h6>
                        <ul className='item--info'>
                            <li><span><img className='img-fluid' src={iconMarker} alt='Dirección'/></span> Dirección:9 de Julio Nº 372</li>
                            <li><span><img className='img-fluid' src={iconPhone} alt='Teléfono'/></span> Teléfono fijo: 375-4421213</li>
                            <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> defensoria1-va@justiciachaco.gov.ar</li>
                        </ul>
                    </div>
                    <div className='item item--2'>

                        <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar5} alt='Defensoría Oficial N° 2: Dr. Ramòn Svenson' /> </figure>
                        <h6>Defensoría Oficial N° 2: Dr. Ramón Svenson</h6>
                        <ul className='item--info'>
                            <li><span><img className='img-fluid' src={iconMarker} alt='Dirección'/></span> Dirección:9 de Julio Nº 372</li>
                            <li><span><img className='img-fluid' src={iconPhone} alt='Teléfono'/></span> Teléfono fijo: 375-4421213</li>
                            <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> defensoria2-va@justiciachaco.gov.ar</li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    
}

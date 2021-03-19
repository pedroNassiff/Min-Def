import React, { Component } from 'react'
import avatar5 from ' ../../assets/img/avatar5.jpg'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import iconArroba from '../../assets/img/icon-mail.svg';
import iconPhone from '../../assets/img/icon-phone.svg';
import iconMarker from '../../assets/img/icon-marker.svg';

const useStyles = makeStyles(theme => ({
}))

export default function SanMartin() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
        return (
            <div className='container content-city mx-auto'>
                <div className='row'>
                    <h2 className='h2 first-title'>V CIRCUNSCRIPCIÓN - GENERAL SAN MARTIN | Cel turno: 3625-239849</h2>
                </div>
                <div className='row'>
                <h6>Defensoría Oficial N° 2: Dr. Adrian Vañek</h6>

                    <div className='item item--2 first--city'>
                        <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar5} alt='Defensoría Oficial N° 2: Dr. Adrian Vañek' /> </figure>
                        <ul className='item--info'>
                            <li><span><img className='img-fluid' src={iconMarker} alt='Dirección'/></span> Dirección: Yrigoyen Nº 265</li>
                            <li><span><img className='img-fluid' src={iconPhone} alt='Teléfono'/></span> Teléfono fijo: 3725-422201</li>
                            <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> def02-gsm@justiciachaco.gov.ar</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    
}
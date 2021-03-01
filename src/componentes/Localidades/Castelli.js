import React, { Component } from 'react'
import SingleLegend from 'componentes/ui/SingleLegend'
import avatar5 from ' ../../assets/img/avatar5.jpg'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import iconArroba from '../../assets/img/icon-mail.svg';
import iconPhone from '../../assets/img/icon-phone.svg';
import iconMarker from '../../assets/img/icon-marker.svg';

const useStyles = makeStyles(theme => ({
}))

export default function Castelli() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
        return (
            <div className='container content-city mx-auto'>
                <div className='row'>
                    <h2 className='h2 first-title'>VI CIRCUNSCRIPCIÒN - JUAN JOSÈ CASTELLI | Cel turno: 3644-54944</h2>
                </div>
                <div className='row'>
                    <div className='item item--2 first--city'>
                        <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar5} alt='Defensoría Oficial N° 1: Dr. Gustavo Kleinsinger' /> </figure>
                        <h6>Defensoría Oficial N° 1: Dr. Gustavo Kleinsinger</h6>
                        <ul className='item--info'>
                            <li><span><img className='img-fluid' src={iconMarker} alt='Dirección'/></span> Dirección: Dr Vazquez esquina Padre Holzer</li>
                            <li><span><img className='img-fluid' src={iconPhone} alt='Teléfono'/></span> Teléfono fijo: 3644-472300</li>
                            <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> defensoria1-jjc@justiciachaco.gov.ar</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    
}

import React, { Component } from 'react'
import avatar5 from ' ../../assets/img/avatar5.jpg'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import iconArroba from '../../assets/img/arroba.png'

const useStyles = makeStyles(theme => ({
}))
export default function VillaAngela() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
        return (
            <div className='container content-city mx-auto'>
                <div className='row'>
                    <h2 className='h2 first-title'>III CIRCUNSCRIPCIÓN - VILLA ANGELA | Cel turno: 3625-239847</h2>
                </div>
                <div className='row'>
                    <div className='item item--2 first--city'>
                    <h6>Defensoría Oficial N° 1: Dra. Cecilia Carauini</h6>

                        <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar5} alt='Defensoría Oficial N° 1: Dra. Cecilia Carauini' /> </figure>
                        <ul className='item--info'>
                            <li><span><img className='img-fluid' src={iconArroba} alt='Dirección'/></span> Dirección:9 de Julio Nº 372</li>
                            <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span> Teléfono fijo: 375-4421213</li>
                            <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> defensoria1-va@justiciachaco.gov.ar</li>
                        </ul>
                    </div>
                </div>
                <div className='row'>
                    <div className='item item--2'>
                    <h6>Defensoría Oficial N° 2: Dr. Ramón Svenson</h6>

                        <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar5} alt='Defensoría Oficial N° 2: Dr. Ramòn Svenson' /> </figure>
                        <ul className='item--info'>
                            <li><span><img className='img-fluid' src={iconArroba} alt='Dirección'/></span> Dirección:9 de Julio Nº 372</li>
                            <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span> Teléfono fijo: 375-4421213</li>
                            <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> defensoria2-va@justiciachaco.gov.ar</li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    
}

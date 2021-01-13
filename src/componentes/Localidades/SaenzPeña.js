import React, { Component } from 'react'
import avatar5 from ' ../../assets/img/avatar5.jpg'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import iconArroba from '../../assets/img/arroba.png'

const useStyles = makeStyles(theme => ({
}))

export default function SaenzPeña() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
        return (
            <div className='container content-city mx-auto'>
                <div className='row'>
                    <h2 className='h2 first-title'>II CIRCUNSCRIPCIÓN - ROQUE SÁENZ PEÑA | Cel turno: 3624-766000</h2>
                </div>
                <div className='row'>
                    <div className='item item--2 first--city'>
                        <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar5} alt='Defensoría Oficial N° 1: Dr. Dr. Ariel Juarez' /> </figure>
                        <h6>Defensoría Oficial N° 1: Dr. Ariel Juarez</h6>
                        <ul className='item--info'>
                            <li><span><img className='img-fluid' src={iconArroba} alt='Dirección'/></span> Dirección: 9 de Julio Nº 326</li>
                            <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span> Teléfono fijo: 3644-421300</li>
                            <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> defensoria1-sp@justiciachaco.gov.ar</li>
                        </ul>
                    </div>
                </div>
                <div className='row'>
                    <div className='item item--2'>
                        <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar5} alt='Defensoría Oficial N° 2: Dr. Matias Jachesky' /> </figure>
                        <h6>Defensoría Oficial N° 2: Dr. Matias Jachesky</h6>
                        <ul className='item--info'>
                            <li><span><img className='img-fluid' src={iconArroba} alt='Dirección'/></span> Dirección: 9 de Julio Nº 326</li>
                            <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span> Teléfono fijo: 3644-4313823</li>
                            <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> defensoria2-sp@justiciachaco.gov.ar</li>
                        </ul>
                    </div>
                    <div className='item item--2'>
                        <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar5} alt='Defensoría Oficial N° 3: Simón Bosio' /> </figure>
                        <h6>Defensoría Oficial N° 3: Simón Bosio</h6>
                        <ul className='item--info'>
                            <li><span><img className='img-fluid' src={iconArroba} alt='Dirección'/></span> Dirección: 9 de Julio Nº 326</li>
                            <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span> Teléfono fijo: 3644-4313827</li>
                            <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> defensoria2-sp@justiciachaco.gov.ar</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    
}

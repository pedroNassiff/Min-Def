import React, { useEffect } from 'react'
import avatar3 from ' ../../assets/img/avatar3.jpg'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import iconArroba from '../../../assets/img/icon-mail.svg';
import iconPhone from '../../../assets/img/icon-phone.svg';


const useStyles = makeStyles(theme => ({
}))
export default function Resistencia() {
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
                <h2 className='h2'>I - CIRCUNSCRIPCIÓN RESISTENCIA |<br />Civiles Av. 9 de Julio Nº 466 | Cel Turno: 3624-902841</h2>
            </div>
            <div className='row'>
                <div className='item item--2'>
                    <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar3} alt='Asesoria de NNA N° 1: Dra. Natalia Raquel Fachin' /> </figure>
                    <h6>Asesoria de NNA N° 1: Dra. Natalia Raquel Fachin</h6>
                    <ul className='item--info'>
                        {/* <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span></li> */}
                        <li><span><img className='img-fluid' src={iconPhone} alt='Teléfono'/></span> Teléfono: 362-4433642</li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> asesoriadelmenor1@justiciachaco.gov.ar</li>
                    </ul>
                </div>
                <div className='item item--2'>
                    <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar3} alt='Asesoria de NNA N° 2: Dra. Romina Soledad Cima' /> </figure>
                    <h6>Asesoria de NNA N° 2: Dra. Romina Soledad Cima</h6>
                    <ul className='item--info'>
                        {/* <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span></li> */}
                        <li><span><img className='img-fluid' src={iconPhone} alt='Teléfono'/></span> Teléfono: 362-4453879</li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> asesoriadelmenor2@justiciachaco.gov.ar</li>
                    </ul>
                </div>
                <div className='item item--2'>
                    <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar3} alt='Asesoria de NNA N° 5: Dra. Gabriela Carolina Coleff' /> </figure>
                    <h6>Asesoria de NNA N° 5: Dra. Gabriela Carolina Coleff</h6>
                    <ul className='item--info'>
                        {/* <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span></li> */}
                        <li><span><img className='img-fluid' src={iconPhone} alt='Teléfono'/></span> Teléfono: 362-44538731</li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> asesoriadelmenor5@justiciachaco.gov.ar</li>
                    </ul>
                </div>
                <div className='item item--2'>
                    <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar3} alt='Asesoria de NNA N° 5: Dra. Patricia Noemi Zamudio' /> </figure>
                    <h6>Asesoria de NNA N° 5: Dra. Patricia Noemi Zamudio</h6>
                    <ul className='item--info'>
                        {/* <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span></li> */}
                        <li><span><img className='img-fluid' src={iconPhone} alt='Teléfono'/></span> Teléfono: 362-4453872</li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> asesoriadelmenor6@justiciachaco.gov.ar</li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <h2 className='h2 first-title'>PENALES | Av. las Heras Nº 320 - 2do piso | Celular de turno: 3624-248988</h2>
            </div>
            <div className='row'>
                <div className='item item--2 first--city'>
                    <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar3} alt='Asesoria de NNA N° 3: Dra. Marianela Motter Lugo' /> </figure>
                    <h6>Asesoria de NNA N° 3: Dra. Marianela Motter Lugo</h6>
                    <ul className='item--info'>
                        {/* <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span></li> */}
                        <li><span><img className='img-fluid' src={iconPhone} alt='Teléfono'/></span> Teléfono: 362-4453959</li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> asesoriadelmenor3@justiciachaco.gov.ar</li>
                    </ul>
                </div>
                <div className='item item--2 first--city'>
                    <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar3} alt='Asesoria de NNA N° 4: Dra. Elena Velazco - Prov -' /> </figure>
                    <h6>Asesoria de NNA N° 4: Dra. Elena Velazco - Prov -</h6>
                    <ul className='item--info'>
                        {/* <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span></li> */}
                        <li><span><img className='img-fluid' src={iconPhone} alt='Teléfono'/></span> Teléfono: 362-4452565</li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> asesoriadelmenor5@justiciachaco.gov.ar</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


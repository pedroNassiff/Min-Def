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
                    <h2 className='h2'>Guemes Nº 655, 2do Piso</h2>
                </div>
                <div className='row'>
                    <div className='item item--3'>
                        <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar3} alt='Defensoría Oficial N° 1: Dra. Carmen  Sanchez' /> </figure>
                        <h6>Defensoría Oficial N° 1:<br /> Dra. Carmen  Sanchez</h6>
                        <ul className='item--info'>
                            {/* <li><span><img className='img-fluid' src={iconMarker} alt='Dirección'/></span> Dirección: Yrigoyen Nº 265</li> */}
                            <li><span><img className='img-fluid' src={iconPhone} alt='Teléfono'/></span> Teléfono: 3624-4452579</li>
                            <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> defensoria1-rcia@justiciachaco.gov.ar</li>
                        </ul>
                    </div>
                    <div className='item item--3'>
                        <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar3} alt='Defensoría Oficial N° 2: Dra. Maria de los Àngeles' /> </figure>
                        <h6>Defensoría Oficial N° 2:<br /> Dra. Maria de los Àngeles</h6>
                        <ul className='item--info'>
                            {/* <li><span><img className='img-fluid' src={iconMarker} alt='Dirección'/></span> Dirección: Yrigoyen Nº 265</li> */}
                            <li><span><img className='img-fluid' src={iconPhone} alt='Teléfono'/></span> Teléfono: 3624-4427138</li>
                            <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> defensoria5-rcia@justiciachaco.gov.ar</li>
                        </ul>
                    </div>
                    <div className='item item--3'>
                        <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar3} alt='Defensoría Oficial N° 3: Dra. Gabriela Rosello Brajovich' /> </figure>
                        <h6>Defensoría Oficial N° 3:<br /> Dra. Gabriela Rosello Brajovich</h6>
                        <ul className='item--info'>
                            {/* <li><span><img className='img-fluid' src={iconMarker} alt='Dirección'/></span> Dirección: Yrigoyen Nº 265</li> */}
                            <li><span><img className='img-fluid' src={iconPhone} alt='Teléfono'/></span> Teléfono: 3624-4453887 -Cel: 3624-4427792</li>
                            <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> defensoria3-rcia@justiciachaco.gov.ar</li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}


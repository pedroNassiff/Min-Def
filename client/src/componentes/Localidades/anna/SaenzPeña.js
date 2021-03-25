import React, { useEffect } from 'react'
import avatar5 from ' ../../assets/img/avatar5.jpg'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import iconArroba from '../../../assets/img/icon-mail.svg';
import iconPhone from '../../../assets/img/icon-phone.svg';

const useStyles = makeStyles(theme => ({
}))

export default function SaenzPeña() {
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
                <h2 className='h2'>II CIRCUNSCRIPCIÒN - SAENZPEÑA | Calle 25 de mayo Nº 338, Piso 5</h2>
            </div>
            <div className='row'>
                <div className='item item--2'>
                    <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar5} alt='Asesoria de NNA N° 1: Dra. Vanessa Zachman' /> </figure>
                    <h6>Asesoria de NNA N° 1: Dra. Vanessa Zachman</h6>
                    <ul className='item--info'>
                        {/* <li><span><img className='img-fluid' src={iconMarker} alt='Dirección'/></span> Dirección: Yrigoyen Nº 265</li> */}
                        <li><span><img className='img-fluid' src={iconPhone} alt='Teléfono'/></span> Teléfono: 364-4429057</li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> asesoriadelmenor-sp@justiciachaco.gov.ar</li>
                    </ul>
                </div>
            </div>
        </div>
        )
    
}
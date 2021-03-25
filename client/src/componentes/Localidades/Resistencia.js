import React, { useEffect } from 'react'
import avatar3 from ' ../../assets/img/avatar3.jpg'
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import iconArroba from '../../assets/img/icon-mail.svg';
import iconPhone from '../../assets/img/icon-phone.svg';
import iconMarker from '../../assets/img/icon-marker.svg';


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
                <h2 className='h2 first-title'>Guemes Nº 655, 2do Piso</h2>
            </div>
            <div className='row'>
                <div className='item item--2'>
                    <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar3} alt='Defensoría Oficial N° 4: Dr. Juan Pablo Cerbera' /> </figure>
                    <h6>Defensoría Oficial N° 4: Dr. Juan Pablo Cerbera</h6>
                    <ul className='item--info'>
                        {/* <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span></li> */}
                        <li><span><img className='img-fluid' src={iconPhone} alt='Teléfono'/></span> Teléfono: 3624-4427795</li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> defensoria4-rcia@justiciachaco.gov.ar</li>
                    </ul>
                </div>
                <div className='item item--2'>
                    <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar3} alt='Defensoría Oficial N° 5: Dra. Daniela Acosta Calvo' /> </figure>
                    <h6>Defensoría Oficial N° 5: Dra. Daniela Acosta Calvo</h6>
                    <ul className='item--info'>
                        {/* <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span></li> */}
                        <li><span><img className='img-fluid' src={iconPhone} alt='Teléfono'/></span> Teléfono: 3624-4453889</li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> defensoria5-rcia@justiciachaco.gov.ar</li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <div className='item item--2'>
                    <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar3} alt='Defensoría Oficial N° 7: Dra. Estefania Argarate' /> </figure>
                    <h6>Defensoría Oficial N° 7: Dra. Estefania Argarate</h6>
                    <ul className='item--info'>
                        {/* <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span></li> */}
                        <li><span><img className='img-fluid' src={iconPhone} alt='Teléfono'/></span> Teléfono: 3624-4453887 -Cel: 3624-071406</li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> defensoria7-rcia@justiciachaco.gov.ar</li>
                    </ul>
                </div>
                <div className='item item--2'>
                    <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar3} alt='Defensoría Oficial N° 10: Dra. Yamila Baldovino' /> </figure>
                    <h6>Defensoría Oficial N° 10: Dra. Yamila Baldovino</h6>
                    <ul className='item--info'>
                        {/* <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span></li> */}
                        <li><span><img className='img-fluid' src={iconPhone} alt='Teléfono'/></span> Teléfono: 3624-4422521</li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> efensoria10-rcia@justiciachaco.gov.ar</li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <h2 className='h2'>Brown Nº 238</h2>
            </div>
            <div className='row'>
                <div className='item item--3'>
                    <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar3} alt='Defensoría Oficial N° 13: Dra. Patricia Aleksich' /> </figure>
                    <h6>Defensoría Oficial N° 13:<br /> Dra. Patricia Aleksich</h6>
                    <ul className='item--info'>
                        {/* <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span></li> */}
                        <li><span><img className='img-fluid' src={iconPhone} alt='Teléfono'/></span> Teléfono: 3624-4453887</li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> defensoria13-rcia@justiciachaco.gov.ar</li>
                    </ul>
                </div>
                <div className='item item--3'>
                    <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar3} alt='Defensoría Oficial N° 14: Dra. Antonia Cuadra' /> </figure>
                    <h6>Defensoría Oficial N° 14:<br /> Dra. Antonia Cuadra</h6>
                    <ul className='item--info'>
                        {/* <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span></li> */}
                        <li><span><img className='img-fluid' src={iconPhone} alt='Teléfono'/></span> Teléfono: 3624-4453893</li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> defensoria14-rcia@justiciachaco.gov.ar</li>
                    </ul>
                </div>
                <div className='item item--3'>
                    <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar3} alt='Defensoría Oficial N° 15: Dra. Hector Fedeli' /> </figure>
                    <h6>Defensoría Oficial N° 15:<br /> Dra. Hector Fedeli</h6>
                    <ul className='item--info'>
                        {/* <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span></li> */}
                        <li><span><img className='img-fluid' src={iconPhone} alt='Teléfono'/></span> Teléfono: 3624-4453901</li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> defensoria15-rcia@justiciachaco.gov.ar</li>
                    </ul>
                </div>
            </div>
            <div className='row'>
                <h2 className='h2'>Roque Saenz Peña Nº 34</h2>
            </div>
            <div className='row'>
                <div className='item item--3'>
                    <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar3} alt='Defensoría Oficial N° 6: Dra. Julieta Dansey' /> </figure>
                    <h6>Defensoría Oficial N° 6:<br /> Dra. Julieta Dansey</h6>
                    <ul className='item--info'>
                        {/* <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span></li> */}
                        <li><span><img className='img-fluid' src={iconPhone} alt='Teléfono'/></span> Teléfono: 3624-4428061 - Cel: 3624-386131</li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> defensoria6-rcia@justiciachaco.gov.ar</li>
                    </ul>
                </div>
                <div className='item item--3'>
                    <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar3} alt='Defensoría Oficial N° 11: Dra. Lorena Padovan' /> </figure>
                    <h6>Defensoría Oficial N° 11:<br /> Dra. Lorena Padovan</h6>
                    <ul className='item--info'>
                        {/* <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span></li> */}
                        <li><span><img className='img-fluid' src={iconPhone} alt='Teléfono'/></span> Teléfono: 3624-4453893</li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> defensoria14-rcia@justiciachaco.gov.ar</li>
                    </ul>
                </div>
                <div className='item item--3'>
                    <figure className='mx-auto'> <img className='img-fluid d-block' src={avatar3} alt='Defensoría Oficial N° 12: Dra. Celeste Ojeda' /> </figure>
                    <h6>Defensoría Oficial N° 12:<br /> Dra. Celeste Ojeda</h6>
                    <ul className='item--info'>
                        {/* <li><span><img className='img-fluid' src={iconArroba} alt='Teléfono'/></span></li> */}
                        <li><span><img className='img-fluid' src={iconPhone} alt='Teléfono'/></span> Teléfono:  3624-4452737 - Cel: 3624-104928</li>
                        <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> defensoria15-rcia@justiciachaco.gov.ar</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


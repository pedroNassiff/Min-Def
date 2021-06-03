import React, { useEffect, useState }  from 'react'
import iconArroba from '../../../assets/img/icon-mail.svg';
import iconPhone from '../../../assets/img/icon-phone.svg';
import iconMarker from '../../../assets/img/icon-marker.svg';


export default function Resistencia() {

  const handleScroll = () => {
    let topElem = document.getElementById('content-city');
    let top = topElem.offsetTop;
    window.scrollTo({ top: top, behavior: 'smooth' });
}

const domain = 'https://mpdchaco.tk';
const [miembros, setMiembros] = useState([]);

async function getData(url) {
  const response = await fetch(url);
  if (!response.ok) {
    const message = `Ocurrió un error: ${response.status}`;
    throw new Error(message);
  }
  const data = await response.json();
  if(data.length > 0) {
    setMiembros(data[0].acf.localidad)
  };
}

useEffect(() => {
  getData(`${domain}/wp-json/wp/v2/miembros?categories=1`);
  handleScroll();
}, []);

return (
    <>
      <div className='container content-city mx-auto' id='content-city'>
        {
          miembros && miembros.map(
            (miembro, i) => (
              <div className='row w-100' key={i}>
                {
                  miembro.city === 'Resistencia' &&
                  miembro.circunscripcion.map((circu, j) => (
                    <div className='card-miembro w-100' key={j}>
                      <div className='card-header'>
                        <ul className='header--title'>
                          <li><h2 className='h2 text-left'>{circu.title}</h2></li>
                          <li><h2 className='name-city'>{miembro.city}</h2></li>
                        </ul>
                      </div>  
                      {
                        circu.item.map((ite, k) => (
                          <div className='card-body' key={k}>
                            <div className='body--cover'>
                              <figure className='mx-auto'> <img className='img-fluid d-block' src={ite.cover} alt={ite.name} /> </figure>
                            </div>
                            <div className='body--info'>
                              <h2>{ite.name}</h2>
                              <ul className='item--info'>
                                {
                                  ite.address &&
                                  <li><span><img className='img-fluid' src={iconMarker} alt='Dirección'/></span> Dirección: {ite.address}</li>
                                }
                                {
                                  ite.phone &&
                                  <li><span><img className='img-fluid' src={iconPhone} alt='Teléfono'/></span> Teléfono fijo: {ite.phone}</li>
                                }
                                {
                                  ite.email &&
                                  <li><span><img className='img-fluid' src={iconArroba} alt='correo'/></span> {ite.email}</li>
                                }
                              </ul>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  ))
                }
              </div>
            )
          )
        }
      </div>
    </>
)
    
}

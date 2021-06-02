import React, { useState, useEffect } from 'react';
import iconArroba from '../../assets/img/icon-mail.svg';
import iconPhone from '../../assets/img/icon-phone.svg';
import iconMarker from '../../assets/img/icon-marker.svg';

export default function SingleLegend() {
    const domain = 'https://mpdchaco.tkk';
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
      // getData(`${domain}/wp-json/wp/v2/miembros?filter[meta_key]=city&filter[meta_value]=castelli`);
    }, []);

    return (
        <>
          <div className='container content-city mx-auto' id='content-city'>
            {
              miembros && miembros.map(
                (miembro, i) => (
                  <div className='row w-100' key={i}>
                    {
                      miembro.circunscripcion.map((circu, j) => (
                        <div className='card-miembro w-100'>
                          <div className='card-header' key={j}>
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

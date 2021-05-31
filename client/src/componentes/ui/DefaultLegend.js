import React, { useState, useEffect } from 'react';

export default function SingleLegend() {

    const domain = 'http://mpdchaco.tk';
    const [item, setItems] = useState([]);

    async function getData(url) {
      const response = await fetch(url);
      if (!response.ok) {
        const message = `Ocurrió un error: ${response.status}`;
        throw new Error(message);
      }
      const data = await response.json();
      setItems(data);
    }

    useEffect(() => {
      // trayendo bibliotecas
      getData(`${domain}/wp-json/wp/v2/miembros`);
    }, []);

    const filterList = (type) => {
      getData(`${domain}/wp-json/wp/v2/miembros?filter[meta_key]=area&filter[meta_value]=${type}`);
    } 

    const searchFilter = (search) => {
      getData(`${domain}/wp-json/wp/v2/miembros?search=${search}`);
    }


    return (
        <>
            <div className='resultContainer'>
              {
                item && item.map(
                  (b, i) => (
                    <div  key={i} className="card w-100">
                      <div className='card-body w-100'>
                        <ul className='d-flex'>
                          <li className='name body-title w-100 d-flex align-items-center'><p>{b.title.rendered}</p></li>
                          {/* <li className='body-button'><a href={b.acf.doc} className='btn btn-primary' target='_blank' download>Descargar</a></li> */}
                        </ul>
                      </div>
                    </div>
                  )
                )
              }
            </div>
        </>
    )
}

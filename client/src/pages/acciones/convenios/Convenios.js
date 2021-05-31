import React, { useState, useEffect } from "react";

const Convenios = () => {

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
      // trayendo Acciones
      getData(`${domain}/wp-json/wp/v2/acciones?filter[meta_key]=area&filter[meta_value]=convenios`);
    }, []);

    const searchFilter = (search) => {
      getData(`${domain}/wp-json/wp/v2/acciones?filter[meta_key]=area&filter[meta_value]=convenios&search=${search}`);
    }

    return (
        <div className="bibliotecaContainer">
            <div className="titleContainer">
                <h1>Acciones - Convenios</h1>
                <span>
                   Escriba lo que está buscando en el buscador
                </span>
            </div>
            <div className="SearchContainer">
                <input
                  className='searchInput ant-input'
                  type="text"
                  name="search"
                  onChange={event => searchFilter(event.target.value)}
                  placeholder="¿Que buscas?"
                />
                {/* <Button className='selectButton5'>Buscar</Button> */}
            </div>
            
            <div className='resultContainer'>
              {
                item && item.map(
                  (b, i) => (
                    <div  key={i} className="card-list w-100">
                      <div className='card-list-body w-100'>
                        <ul className='d-flex'>
                          <li className='name body-title w-100 d-flex align-items-center'><p>{b.title.rendered} <span className='badge badge-success'>{b.acf.area.label}</span></p></li>
                          <li className='body-button'><a href={b.acf.doc} className='btn btn-primary' target='_blank' download>Descargar</a></li>
                        </ul>
                      </div>
                    </div>
                  )
                )
              }
            </div>
            <div className="titleContainer">
            </div>
        </div>
    );
};

export default Convenios;
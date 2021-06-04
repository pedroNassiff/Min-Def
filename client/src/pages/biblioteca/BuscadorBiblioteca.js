import React, { useState, useEffect } from "react";
import './BuscadorBiblioteca.scss'
import { Button } from 'antd';

const BuscadorBiblioteca = () => {

    const domain = 'https://mpdchaco.tk';
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
      getData(`${domain}/wp-json/wp/v2/biblioteca`);
    }, []);

    const filterList = (type) => {
      getData(`${domain}/wp-json/wp/v2/biblioteca?filter[meta_key]=area&filter[meta_value]=${type}`);
    } 

    const searchFilter = (search) => {
      getData(`${domain}/wp-json/wp/v2/biblioteca?search=${search}`);
    }

    return (
        <div className="bibliotecaContainer">
            <div className="titleContainer">
                <h1>Biblioteca</h1>
                <span>
                    Selecciona una de las categorías para filtrar o escriba lo que está buscando en el buscador
                </span>
            </div>
            <div className="selectContainer">
                <Button onClick={() => filterList('reglamentos')} className='selectButton1'>Reglamentos</Button>
                <Button onClick={() => filterList('resoluciones')} className='selectButton2'>Resoluciones</Button>
                <Button onClick={() => filterList('leyes')} className='selectButton3'>Leyes</Button>
                <Button onClick={() => filterList('secretaria-civil')} className='selectButton3'>Secretaría Civil</Button>
                <Button onClick={() => filterList('secretaria-penal')} className='selectButton3'>Secretaría Penal</Button>
                <Button onClick={() => filterList('legislaciones')} className='selectButton4'>Legislaciones</Button>
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
                          <li className='body-button'><a href={b.acf.doc} className='btn btn-primary' target='_blank' download='download'>Descargar</a></li>
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

export default BuscadorBiblioteca;
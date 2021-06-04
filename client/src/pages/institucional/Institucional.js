import React, { useState, useEffect } from 'react';
import './Institucional.scss'

const Institucional = () => {

  const domain = 'https://mpdchaco.tk';
    const [item, setItems] = useState([]);

    async function getData(url) {
      const response = await fetch(url);
      if (!response.ok) {
        const message = `Ocurrió un error: ${response.status}`;
        throw new Error(message);
      }
      const data = await response.json();
      if(data.length > 0) {
        setItems(data[0].acf)
      };
      // setItems(data);
      console.log(data[0].acf);
    }

    useEffect(() => {
      // trayendo bibliotecas
      getData(`${domain}/wp-json/wp/v2/institucional`);
    }, []);



    return (
      <div className="mainContainer">
        <div className="titleContainer">
          <h1>¿Qué es el MPD?</h1>
          <div className='container'>
            <div className='row' dangerouslySetInnerHTML={{__html: `${item.what}`}}></div>
          </div>
        </div>
        <div className="titleContainer">
          <h1>¿Qué hacemos?</h1>
          <div className='container'>
            <div className='row' dangerouslySetInnerHTML={{__html: `${item.what_do}`}}></div>
          </div>
        </div>
        <div className="titleContainer">
          <h1>¿Dónde estamos?</h1>
          <div className='container donde-estamos'>
            <div className='row' dangerouslySetInnerHTML={{__html: `${item.where}`}}></div>
          </div>
        </div>
        <div className="titleContainer">
          <h1>Organización</h1>
          <div className='container'>
            <div className='row' dangerouslySetInnerHTML={{__html: `${item.organization}`}}></div>
          </div>
        </div>
      </div>
    );
};

export default Institucional;
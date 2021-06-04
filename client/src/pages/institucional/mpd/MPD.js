import React, { useState, useEffect } from 'react';

const MPD = () => {

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
      </div>
    );
};

export default MPD;
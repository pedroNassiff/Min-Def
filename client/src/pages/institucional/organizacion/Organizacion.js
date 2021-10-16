import React, { useState, useEffect } from 'react';

const Organizacion = () => {

  const domain = 'https://mpdchaco.com.ar/admin';
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
          <h1>Organización</h1>
          <div className='container'>
            <div className='row' dangerouslySetInnerHTML={{__html: `${item.organization}`}}></div>
          </div>
        </div>
      </div>
    );
};

export default Organizacion;
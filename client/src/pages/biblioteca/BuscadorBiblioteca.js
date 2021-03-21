import React, { useState, useEffect, createRef } from "react";
import './BuscadorBiblioteca.scss'
import { Button, Input, Card } from 'antd';
import ApiService from '../../services/ApiService'

const BuscadorBiblioteca = () => {

    const [cards, setCards] = useState();

    useEffect(() => {

        ApiService.getBiblioteca().then(
          (data) => {
              console.log('retorno',data); 
              setCards(
                data.biblioteca.map(
                  (item, i) => (
                    <div  key={i} className="site-card-border-less-wrapper">
                    <Card title={item.nombre} bordered={false} extra={<a href={item.fileurl} target="_blank" className='selectButton5'>Descargar</a>}>
                       {/*  <p>{item.descripcion}</p> */}
                    </Card>
                    </div>
                  )
                )
              )
          },
          error => {
            console.log(error);
          }
        )
      }, []);

    return (
        <div className="bibliotecaContainer">
            <div className="titleContainer">
                <h1>Biblioteca</h1>
                <span>
                    Seleccione el tipo de información que necesite y luego escribe el campo de búsqueda.
                </span>
            </div>
            <div className="selectContainer">
                <Button className='selectButton1'>Reglamentos</Button>
                <Button className='selectButton2'>Resoluciones</Button>
                <Button className='selectButton3'>Leyes</Button>
                <Button className='selectButton4'>Legislaciones</Button>
            </div>
            <div className="SearchContainer">
                <Input
                    className='searchInput'
                    type="text"
                    name="mensaje"
                    placeholder="Que buscas?"
                />
                <Button className='selectButton5'>Buscar</Button>
            </div>
            <div className="resultContainer">
                {cards}
            </div>
        </div>
    );
};

export default BuscadorBiblioteca;
import React, { useState, useEffect, createRef } from "react";
import './BuscadorBiblioteca.scss'
import { Button, Input, Card } from 'antd';
import ApiService from '../../services/ApiService'
import Dumi from '../../dummyData/test'

const filtro = (Arr, value) => {
  if(value === 'Todos'){
      return Arr
  }else{
      return Arr.filter(e => e.categoria === value)
  }
}

const BuscadorBiblioteca = () => {

    const [state, setState] = useState({
      categoria: 'Todos',
      search: '',
      name: 'hai',
      arrayentero: [],
      arrayfiltrado:[]
    });


    useEffect(() => {
     //data.biblioteca
      ApiService.getBiblioteca().then(
        (data) => {   
          setState({
            ...state,
            arrayentero: data.biblioteca,
            arrayfiltrado: filtro(data.biblioteca, 'Todos'),
          });
        },
        error => {
          console.log(error);
        }
      )
    }, []);


    const searchFilter = (event) => {
      console.log(event.target.value);
      console.log();
      setState({
          ...state,
          search: event.target.value,
          arrayfiltrado: filtro(state.arrayentero, state.categoria).filter(
              function (list) 
              {
                  return list.nombre.toUpperCase().includes(event.target.value.toUpperCase())
              })
      }); 
    }

    const handleChange = (val) => {
      setState({
          ...state,
          categoria: val,
          search: '',
          arrayfiltrado: filtro(state.arrayentero, val)
      });
    };

    return (
        <div className="bibliotecaContainer">
            <div className="titleContainer">
                <h1>Biblioteca</h1>
                <span>
                    Seleccione el tipo de información que necesite y luego escribe el campo de búsqueda.
                </span>
            </div>
            <div className="selectContainer">
                <Button onClick={() => handleChange('reglamentos')} className='selectButton1'>Reglamentos</Button>
                <Button onClick={() => handleChange('resoluciones')} className='selectButton2'>Resoluciones</Button>
                <Button onClick={() => handleChange('leyes')} className='selectButton3'>Leyes</Button>
                <Button onClick={() => handleChange('secretariaCivil')} className='selectButton3'>Secretaría Civil</Button>
                <Button onClick={() => handleChange('secretariaPenal')} className='selectButton3'>Secretaría Penal</Button>
                <Button onClick={() => handleChange('legislaciones')} className='selectButton4'>Legislaciones</Button>
            </div>
            <div className="SearchContainer">
                <Input
                    className='searchInput'
                    type="text"
                    name="search"
                    onChange={searchFilter}
                    value={state.search}
                    placeholder="Que buscas?"
                />
                <Button className='selectButton5'>Buscar</Button>
            </div>
            <div className="titleContainer">
            {
              state.categoria != 'Todos' &&  
              <h1>filtrado por {state.categoria}</h1>
            }
            </div>
            <div className="resultContainer">
              {
                state.arrayfiltrado.map(
                  (item, i) => (
                    <div  key={i} className="site-card-border-less-wrapper">
                    <Card title={item.nombre} bordered={false} extra={<a href={item.fileurl} target="_blank" className='selectButton5'>Descargar</a>}>
                      {/*  <p>{item.descripcion}</p> */}
                    </Card>
                    </div>
                  )
                )
              }
            </div>
        </div>
    );
};

export default BuscadorBiblioteca;
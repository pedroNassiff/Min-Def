import React from 'react';
import './BuscadorBiblioteca.scss'
import { Button, Input, Card } from 'antd';

const BuscadorBiblioteca = () => {
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
                <div className="site-card-border-less-wrapper">
                    <Card title="PGN - 54 - 2020 - EDUARDO EZEQUIEL CASAL 10/08/2020" bordered={false} extra={<Button className='selectButton5'>Descargar</Button>}>
                        <p>En relación al Concurso N° 113 del M.P.F.N.</p>
                    </Card>
                </div>
                <div className="site-card-border-less-wrapper">
                    <Card title="PGN - 55 - 2020 - EDUARDO EZEQUIEL CASAL 10/08/2020" bordered={false} extra={<Button className='selectButton5'>Descargar</Button>}>
                        <p>En relación al Concurso N° 115 del M.P.F.N.</p>
                    </Card>
                </div>
                <div className="site-card-border-less-wrapper">
                    <Card title="PGN - 53 - 2020 - EDUARDO EZEQUIEL CASAL 07/08/2020" bordered={false} extra={<Button className='selectButton5'>Descargar</Button>}>
                        <p>Designa a la señora Fiscal General, Dra. Garzón, para intervenir en causa 2740/2020, “N.N. s/DETERMINAR-DENUNCIANTE: DR. DENETT..."</p>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default BuscadorBiblioteca;
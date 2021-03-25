import React from 'react';
import 'antd/dist/antd.css';
import { Row, Col, Avatar } from 'antd';
import {
  PhoneOutlined,
} from "@ant-design/icons";
import './Colapse.scss';
import { Collapse } from 'antd';
import Typography from '@material-ui/core/Typography';


const { Panel } = Collapse;

function Colapse() {
  return (
    

    
<div className="block featureBlock bgGray faqBlock">
  <div className="container-fluid">
  
    <Row gutter={[16, 16]}>
    <Col span={8}>
            <Collapse className="ant-colapsed">
                <Panel className="pcont" header="Defensorias Públicas Penales" key="1">
                    <Collapse>
                    <Panel className="pcont" header="Resistencia - 1ra Circunscripción" key="1">
                            <Row>
                                <span className="titulo1">
                                    Defensoría Oficial N° 13:
                                </span>
                                <span>
                                {""}Dra. Patricia Aleksich
                                </span>
                            </Row>
                            <p className="subTitulo">
                            Teléfono fijo: 3624-4453887 <br />
                            defensoria13-rcia@justiciachaco.gov.ar</p>
                        </Panel>
                    <Panel className="pcont" header="Sáenz Peña - 2da Circunscripción" key="2">
                        <Row>
                                <span className="titulo1">
                                    Defensoría Oficial N° 13:
                                </span>
                                <span>
                                {""}Dra. Patricia Aleksich
                                </span>
                            </Row>
                            <p className="subTitulo">
                            Teléfono fijo: 3624-4453887 <br />
                            defensoria13-rcia@justiciachaco.gov.ar</p>
                        </Panel>
                        <Panel className="pcont" header="Villa Angela - 3ra Circunscripción" key="3">
                            <Row>
                                <span className="titulo1">
                                    Defensoría Oficial N° 13:
                                </span>
                                <span>
                                {""}Dra. Patricia Aleksich
                                </span>
                            </Row>
                            <p className="subTitulo">
                            Teléfono fijo: 3624-4453887 <br />
                            defensoria13-rcia@justiciachaco.gov.ar</p>
                        </Panel>
                        <Panel className="pcont" header="Charata - 4ta Circunscripción" key="4">
                            <Row>
                                <span className="titulo1">
                                    Defensoría Oficial N° 13:
                                </span>
                                <span>
                                {""}Dra. Patricia Aleksich
                                </span>
                            </Row>
                            <p className="subTitulo">
                            Teléfono fijo: 3624-4453887 <br />
                            defensoria13-rcia@justiciachaco.gov.ar</p>
                        </Panel>
                        <Panel className="pcont" header="San Martín - 5ta Circunscripción" key="5">
                            <Row>
                                <span className="titulo1">
                                    Defensoría Oficial N° 13:
                                </span>
                                <span>
                                {""}Dra. Patricia Aleksich
                                </span>
                            </Row>
                            <p className="subTitulo">
                            Teléfono fijo: 3624-4453887 <br />
                            defensoria13-rcia@justiciachaco.gov.ar</p>
                        </Panel>
                        <Panel className="pcont" header="Castelli - 6ta Circunscripción" key="6">
                            <Row>
                            <span className="titulo1">
                                    Defensoría Oficial N° 13:
                                </span>
                                <span>
                                {""}Dra. Patricia Aleksich
                                </span>
                            </Row>
                            <p className="subTitulo">
                            Teléfono fijo: 3624-4453887 <br />
                            defensoria13-rcia@justiciachaco.gov.ar</p>
                        </Panel>
                        <Panel className="pcont" header="Misión Nueva Pompeya" key="7">
                            <Row>
                                <span className="titulo1">
                                    Defensoría Oficial N° 13:
                                </span>
                                <span>
                                {""}Dra. Patricia Aleksich
                                </span>
                            </Row>
                            <p className="subTitulo">
                            Teléfono fijo: 3624-4453887 <br />
                            defensoria13-rcia@justiciachaco.gov.ar</p>
                        </Panel>
                    </Collapse>
                </Panel>
            </Collapse>
        </Col>
        <Col span={8}>
            <Collapse className="ant-colapsed">
                <Panel className="pcont" header="Defensorias Públicas y Civíles" key="1">
                    <Collapse>
                    <Panel className="pcont" header="Resistencia - 1ra Circunscripción" key="1">
                            <Row>
                                <span className="titulo1">
                                    Defensoría Oficial N° 13:
                                </span>
                                <span>
                                {""}Dra. Patricia Aleksich
                                </span>
                            </Row>
                            <p className="subTitulo">
                            Teléfono fijo: 3624-4453887 <br />
                            defensoria13-rcia@justiciachaco.gov.ar</p>
                        </Panel>
                    <Panel className="pcont" header="Sáenz Peña - 2da Circunscripción" key="2">
                        <Row>
                                <span className="titulo1">
                                    Defensoría Oficial N° 13:
                                </span>
                                <span>
                                {""}Dra. Patricia Aleksich
                                </span>
                            </Row>
                            <p className="subTitulo">
                            Teléfono fijo: 3624-4453887 <br />
                            defensoria13-rcia@justiciachaco.gov.ar</p>
                        </Panel>
                        <Panel className="pcont" header="Villa Angela - 3ra Circunscripción" key="3">
                            <Row>
                                <span className="titulo1">
                                    Defensoría Oficial N° 13:
                                </span>
                                <span>
                                {""}Dra. Patricia Aleksich
                                </span>
                            </Row>
                            <p className="subTitulo">
                            Teléfono fijo: 3624-4453887 <br />
                            defensoria13-rcia@justiciachaco.gov.ar</p>
                        </Panel>
                        <Panel className="pcont" header="Charata - 4ta Circunscripción" key="4">
                            <Row>
                                <span className="titulo1">
                                    Defensoría Oficial N° 13:
                                </span>
                                <span>
                                {""}Dra. Patricia Aleksich
                                </span>
                            </Row>
                            <p className="subTitulo">
                            Teléfono fijo: 3624-4453887 <br />
                            defensoria13-rcia@justiciachaco.gov.ar</p>
                        </Panel>
                        <Panel className="pcont" header="San Martín - 5ta Circunscripción" key="5">
                            <Row>
                                <span className="titulo1">
                                    Defensoría Oficial N° 13:
                                </span>
                                <span>
                                {""}Dra. Patricia Aleksich
                                </span>
                            </Row>
                            <p className="subTitulo">
                            Teléfono fijo: 3624-4453887 <br />
                            defensoria13-rcia@justiciachaco.gov.ar</p>
                        </Panel>
                        <Panel className="pcont" header="Castelli - 6ta Circunscripción" key="6">
                            <Row>
                            <span className="titulo1">
                                    Defensoría Oficial N° 13:
                                </span>
                                <span>
                                {""}Dra. Patricia Aleksich
                                </span>
                            </Row>
                            <p className="subTitulo">
                            Teléfono fijo: 3624-4453887 <br />
                            defensoria13-rcia@justiciachaco.gov.ar</p>
                        </Panel>
                        <Panel className="pcont" header="Misión Nueva Pompeya" key="7">
                            <Row>
                                <span className="titulo1">
                                    Defensoría Oficial N° 13:
                                </span>
                                <span>
                                {""}Dra. Patricia Aleksich
                                </span>
                            </Row>
                            <p className="subTitulo">
                            Teléfono fijo: 3624-4453887 <br />
                            defensoria13-rcia@justiciachaco.gov.ar</p>
                        </Panel>
                    </Collapse>
                </Panel>
            </Collapse>
        </Col>
        <Col span={8}>
            <Collapse className="ant-colapsed">
                <Panel className="pcont" header="Asesorías de Niñas, Niños y Adolecentes" key="1">
                    <Collapse>
                    <Panel className="pcont" header="Resistencia - 1ra Circunscripción" key="1">
                            <Row>
                                <span className="titulo1">
                                    Defensoría Oficial N° 13:
                                </span>
                                <span>
                                {""}Dra. Patricia Aleksich
                                </span>
                            </Row>
                            <p className="subTitulo">
                            Teléfono fijo: 3624-4453887 <br />
                            defensoria13-rcia@justiciachaco.gov.ar</p>
                        </Panel>
                    <Panel className="pcont" header="Sáenz Peña - 2da Circunscripción" key="2">
                        <Row>
                                <span className="titulo1">
                                    Defensoría Oficial N° 13:
                                </span>
                                <span>
                                {""}Dra. Patricia Aleksich
                                </span>
                            </Row>
                            <p className="subTitulo">
                            Teléfono fijo: 3624-4453887 <br />
                            defensoria13-rcia@justiciachaco.gov.ar</p>
                        </Panel>
                        <Panel className="pcont" header="Villa Angela - 3ra Circunscripción" key="3">
                            <Row>
                                <span className="titulo1">
                                    Defensoría Oficial N° 13:
                                </span>
                                <span>
                                {""}Dra. Patricia Aleksich
                                </span>
                            </Row>
                            <p className="subTitulo">
                            Teléfono fijo: 3624-4453887 <br />
                            defensoria13-rcia@justiciachaco.gov.ar</p>
                        </Panel>
                        <Panel className="pcont" header="Charata - 4ta Circunscripción" key="4">
                            <Row>
                                <span className="titulo1">
                                    Defensoría Oficial N° 13:
                                </span>
                                <span>
                                {""}Dra. Patricia Aleksich
                                </span>
                            </Row>
                            <p className="subTitulo">
                            Teléfono fijo: 3624-4453887 <br />
                            defensoria13-rcia@justiciachaco.gov.ar</p>
                        </Panel>
                        <Panel className="pcont" header="San Martín - 5ta Circunscripción" key="5">
                            <Row>
                                <span className="titulo1">
                                    Defensoría Oficial N° 13:
                                </span>
                                <span>
                                {""}Dra. Patricia Aleksich
                                </span>
                            </Row>
                            <p className="subTitulo">
                            Teléfono fijo: 3624-4453887 <br />
                            defensoria13-rcia@justiciachaco.gov.ar</p>
                        </Panel>
                        <Panel className="pcont" header="Castelli - 6ta Circunscripción" key="6">
                            <Row>
                            <span className="titulo1">
                                    Defensoría Oficial N° 13:
                                </span>
                                <span>
                                {""}Dra. Patricia Aleksich
                                </span>
                            </Row>
                            <p className="subTitulo">
                            Teléfono fijo: 3624-4453887 <br />
                            defensoria13-rcia@justiciachaco.gov.ar</p>
                        </Panel>
                        <Panel className="pcont" header="Misión Nueva Pompeya" key="7">
                            <Row>
                                <span className="titulo1">
                                    Defensoría Oficial N° 13:
                                </span>
                                <span>
                                {""}Dra. Patricia Aleksich
                                </span>
                            </Row>
                            <p className="subTitulo">
                            Teléfono fijo: 3624-4453887 <br />
                            defensoria13-rcia@justiciachaco.gov.ar</p>
                        </Panel>
                    </Collapse>
                </Panel>
            </Collapse>
        
        </Col>
    </Row>
      
  </div>
  </div>
  ); 
}

export default Colapse;
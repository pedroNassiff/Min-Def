import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card';


export default function SingleLegend({defOficNum,tel,email,img}) {
    return (
        <div>
            <h5>MIEMBROS</h5>
            <Accordion>
                <Card style={{background: "#FF695E", color:"#fff"}}>
                    <Card.Header >
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                           <p className="text-center" style={{fontFamily: "Baloo Da", fontSize:"25px", color:"#fff"}}>{defOficNum}</p>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                                 {/*--2do Contenedor
                            <img src={img} class="img-fluid mx-auto d-block" style={{height:"200px"}} alt=" responsive"/>---*/}
                        <p className="font-weight-normal">{tel}</p>
                        <p className="font-weight-normal">{email}</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            
        </div>
    )
}

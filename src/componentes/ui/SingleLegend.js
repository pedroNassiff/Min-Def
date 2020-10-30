import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'


export default function SingleLegend({defOficNum,tel,email,img}) {
    return (
        <div>
            <h5 className="titulo-card">
                Don MIEMBRO     
            </h5>
            <Accordion>
                <Card >
                    <Card.Header >
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                        <img src={img} class="img-fluid mx-auto d-block" style={{height:"200px", borderRadius: "100px", height:"6em", width:"6em", marginLeft: "16em", marginTop: "1em", objectFit: "cover"}} alt=" responsive"/>
                           <p className="text-center" style={{fontFamily: "Roboto", fontSize:"25px", marginBottom: "1em", marginTop:"1em"}}>{defOficNum}</p>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="overflow-auto" style={{maxHeight:'250px'}}>
                                 
                           
                        <p className="font-weight-normal">{tel}</p>
                        <p className="font-weight-normal">{email}</p>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            
        </div>
    )
}

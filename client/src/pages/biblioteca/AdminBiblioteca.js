import React from 'react'
import FileUpload from './FileUpload';
import { Container, Row, Col } from 'reactstrap';
import './BuscadorBiblioteca.scss'


const AdminBiblioteca = () => {
  return (
    <div className="container mt-4 container-pagina">
      <div>
        <Container>
          <Row >
            <Col>
              <FileUpload />
            </Col>
          </Row>
        </Container>


      </div>


    </div>
  )
}


export default AdminBiblioteca;


import React, { Fragment, useState } from 'react';
import axios from 'axios';

import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';

import Mensaje from './Mensaje';

const FileUpload = (props) => {
    const [file, setFile] = useState();
    const [filename, setFilename] = useState('Cargar archivo');
    const [uploadedFile, setUploadeddFile] = useState({});
    const [message, setMessage] = useState('');

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };
   
    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post('/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const { fileName, filePath } = res.data;

            setUploadeddFile({ fileName, filePath });

            setMessage('¡Archivo subido con éxito!');
        }catch(err) {
            if(err.response.status === 500) {
                setMessage('Hay bardo en el server');
            } else {
                setMessage(err.response.data.msg);
            }
        }
    }

    return (
        <Fragment>
            {message ? <Mensaje msg={message} /> : null }
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label for="exampleFile">Archivo</Label>
                        <Input type="file" name="file" id="exampleFile" onChange={onChange} />
                            <label className="custom-file-label" htmlFor='customFile'>
                               
                            </label>
                            <input type="submit" value="Subir" className="btn btn-primary btn-block mt-4"/>
                            {uploadedFile ? (
                                <Row className="mt-5">
                                    <Col className="m-auto">
                                        <h3 className="text-center">{uploadedFile.fileName}</h3>
                                        <file style={{width: '100%'}} src={uploadedFile.filePath} alt='' />
                                    </Col>
                                </Row>
                            ) : null}

                </FormGroup>
            </Form>
        </Fragment>
    )
}

export default FileUpload;
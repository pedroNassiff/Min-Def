import React, { Fragment, useState } from 'react';
import axios from 'axios';

import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';

import Mensaje from './Mensaje';
import AuthService from '../../services/ApiService'

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

        console.log('==========================================================');
        AuthService.upload(formData).then(
            data => {
                console.log('Data', data);
                if (data.ok) {
                    console.log('Data ok');

                }else{
                    console.log('Data mal');
                }
            },
            error => {
                //mensaje de error sacael el spiner 
            }
        );
        /* try {
            console.log('=================> 1');
            const res = await axios.post('http://localhost:5000/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    "Access-Control-Allow-Origin": "*"
                }
            });

            const { fileName, filePath } = res.data;
            console.log('=================> 2');
            setUploadeddFile({ fileName, filePath });
            console.log('=================> 3');
            setMessage('¡Archivo subido con éxito!');
            console.log('=================> 4');
        }catch(err) {
            console.log('=================> 5');
            if(err.response.status === 500) {
                console.log('=================> 6');
                setMessage('Hay bardo en el server');
            } else {
                console.log('=================> 7');
                setMessage(err.response.data.msg);
            }
        } */
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
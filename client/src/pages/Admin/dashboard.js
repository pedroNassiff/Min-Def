import React, { Fragment, useState } from 'react';
import axios from 'axios';
import { useHistory } from "react-router-dom";

import FileUpload from '../../pages/biblioteca/FileUpload';

// import AdminBiblioteca from '../../pages/biblioteca/AdminBiblioteca';
import Sidebar from './Sidebar';
import './css/ui.css';

import Mensaje from '../../pages/biblioteca/Mensaje';
import AuthService from "services/AuthService";

import { Form, FormGroup, Input, Row, Col, Container } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),

        },
    },
}));


const Dashboard = () => {
    const [file, setFile] = useState();
    const [filename, setFilename] = useState('Cargar archivo');
    const [uploadedFile, setUploadeddFile] = useState({});
    const [message, setMessage] = useState('');
    const history = useHistory();
    const classes = useStyles();

    const onChange = e => {
        setFile(e.target.files[0]);
        setFilename(e.target.files[0].name);
    };


    //state
    const [elemento, guardarElemento] = useState({
        nombre: '',
        categoria: [
            { asd: 'reglamentos' },
            { 2: 'resoluciones' },
            { 3: 'leyes' },
            { 4: 'legislaciones' },
            { 5: 'secretariaCivil' },
            { 6: 'secretariaPenal' },
        ],

    });
    const [noticias, guardarNoticias] = useState({
        img: '',
        title: '',
        description: '',
        meta: ''
    });
    const [usuarios, guardarUsuarios] = useState({
        name: '',
        role: '',
        last_name: '',
        email: '',
        password: ''
    });


    //extraer dato

    const { nombre, categoria, } = elemento;

    const { img, title, description, meta } = noticias;

    const { name, role, last_name, email, password } = usuarios;


    const onChangeElemento = e => {
        guardarElemento({
            ...elemento,
            [e.target.name]: e.target.value
        })
    }

    const onChangeUsuarios = e => {
        guardarUsuarios({
            ...usuarios,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitElemento = e => {
        e.preventDefault();


    }

    const onSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            const res = await axios.post('/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const { fileName, filePath } = res.data;

            setUploadeddFile({ fileName, filePath });

            setMessage('¡Archivo subido con éxito!');
        } catch (err) {
            if (err.response.status === 500) {
                setMessage('Hay bardo en el server');
            } else {
                setMessage(err.response.data.msg);
            }
        }
    }

    const onSubmitUsuarios = e => {
        e.preventDefault();

        AuthService.register(usuarios).then(
            (data) => {
                if (data.ok) {
                    history.push({
                        pathname: '/',
                        reload: true
                    });
                }
            },
            error => {
                //mensaje de error
            }
        );


    }


    return (

        <div className="container">


            <Fragment>
                <Container className="py-5 mt-5">
                    <h1>Noticias</h1>

                    <Row className="justify-content-center rowFormCenter">
                        <Col>
                        <Form
                        // className="formulario-nuevo-proyecto"
                        onSubmit={onSubmit}
                        // className={classes.root}
                        noValidate autoComplete="off"
                    >
                        {message ? <Mensaje msg={message} /> : null}
                            <FormGroup>
                                {/* <Label for="exampleFile">Archivo</Label> */}
                                {/* <label className="custom-file-label" htmlFor='customFile'>

                                </label> */}
                                <Row className="justify-content-center contentformInfo">
                                    <Col>
                                        <TextField
                                            type="text"
                                            className="input-text espacioForm"
                                            // placeholder="Titulo"
                                            name="title"
                                            value={title}
                                            onChange={onChangeElemento}
                                            id="standard-basic" label="Titulo"
                                        />

                                        <TextField
                                            type="text"
                                            className="input-text espacioForm"
                                            placeholder="Description"
                                            name="description"
                                            value={description}
                                            onChange={onChangeElemento}
                                            id="standard-basic" label="Description"

                                        />
                                        <TextField
                                            type="text espacioForm"
                                            className="input-text"
                                            placeholder="fecha"
                                            name="meta"
                                            value={meta}
                                            onChange={onChangeElemento}
                                            id="standard-basic" label="fecha"
                                        />

                                    </Col>
                                </Row>
                                <Row>
                                    <Input type="file" name="file" id="exampleFile" onChange={onChange} className="textInput" />

                                </Row>
                                <input type="submit" value="Subir" className="btn btn-primary btn-block mt-4 botonCheto" />
                                {uploadedFile ? (
                                    <Row className="mt-5">
                                        <Col className="m-auto">
                                            <h3 className="text-center">{uploadedFile.fileName}</h3>
                                            <file style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
                                        </Col>
                                    </Row>
                                ) : null}

                            </FormGroup>
                    </Form>
                        </Col>
                    </Row>
                    
                </Container>


                <h1>Usuarios</h1>
                <button
                    type="button"
                    className="btn btn-block btn-primario"
                >Nuevo usuario</button>

                <form
                    className="formulario-nuevo-proyecto"
                    onSubmit={onSubmitUsuarios}
                >

                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre"
                        name="name"
                        value={name}
                        onChange={onChangeUsuarios}
                    />

                    <input
                        type="text"
                        className="input-text"
                        placeholder="Rol"
                        name="role"
                        value={role}
                        onChange={onChangeUsuarios}
                    />
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Apellido"
                        name="last_name"
                        value={last_name}
                        onChange={onChangeUsuarios}
                    />
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={onChangeUsuarios}
                    />
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={onChangeUsuarios}
                    />
                    <button className="botonCheto" type="text">
                        Actualizar
                </button>
                </form>
                <h1>Biblioteca</h1>
                <button
                    type="button"
                    className="btn btn-block btn-primario"
                >Nuevo Archivo</button>

                <form
                    className="formulario-nuevo-proyecto"
                    onSubmit={onSubmitElemento}
                >
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre del archivo"
                        name="nombre"
                        value={nombre}
                        onChange={onChangeElemento}
                    />
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Categoria"
                        name="categoria"
                        value={categoria}
                        onChange={onChangeElemento}
                    />
                    {message ? <Mensaje msg={message} /> : null}
                    <Form onSubmit={onSubmit}>
                        <FormGroup>
                            {/* <Label for="exampleFile">Archivo</Label> */}
                            <Input type="file" name="file" id="exampleFile" onChange={onChange} className="textInput" />
                            <label className="custom-file-label" htmlFor='customFile'>

                            </label>
                            <input type="submit" value="Subir" className="btn btn-primary btn-block mt-4" />
                            {uploadedFile ? (
                                <Row className="mt-5">
                                    <Col className="m-auto">
                                        <h3 className="text-center">{uploadedFile.fileName}</h3>
                                        <file style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
                                    </Col>
                                </Row>
                            ) : null}

                        </FormGroup>
                    </Form>
                </form>




            </Fragment>
        </div>

    );
}

export default Dashboard;
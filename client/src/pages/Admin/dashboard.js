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
    const [biblioteca, guardarBiblioteca] = useState({
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
    const { img, title, description, meta } = noticias;
    const { name, role, last_name, email, password } = usuarios;
    const { nombre, categoria, } = biblioteca;


    const onChangeNoticias = e => {
        guardarNoticias({
            ...noticias,
            [e.target.name]: e.target.value
        })
    }


    const onChangeUsuarios = e => {
        guardarUsuarios({
            ...usuarios,
            [e.target.name]: e.target.value
        })
    }

    const onChangeBiblioteca = e => {
        guardarBiblioteca({
            ...biblioteca,
            [e.target.name]: e.target.value
        })
    }


    const onSubmitNoticas = e => {
        e.preventDefault();
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

    const onSubmitBiblioteca = async e => {
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

    return (

        <div className="container">


            <Fragment>
                <Container className="py-5 mt-5">
                    <h1>Noticias</h1>

                    <Row className="justify-content-center rowFormCenter">
                        <Col>
                            <Form
                                // className="formulario-nuevo-proyecto"
                                onSubmit={onSubmitNoticas}
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
                                                onChange={onChangeNoticias}
                                                id="standard-basic" label="Titulo"
                                            />

                                            <TextField
                                                type="text"
                                                className="input-text espacioForm"
                                                // placeholder="Description"
                                                name="description"
                                                value={description}
                                                onChange={onChangeNoticias}
                                                id="standard-basic" label="Description"

                                            />
                                            <TextField
                                                type="text "
                                                className="input-text espacioForm"
                                                // placeholder="fecha"
                                                name="meta"
                                                value={meta}
                                                onChange={onChangeNoticias}
                                                id="standard-basic" label="fecha"
                                            />

                                        </Col>
                                    </Row>
                                    <Row className="rowBtnUploadFile">
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

                <Container className="containerEspacio">
                    <h1>Usuarios</h1>

                    <Row className="justify-content-center rowFormCenter">
                        <Col>
                            <Form
                                className="formulario-nuevo-proyecto"
                                onSubmit={onSubmitUsuarios}
                            >
                                <Row>
                                    <Col>
                                        <TextField
                                            type="text"
                                            className="input-text espacioForm"
                                            // placeholder="Rol"
                                            name="role"
                                            value={role}
                                            onChange={onChangeUsuarios}
                                            id="standard-basic" label="Rol"
                                        />
                                        <TextField
                                            type="text"
                                            className="input-text espacioForm"
                                            // placeholder="Nombre"
                                            name="name"
                                            value={name}
                                            onChange={onChangeUsuarios}
                                            id="standard-basic" label="Nombre"
                                        />

                                        <TextField
                                            type="text"
                                            className="input-text espacioForm"
                                            // placeholder="Apellido"
                                            name="last_name"
                                            value={last_name}
                                            onChange={onChangeUsuarios}
                                            id="standard-basic" label="Apellido"
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <TextField
                                            type="text"
                                            className="input-text espacioForm"
                                            // placeholder="Email"
                                            name="email"
                                            value={email}
                                            onChange={onChangeUsuarios}
                                            id="standard-basic" label="Email"
                                        />
                                        <TextField
                                            type="text"
                                            className="input-text espacioForm"
                                            // placeholder="Password"
                                            name="password"
                                            value={password}
                                            onChange={onChangeUsuarios}
                                            id="standard-basic" label="Password"
                                        />
                                    </Col>
                                </Row>
                                <Row className="rowContene">
                                    <Col>
                                        <button className="botonCheto" type="text">
                                            Agregar
                                        </button>
                                    </Col>
                                </Row>

                            </Form>
                        </Col>
                    </Row>
                </Container>


                

                <Container className="containerEspacio">

                <h1>Biblioteca</h1>
                    <Row className="justify-content-center rowFormCenter">
                        <Col>
                            <Form
                                className="formulario-nuevo-proyecto"
                                onSubmit={onSubmitBiblioteca}
                            >
                                <Row>
                                    <Col>
                                        <FormGroup>
                                            <TextField
                                                type="text"
                                                className="input-text espacioForm"
                                                // placeholder="Nombre del archivo"
                                                name="nombre"
                                                value={nombre}
                                                onChange={onChangeBiblioteca}
                                                id="standard-basic" label="Nombre"
                                            />
                                            <TextField
                                                type="text"
                                                className="input-text espacioForm"
                                                // placeholder="Categoria"
                                                name="categoria"
                                                value={categoria}
                                                onChange={onChangeBiblioteca}
                                                id="standard-basic" label="Categoria"

                                            />

                                            <Row>
                                                <Col>
                                                    {message ? <Mensaje msg={message} /> : null}

                                                    {/* <Label for="exampleFile">Archivo</Label> */}

                                                    <Row className="rowBtnUploadFile">
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
                                                </Col>
                                            </Row>
                                        </FormGroup>
                                    </Col>
                                </Row>
                            </Form>
                        </Col>
                    </Row>
                </Container>



            </Fragment>
        </div>

    );
}

export default Dashboard;
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import 'componentes/auth/Login.scss'
import { useHistory } from "react-router-dom";

import AuthService from 'services/AuthService'

const NuevaCuenta = (props) => {
    const history = useHistory();
    //state para iniciar sesión

    const [usuario, guardarUsuario] = useState({
        username: '',
        email: '',
        role: '',
        password: '',
        confirmar: ''
    });

    //extraer de usuario

    const { username, email, role, password, confirmar } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })
    }

    //cuando el usuario quiere iniciar sesión
    const register = async e => {
        e.preventDefault();

        AuthService.register(usuario).then(
            (data) => {
                //vulve a donde estaba antes del logeo
                console.log(data);
                if(data.ok){
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
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Crear cuenta</h1>
                <form
                    onSubmit={register}
                >
                    <div className="campo-form">
                        <label htmlFor="username">Nombre</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Tu Nombre"
                            value={username}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="Role">Role</label>
                        <select value={role} name="role" id="role" onChange={onChange} required>
                            <option value="" disabled>
                                Seleccione una opcion
                            </option>
                            <option value={['user']}>Usuario</option>
                            <option value={['moderator']}>Moderador</option>
                            <option value={['admin']} disabled>ADMINISTRADOR</option>
                        </select>
                    </div>

                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar Password</label>
                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Repite tu password"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>



                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block"

                            value="Crear" />

                    </div>
                </form>

                <Link to={'/login'} className="enlace-cuenta">
                    Volver a iniciar sesión
                </Link>
            </div>
        </div>
    );
}

export default NuevaCuenta;
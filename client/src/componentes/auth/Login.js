import React, { useState } from 'react'
import 'componentes/auth/Login.scss'
import Api from 'services/AuthService'
import { notification } from 'antd'

const Login = () => {

    const [usuario, guardarUsuario] = useState({
        email: '',
        password: ''
    })

    const { email, password } = usuario;

    const onChange = e => {
        guardarUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        })

    }
    //Cuando el usuario quieren logearse
    const login = async e => {
        e.preventDefault()
        const result = await Api.login(usuario.email, usuario.password)
        if (result.message) {
            notification["error"]({
                message: result.message
            })
        } else {
            notification["success"]({
                message: "Login Correcto."
            })
            window.location.href = "/"
        }
    }

    return (
        <div className="form-usuario">
            <div className="contenedor-form">
                <h1>Iniciar Sesión</h1>
                <form
                    onSubmit={login}
                >
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
                        <label htmlFor="password">Contraseña</label>
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
                        <input type="submit" className="btn btn-primario btn-block"
                            value="Iniciar Sesión" />
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login

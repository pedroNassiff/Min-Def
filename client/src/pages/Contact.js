import React from 'react'

import './Contact.scss'
import { Button, Input } from 'antd';
import {
    UserOutlined,
    PhoneOutlined,
    MailOutlined,
    FileTextOutlined
  } from "@ant-design/icons";

export default function Contact() {
    return (
        <div className="mainContainer">
            <div className="titleContainer">
                <h1>Contacto</h1>
                <span>
                    Envienos un mensaje
                </span>
            </div>
            <div className="formContactoContainer">
               {/*  <div className="fromCatactoImg">
                    <img src={require("assets/img/sendemail.png")} alt="content" width="200px" height="auto" />
                </div> */}
                <div className="fromContacto">
                    <div className="fromContactoInputs">
                        <Input
                            className='fromContactoInput'
                            type="text"
                            placeholder="Nombre"
                            prefix={<UserOutlined />}
                        />
                        <Input
                            className='fromContactoInput'
                            type="text"
                            placeholder="Tel:"
                            prefix={<PhoneOutlined />}
                        />
                        <Input
                            className='fromContactoInput'
                            type="text"
                            placeholder="Mensaje"
                            prefix={<MailOutlined />}
                        />
                    </div>
                    <div className="fromContactoInputs">
                        <Input
                            className='fromContactoInput'
                            type="text"
                            placeholder="Mensaje"
                            prefix={<FileTextOutlined />}
                        />
                    </div>
                    <div className="fromContactoInputs">
                        <Button className='selectButton5'>Enviar</Button>
                    </div>
                </div>
            </div>
        </div>
    )
}
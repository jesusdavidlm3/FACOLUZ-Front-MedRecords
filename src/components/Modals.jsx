import { Modal, Form, Select, DatePicker, TimePicker, Input, Space, InputNumber, Button, Steps } from "antd";
import { useContext, useState, useEffect } from "react";
import { appContext } from "../context/appContext";
import * as lists from '../context/lists'
import React from 'react'
import { routerContext } from '../context/routerContext'

export const LogoutModal = ({open, onCancel}) => {

    const {setUserData, setLogged} = useContext(appContext)
    const {setView} = useContext(routerContext)

    const logout = () => {
        setUserData('')
        setLogged(false)
        setView('Login')
    }

    return(
        <Modal
            title='Cerrar sesion'
            open={open}
            onCancel={onCancel}
            footer={[
                <Button variant='solid' color='danger' onClick={logout} >Cerrar sesion</Button>,
                <Button onClick={onCancel} variant='text' >Cancelar</Button>
            ]}
        >
        </Modal>
    )
}

export const ConfirmSaveDateModal = ({open, onClose, onOk}) => {
    return(
        <Modal
            title="Esta seguro de guardar esta consulta"
            open={open}
            onClose={onClose}
            footer={[
                <Button variant="solid" color="danger" onClick={onClose}>Cancelar</Button>,
                <Button variant="solid" color="primary" onClick={onOk}>Guardar</Button>
            ]}
        >
            <h4>Una vez almacenados los datos no sera posible realizar cambios o modificaciones</h4>
        </Modal>
    )
}
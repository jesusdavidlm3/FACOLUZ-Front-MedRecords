import { Button, Form, Input, Select, Space, DatePicker, TimePicker } from 'antd'
import { useState } from 'react'
import React from 'react'

const OpenDate = ({info}) => {

    return(
        <div className="OpenDate">
            <h1 className='Titulo'>Agendar Cita</h1>
            <Form>
                <h2>Cedula: </h2>
                <Form.Item name='patientId'>
                    <Input.Search placeholder='Cedula del paciente'/>
                </Form.Item>
                <h2>Doctor: </h2>
                <Form.Item name='doctorId'>
                    <Select placeholder='Seleccione un doctor'/>
                </Form.Item>
                <Space.Compact id='dateLine'>
                    <h2>Fecha: </h2>
                    <Form.Item name='date'>
                        <DatePicker/>
                    </Form.Item>
                    <h2>Hora: </h2>
                    <Form.Item name='time'>
                        <TimePicker/>
                    </Form.Item>
                </Space.Compact>
                <Button className='Button' size={'large'} variant='solid' ><p className='invisible'>Agregar</p></Button>
            </Form>
        </div>
    )
}

/*
            <h2>Cedula: </h2>
            <Input.Search name='patientId' placeholder='Cedula del paciente'/>
            <h2>Doctor: </h2>
            <Select name='doctorId' placeholder='Seleccione un doctor'/>
            <h2>Fecha: </h2>
            <DatePicker name='date'/>
            <h2>Hora: </h2>
            <Input type='time' name='time'/>
            <Button className='Button' size={'large'} variant='solid' ><p className='invisible'>Agregar</p></Button> */
/*<Form>
                <h2>Cedula: </h2>
                <Form.Item name='patientId'>
                    <Input.Search placeholder='Cedula del paciente'/>
                </Form.Item>
                <h2>Doctor: </h2>
                <Form.Item name='doctorId'>
                    <Select placeholder='Seleccione un doctor'/>
                </Form.Item>
                <h2>Fecha:</h2>
                <Form.Item name='date'>
                    <DatePicker/>
                </Form.Item>
                <h2>Hora: </h2>
                <Form.Item name='time'>
                    <TimePicker/>
                </Form.Item>
                <Button className='Button' size={'large'} variant='solid' ><p className='invisible'>Agregar</p></Button>
            </Form> */
export default OpenDate
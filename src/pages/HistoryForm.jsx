import { Divider, Form, InputNumber, Input, Select, Checkbox, DatePicker, Space } from 'antd'
import React, { useState } from 'react';

let hasHistory = false;

let HistoryForm = () => {
    return (
    <div>
        <Divider> Formulario de Historial </Divider>
        <Form>
            <Space>
                <Form.Item label="Nombre">
                    <Input/>
                </Form.Item>
                <Form.Item label="Apellido">
                    <Input/>
                </Form.Item>
            </Space>
            <Form.Item label="Cedula">
                <InputNumber/>
            </Form.Item>
            <Form.Item label="Sexo">
                <Select/>
            </Form.Item>
            <Form.Item label="Fecha de nacimiento">
                <DatePicker/>
            </Form.Item>
            <Form.Item label="Lugar de nacimiento">
                <Input/>
            </Form.Item>
            <Form.Item label="Telefono">
                <Input/>
            </Form.Item><Form.Item label="Municipio">
                <Input/>
            </Form.Item><Form.Item label="Ciudad">
                <Input/>
            </Form.Item><Form.Item label="Direccion">
                <Input.TextArea/>
            </Form.Item>
            <Form.Item label="Tipo de Sangre">
                {/* TODO: Select */}
                <Input/>
            </Form.Item>
            <Form.Item label="Raza">
                {/* TODO: Select */}
                <Input/>
            </Form.Item>
            <Form.Item label="Religion">
                <Checkbox/>
            </Form.Item>
            <Form.Item label="Contacto de Emergencia">
                <Input/>
            </Form.Item>
            <Form.Item label="Telefono de Emergencia">
                <InputNumber/>
            </Form.Item>
        </Form>
    </div>
    );
}
export default HistoryForm;
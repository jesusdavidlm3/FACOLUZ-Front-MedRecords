import React, { useState, useContext } from "react";
import { Input, Form, Space, Button, Select, Divider, DatePicker } from "antd"

const CurrentDate = () => {
    return(
        <div className="CurrentDate">
            <Divider>Consulta</Divider>
            <Form>
                <Form.Item label="Motivo de la consulta:" layout="vertical">
                    <Input.TextArea/>
                </Form.Item>
                <Form.Item label="Enfermedad actual (Inicio, evolucion, caracteristicas):" layout="vertical">
                    <Input.TextArea />
                </Form.Item>
                <Form.Item label="Esta bajo tratamiento medico:">
                    <Select />
                </Form.Item>
                <Form.Item label='Cual y en que dosis y frecuencia?:' layout="vertical">    {/*Este debe ser dinamico*/}
                    <Input.TextArea/>
                </Form.Item>
                <Form.Item label="Fecha de su ultima consulta:">
                    <DatePicker />
                </Form.Item>
                <Form.Item label="Esta bajo tratamiento con bifosfonatos?:">
                    <Select />
                </Form.Item>
                <Form.Item label="Cual?:" layout="vertical">    {/*Este debe ser dinamico*/}
                    <Input.TextArea/>
                </Form.Item>
                <Form.Item label="Ah sido sometido a cirugia bajo anestesia general?:">
                    <Select />
                </Form.Item>
                <Form.Item label="Cual?:" layout="vertical">    {/*Este debe ser dinamico*/}
                    <Input.TextArea/>
                </Form.Item>
                <Form.Item label="Es alergico a algun alimento o medicamento?:">
                    <Select/>
                </Form.Item>
                <Form.Item label="Cual?: " layout="vertical">    {/*Este debe ser dinamico*/}
                    <Input.TextArea/>
                </Form.Item>
                <Space>
                    <Form.Item label="Ah tenido cancer?: ">
                        <Select/>
                    </Form.Item>
                    <Form.Item label="Tipo: ">
                        <Select/>
                    </Form.Item>
                    <Form.Item label="Tratamiento: ">
                        <Select/>
                    </Form.Item>
                    <Form.Item label="Localizacion: ">
                        <Select/>
                    </Form.Item>
                </Space>
                <Form.Item label="Año de diagnostico:">
                    <DatePicker mode="year"/>
                </Form.Item>
                <Form.Item label="Periodo Menstrual: ">
                    <Select/>
                </Form.Item>
                <Form.Item label="Esta en periodo de gestacion?: ">
                    <Select />
                </Form.Item>
                <Form.Item label="Semanas: ">
                    <Input/>
                </Form.Item>
                <Form.Item label="Controlado?: ">
                    <Select/>
                </Form.Item>
            </Form>
        </div>
    )
}

export default CurrentDate;
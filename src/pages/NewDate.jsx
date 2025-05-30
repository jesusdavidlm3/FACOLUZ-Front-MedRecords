import { Divider, Form, Input, Select, DatePicker, Space } from 'antd'
import React, { useState } from 'react';

const NewDate = () => {

    const [patientExist, setPatientExists] = useState(null)

    const verifyPatient = (e) => {
        console.log(`verificado: ${e}`)
    }

    return(
        <div className="NewDate">
            <Divider>Agendar cita</Divider>
            <Form>
                <Form.Item label="Cedula del Paciente">
                    <Input.Search onSearch={e => verifyPatient(e)}/>
                </Form.Item>
                {(patientExist != null && patientExist == false) && (<>
                    <h4 style={{color: 'tomato'}}>No se ha encontrado ningun paciente con esta cedula o codigo, registre al paciente</h4>
                    <Space>
                        <Form.Item label="Nombre">
                            <Input/>
                        </Form.Item>
                        <Form.Item label="Apellido">
                            <Input/>
                        </Form.Item>
                    </Space>
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
                </>)}
                {(patientExist != null && patientExist == true) && (<>
                    <h3>Nombre: </h3>
                    <h3>Edad: </h3>

                </>)}

                {patientExist != null && (<>
                    <Form.Item label="Doctor:">
                        <Select/>
                    </Form.Item>
                    <Space>
                        <Form.Item label="Fecha:">
                            <DatePicker/>
                        </Form.Item>
                        <Form.Item label="Hora:">
                            <DatePicker/>
                        </Form.Item>
                    </Space>
                </>)}
            </Form>
        </div>
    )
}

export default NewDate;
import { Modal, Form, Select, DatePicker, TimePicker, Input, Space, InputNumber } from "antd";
import { useContext, useState, useEffect } from "react";
import { appContext } from "../context/appContext";
import * as lists from '../context/lists'

export const MakeDateModal = ({onCancel, open}) => {
    return(
        <Modal destroyOnClose title='Agendar cita' onCancel={onCancel} open={open}>
            <Form>
                <Form.Item name='patientIdField'>
                    <Input.Search placeholder="Cedula del paciente"/>
                </Form.Item>
                <Form.Item name='doctorField'>
                    <Input.Search placeholder="Seleccione doctor"/>
                </Form.Item>
                <Form.Item name='dateField' label='Seleccione una fecha:'>
                    <DatePicker/>
                </Form.Item>
                <Form.Item name='timeField' label='Seleccione la hora:'>
                    <TimePicker/>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export const BasicPatientRegisterModal = ({onCancel, open}) => {

    const [selectedPatientType, setSelectedPatientType] = useState(false)
    const [cedulado, setCedulado] = useState(0)
    const [selectedIdType, setSelectedIdType] = useState(false)

    return(
        <Modal destroyOnClose title='Registrar paciente' open={open} oncancel={onCancel}>
            <Form>
                <Space.Compact>
                    <Form.Item name='nameField'>
                        <Input placeholder="Nombre"/>
                    </Form.Item>
                    <Form.Item name='lastnameField'>
                        <Input placeholder="Apellido"/>
                    </Form.Item>
                </Space.Compact>
                <Form.Item label='Tipo de paciente'>
                    <Select
                        options={lists.patientTypeList}
                        onChange={(e) => {
                            setSelectedPatientType(e)
                            if(e == 0){
                                setCedulado(false)
                            }else{
                                setCedulado(true)
                            }
                        }} />
                </Form.Item>
                <Space.Compact>
                    <Form.Item label='Identificacion'>
                        <Select options={lists.identificationList} />
                    </Form.Item>
                    <Form.Item>
                        <Input placeholder="Numero"/>
                    </Form.Item>
                </Space.Compact>
                <Form.Item label='Fecha de nacimiento'>
                    <DatePicker />
                </Form.Item>
                <Form.Item label='Sexo'>
                    <Select options= {lists.sexList} />
                </Form.Item>
                <Form.Item>
                    <Input placeholder='Direccion' />
                </Form.Item>
                <Form.Item label='Grado de instruccion'>
                    <Select options={lists.instructionGradeList} />
                </Form.Item>
                <Form.Item label= 'Raza'>
                    <Select options={lists.raceList} />
                </Form.Item>
                <h3>Contacto de emergencia</h3>
                <Form.Item>
                    <Input placeholder='Nombre'/>
                </Form.Item>       
                <Form.Item>
                    <Input placeholder='Telefono'/>
                </Form.Item>  
            </Form>
        </Modal>
    )
}

export const CreateHistoryModal = ({open, onCancel}) => {

    const [selectedPatientType, setSelectedPatientType] = useState(false)
    const [cedulado, setCedulado] = useState(0)
    const [selectedIdType, setSelectedIdType] = useState(false)

    return(
        <Modal destroyOnClose open={open} onCancel={onCancel} title='Crear historia'>
            <Form layout='vertical' >
                <Space.Compact style={{width: '100%', display: 'flex'}} >
                    <Form.Item name='nameField' style={{width: '50%'}} >
                        <Input placeholder='Nombre'/>
                    </Form.Item>
                    <Form.Item name='lastNameField' style={{width: '50%'}}>
                        <Input placeholder='Apellido'/>
                    </Form.Item>
                </Space.Compact>
                <Form.Item>
                    <Select
                        options={lists.patientTypeList}
                        placeholder='Tipo de paciente'
                        onChange={(e) => {
                            setSelectedPatientType(e);
                            if(e==0){
                                setCedulado(false)
                            }else{
                                setCedulado(true)
                            }
                        }} />
                </Form.Item>
                { selectedPatientType == 0 && 
                    <Form.Item>
                        <Select
                            placeholder='Tiene cedula?'
                            options={lists.trueFalseList}
                            onChange={(e) => {
                                setCedulado(e);
                                if(cedulado == false){
                                    setSelectedIdType(2)
                                }
                            }} />
                    </Form.Item>
                }
                <Space.Compact style={{width: '100%', display: 'flex'}} >
                    {cedulado ? (
                        <>
                            <Form.Item style={{width: '50%'}}>  {/*Truncar el arreglo para no mostrar la opcion de codigo*/}
                                <Select options={lists.identificationList.slice(0, 2)} placeholder='Tipo de identificacion' defaultValue='V'/>  
                            </Form.Item>
                            <Form.Item style={{width: '50%'}}>
                                <Input placeholder="Numero"/>
                            </Form.Item>
                        </>
                    ):(
                        <>
                            <Form.Item style={{width: '50%'}}>
                                <Select disabled={true} defaultValue='Codigo' />
                            </Form.Item>
                            <Form.Item style={{width: '50%'}}>
                                <InputNumber disabled={true} />
                            </Form.Item>
                        </>
                    )}
                </Space.Compact>
                <Form.Item>
                    <DatePicker placeholder='Fecha de nacimiento' style={{width: '100%'}}/>
                </Form.Item>
                <Form.Item>
                    <Select options= {lists.sexList} placeholder='Sexo' />
                </Form.Item>
                <Form.Item>
                    <Input.TextArea autoSize={true} placeholder='Direccion' />
                </Form.Item>
                { selectedPatientType == 0 ? (
                    <Form.Item>
                        <Select options={lists.instructionGradeList.slice(0, 4)} placeholder='Grado de instruccion' />
                    </Form.Item>
                ):(
                    <Form.Item>
                        <Select options={lists.instructionGradeList} placeholder='Grado de instruccion' />
                    </Form.Item>
                ) }
                
                <Space.Compact style={{width: '100%', display: 'flex'}} >
                    <Form.Item name='bloodType' style={{width: '50%'}}>
                        <Select options={lists.bloodTypeList} placeholder='tipo de sangre'/>   {/*Averiguar si puedo poner algo como un placeholder aqui*/}
                    </Form.Item>
                    <Form.Item name='proneToBleeding' style={{width: '50%'}}>
                        <Select options={lists.trueFalseList} placeholder='Propenso al sangrado'/>
                    </Form.Item>
                </Space.Compact>
                <Form.Item>
                    <Select options={lists.raceList} placeholder='Raza'/>
                </Form.Item>
                <Form.Item>
                    <Select options={lists.alimentsList} placeholder='Padecimientos' />   {/*Este debe ser de seleccion multiple*/}
                </Form.Item>       
                <Form.Item>
                    <Input.TextArea autoSize={true} placeholder='Otros padecimientos'/>
                </Form.Item>  
                <h4>Contacto de emergencia</h4>
                <Space.Compact style={{width: '100%', display: 'flex'}} >
                    <Form.Item style={{width: '100%'}} >
                        <Input placeholder='Nombre'/>
                    </Form.Item>       
                    <Form.Item style={{width: '100%'}} >
                        <Input placeholder='Telefono'/>
                    </Form.Item>       
                </Space.Compact>
            </Form>
        </Modal>
    )
}
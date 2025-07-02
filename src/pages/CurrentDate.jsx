import React, { useState, useContext } from "react";
import { Input, Form, Space, Button, Select, Divider, DatePicker, Card } from "antd"
import * as lists from "../context/lists"
import { dateContext } from "../context/dateContext";

const CurrentDate = () => {

    const {  consultationReason,setConsultationReason,currentDisease,setCurrentDisease,treatment,
            setTreatment,treatmentDescription,setTreatmentDescription,lastDate,setLastDate,
            bifosfonato,setBifosfonato,bifosfonatoDescription,setBifosfonatoDescription,
            anesthesia,setAnesthesia,anesthesiaDescription,setAnesthesiaDescription,alergy,
            setAlergy,alergyDescription,setAlergyDescription,cancer,setCancer,cancerType,setCancerType,
            cancerTreatment,setCancerTreatment,cancerLocation,setCancerLocation,cancerDate,setCancerDate,
            menstruation,setMenstruation,pregnacy,setPrenacy,pregnacyTime,setPregnacyTime,
            pregnacyControl,setPregnacyControl
        } = useContext(dateContext)

    return(
        <div className="CurrentDate">
            <Divider>Consulta</Divider>
            <Form layout="vertical">
                <Form.Item label="Motivo de la consulta:" layout="vertical">
                    <Input.TextArea autoSize value={consultationReason} onChange={e=>setConsultationReason(e)}/>
                </Form.Item>
                <Form.Item label="Enfermedad actual (Inicio, evolucion, caracteristicas):" layout="vertical">
                    <Input.TextArea autoSize value={currentDisease} onChange={e=>setCurrentDisease(e)}/>
                </Form.Item>
                <Form.Item label="Esta bajo tratamiento medico:">
                    <Select options={lists.listOfThree.slice(0,2)} onChange={e=>setTreatment(e)} value={treatment}/>
                </Form.Item>
                { treatment == 1 && <>
                    <Form.Item label='Cual y en que dosis y frecuencia?:' layout="vertical"> 
                        <Input.TextArea autoSize value={treatmentDescription} onChange={e=>setTreatmentDescription(e)}/>
                    </Form.Item>
                    <Form.Item label="Fecha de su ultima consulta:">
                        <DatePicker />
                    </Form.Item>
                </>}
                <Form.Item label="Esta bajo tratamiento con bifosfonatos?:">
                    <Select options={lists.listOfThree.slice(0,2)} value={bifosfonato} onChange={e=>setBifosfonato(e)}/>
                </Form.Item>
                { bifosfonato == 1 &&<>
                    <Form.Item label="Cual?:" layout="vertical"> 
                        <Input.TextArea autoSize value={bifosfonatoDescription} onChange={e=>setBifosfonatoDescription(e)}/>
                    </Form.Item>
                </> }
                <Form.Item label="Ah sido sometido a cirugia bajo anestesia general?:">
                    <Select options={lists.listOfThree.slice(0,2)} value={anesthesia} onChange={e=>setAnesthesia(e)}/>
                </Form.Item>
                { anesthesia == 1 && <>
                    <Form.Item label="Cual?:" layout="vertical"> 
                        <Input.TextArea autoSize value={anesthesiaDescription} onChange={e=>setAnesthesiaDescription(e)}/>
                    </Form.Item>
                </> }
                <Form.Item label="Es alergico a algun alimento o medicamento?:">
                    <Select options={lists.listOfThree.slice(0,2)} value={alergy} onChange={e=>setAlergy(e)}/>
                </Form.Item>
                { alergy == 1 && <>
                    <Form.Item label="Cual?: " layout="vertical">
                        <Input.TextArea autoSize value={alergyDescription} onChange={e=>setAlergyDescription(e)}/>
                    </Form.Item>
                </> }
                
                <Card>
                    <Space>
                        <Form.Item label="Ah tenido cancer?: ">
                            <Select options={lists.listOfThree.slice(0,2)} value={cancer} onChange={e=>setCancer(e)}/>
                        </Form.Item>
                        { cancer == 1 && <>
                            <Form.Item label="Tipo: ">
                                <Select/>
                            </Form.Item>
                            <Form.Item label="Tratamiento: ">
                                <Select/>
                            </Form.Item>
                            <Form.Item label="Localizacion: ">
                                <Select/>
                            </Form.Item>
                            <Form.Item label="Año de diagnostico:">
                                <DatePicker mode="year"/>
                            </Form.Item>
                        </> }
                    </Space>
                </Card>
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
                    <Select options={lists.listOfThree.slice(0,2)} value={pregnacyControl} onChange={e=>setPregnacyControl(e)}/>
                </Form.Item>
            </Form>
        </div>
    )
}

export default CurrentDate;
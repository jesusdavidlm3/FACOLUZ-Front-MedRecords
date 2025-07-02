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
            menstruation,setMenstruation,pregnacy,setPregnacy,pregnacyTime,setPregnacyTime,
            pregnacyControl,setPregnacyControl
        } = useContext(dateContext)

    return(
        <div className="CurrentDate">
            <Divider>Consulta</Divider>
            <Form layout="vertical" variant="filled" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <div className='cardsContainer'>
                    <Card>
                        <Form.Item label="Motivo de la consulta:" layout="vertical">
                            <Input.TextArea autoSize value={consultationReason} onChange={e=>setConsultationReason(e.target.value)}/>
                        </Form.Item>
                        <Form.Item label="Enfermedad actual (Inicio, evolucion, caracteristicas):" layout="vertical">
                            <Input.TextArea autoSize value={currentDisease} onChange={e=>setCurrentDisease(e.target.value)}/>
                        </Form.Item>
                    </Card>
                    <Card>
                        <Form.Item label="Esta bajo tratamiento medico:">
                            <Select options={lists.listOfThree.slice(0,2)} onChange={e=>setTreatment(e)} value={treatment}/>
                        </Form.Item>
                        <Form.Item label='Cual y en que dosis y frecuencia?:' layout="vertical"> 
                            <Input.TextArea disabled={treatment != 1} autoSize value={treatmentDescription} onChange={e=>setTreatmentDescription(e.target.value)}/>
                        </Form.Item>
                        <Form.Item label="Fecha de su ultima consulta:">
                            <DatePicker disabled={treatment != 1} />
                        </Form.Item>
                    </Card>
                    <Card>
                        <Form.Item label="Esta bajo tratamiento con bifosfonatos?:">
                            <Select options={lists.listOfThree.slice(0,2)} value={bifosfonato} onChange={e=>setBifosfonato(e)}/>
                        </Form.Item>
                        <Form.Item label="Cual?:" layout="vertical"> 
                            <Input.TextArea disabled={bifosfonato != 1} autoSize value={bifosfonatoDescription} onChange={e=>setBifosfonatoDescription(e.target.value)}/>
                        </Form.Item>
                    </Card>
                    <Card>
                        <Form.Item label="Ah sido sometido a cirugia bajo anestesia general?:">
                            <Select options={lists.listOfThree.slice(0,2)} value={anesthesia} onChange={e=>setAnesthesia(e)}/>
                        </Form.Item>
                        <Form.Item label="Cual?:" layout="vertical"> 
                            <Input.TextArea disabled={anesthesia != 1} autoSize value={anesthesiaDescription} onChange={e=>setAnesthesiaDescription(e.target.value)}/>
                        </Form.Item>
                    </Card>
                    <Card>
                        <Form.Item label="Es alergico a algun alimento o medicamento?:">
                            <Select options={lists.listOfThree.slice(0,2)} value={alergy} onChange={e=>setAlergy(e)}/>
                        </Form.Item>
                        <Form.Item label="Cual?: " layout="vertical">
                            <Input.TextArea disabled={alergy != 1} autoSize value={alergyDescription} onChange={e=>setAlergyDescription(e.target.value)}/>
                        </Form.Item>
                    </Card>
                    <Card>
                        <Form.Item label="Ah tenido cancer?: ">
                            <Select options={lists.listOfThree.slice(0,2)} value={cancer} onChange={e=>setCancer(e)}/>
                        </Form.Item>
                        <Form.Item label="Tipo: ">
                            <Select disabled={cancer !=1}/>
                        </Form.Item>
                        <Form.Item label="Tratamiento: ">
                            <Select disabled={cancer !=1}/>
                        </Form.Item>
                        <Form.Item label="Localizacion: ">
                            <Select disabled={cancer !=1}/>
                        </Form.Item>
                        <Form.Item label="Año de diagnostico:">
                            <DatePicker mode="year" disabled={cancer !=1}/>
                        </Form.Item>
                    </Card>
                    <Card>
                        <Form.Item label="Periodo Menstrual: ">
                            <Select options={lists.menstruationCicle} disabled={pregnacy == 1} value={menstruation} onChange={e=>setMenstruation(e)}/> {/*Desactivar tambien si el paciente es hombre*/}
                        </Form.Item>
                        <Form.Item label="Esta en periodo de gestacion?: ">
                            <Select options={lists.listOfThree.slice(0,2)} value={pregnacy} onChange={e=>{setPregnacy(e); if(e==1){setMenstruation(1)}}}/>
                        </Form.Item>
                        <Form.Item label="Semanas: ">
                            <Input disabled={pregnacy != 1}/>
                        </Form.Item>
                        <Form.Item label="Controlado?: ">
                            <Select disabled={pregnacy != 1} options={lists.listOfThree.slice(0,2)} value={pregnacyControl} onChange={e=>setPregnacyControl(e)}/>
                        </Form.Item>
                    </Card>
                </div>            
                
            </Form>
        </div>
    )
}

export default CurrentDate;
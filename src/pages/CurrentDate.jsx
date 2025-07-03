import React, { useState, useContext } from "react";
import { Input, Form, Space, Button, Select, Divider, DatePicker, Card, InputNumber } from "antd"
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
            pregnacyControl,setPregnacyControl,ailments, setAilments
        } = useContext(dateContext)

    return(
        <div className="CurrentDate">
            <Divider>Consulta</Divider>
            <Form layout="vertical" variant="outlined" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
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
                        <Form.Item label="Ah presentado alguna reaccion a la anestesia">
                            <Select options={lists.listOfThree}/>
                        </Form.Item>
                        <Form.Item label="Ah sido sometido a cirugia bajo anestesia general?:">
                            <Select options={lists.listOfThree.slice(0,2)} value={anesthesia} onChange={e=>setAnesthesia(e)}/>
                        </Form.Item>
                        <Form.Item label="Cual?:" layout="vertical"> 
                            <Input.TextArea disabled={anesthesia != 1} autoSize value={anesthesiaDescription} onChange={e=>setAnesthesiaDescription(e.target.value)}/>
                        </Form.Item>
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
                    <Card>
                        <Form.Item label="Antecedentes Medicos:">
                            <Select
                                options={lists.alimentsList}
                                mode="multiple"
                                onChange={e=>setAilments(e)}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                disabled={!ailments.includes(1)}
                                placeholder='Afeccion cardiovascular'
                                onChange={(e) => setcardiovascularAffection(e)}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                disabled={!ailments.includes(2)}
                                placeholder='Afeccion hematologica'
                                onChange={(e) => setHematologicalDisorders(e)}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                disabled={!ailments.includes(3)}
                                placeholder='Afeccion renal'
                                onChange={(e) => setKidneyDisease(e)}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                disabled={!ailments.includes(4)}
                                placeholder='Afeccion neurologica'
                                onChange={(e) => setNeurologicalAffection(e)}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                
                                placeholder='Afeccion hepatica'
                                onChange={(e) => setLiverConditions(e)}
                            />
                        </Form.Item>
                    </Card>
                    <Card>
                        <Form.Item label="Tension: ">
                            <Space.Compact>
                                <InputNumber controls={false} prefix="Sys: "/>
                                <InputNumber controls={false} prefix="Dia: "/>
                            </Space.Compact>
                        </Form.Item>
                        <Form.Item label="BPM: ">
                            <InputNumber controls={false}/>
                        </Form.Item>
                    </Card>
                    <Card title="Examen Fisico">
                        <Form.Item label="Cara:">
                            <Input/>
                        </Form.Item>
                        <Form.Item label="Ganglios:">
                            <Input/>
                        </Form.Item>
                        <Form.Item label="ATM:">
                            <Input/>
                        </Form.Item>
                        <Form.Item label="Musculos masticatorios:">
                            <Input/>
                        </Form.Item>
                    </Card>
                    <Card title="Examen Intraoral">
                        <Form.Item label="Labios:">
                            <Input/>
                        </Form.Item>
                        <Form.Item label="Mucosa Oral: ">
                            <Input/>
                        </Form.Item>
                        <Form.Item label="Paladar Duro: ">
                            <Input/>
                        </Form.Item>
                        <Form.Item label="Paladar Blando:">
                            <Input/>
                        </Form.Item>
                        <Form.Item label="Lengua:">
                            <Input/>
                        </Form.Item>
                        <Form.Item label="Piso de boca:">
                            <Input/>
                        </Form.Item>
                        <Form.Item label="Glandulas salivales:">
                            <Input/>
                        </Form.Item>
                    </Card>
                    <Card title="Evaluacion de encias">
                        <Form.Item label="Color">
                            <Input />
                        </Form.Item>
                        <Form.Item label="">
                            <Input />
                        </Form.Item>
                        <Form.Item label="">
                            <Input />
                        </Form.Item>
                        <Form.Item label="">
                            <Input />
                        </Form.Item>
                        <Form.Item label="">
                            <Input />
                        </Form.Item>
                        <Form.Item label="">
                            <Input />
                        </Form.Item>
                        <Form.Item label="">
                            <Input />
                        </Form.Item>
                        <Form.Item label="">
                            <Input />
                        </Form.Item>
                    </Card>
                    <Card>
                        <Form.Item label="Pronostico:">
                            <Input.TextArea/>
                        </Form.Item>
                        <Form.Item label="Se considera paciente de alto riesgo?">
                            <Select options={lists.listOfThree.slice(0,2)}/>
                        </Form.Item>
                    </Card>
                </div>            
            </Form>
        </div>
    )
}

export default CurrentDate;
import React, { useState, useContext } from "react";
import { Input, Form, Space, Button, Select, Divider, DatePicker, Card, InputNumber } from "antd"
import * as lists from "../context/lists"
import { dateContext } from "../context/dateContext";
import { ConfirmSaveDateModal } from "../components/Modals";

const CurrentDate = () => {

    const {  consultationReason,setConsultationReason,currentDisease,setCurrentDisease,treatment,
            setTreatment,treatmentDescription,setTreatmentDescription,lastDate,setLastDate,
            bifosfonato,setBifosfonato,bifosfonatoDescription,setBifosfonatoDescription,
            anesthesia,setAnesthesia,anesthesiaDescription,setAnesthesiaDescription,alergy,
            setAlergy,alergyDescription,setAlergyDescription,cancer,setCancer,cancerType,setCancerType,
            cancerTreatment,setCancerTreatment,cancerLocation,setCancerLocation,cancerDate,setCancerDate,
            menstruation,setMenstruation,pregnacy,setPregnacy,pregnacyTime,setPregnacyTime,
            pregnacyControl,setPregnacyControl,ailments, setAilments,bloodType,setBloodType,
            proneToBleeding,setProneToBleeding,height, setHeight, weight, setWeight,
            complementaryTests,setComplementaryTests,cardioAffection,setCardiopAffection,hematoAffection,
            setHematoAffection,renalAffection, setRenalAffection,neuroAffection, setNeuroAffection,
            hepaticAffection,setHepaticAffection,sys,setSys,dia,setDia,bpm,setBpm,temp,setTemp,gangliosTest,
            setGangliosTest,faceTest,setFaceTest,atmTest,setAtmTest,mascMusclesTest,setMascMusclesTest,lipsTest,
            setLipsTest,mucouseTest,setMucouseTest,hardPalateTest,setHardPalateTest,softPalateTest,setSoftpalateTest,
            toungueTest,setToungueTest,mouthFloorTest,setMouthFloorTest,spitGlandTest,setSpitGlandTest
        } = useContext(dateContext)

    const [confirmModal, setConfirmModal] = useState(false)

    const sendData = async() => {
        console.log("enviando")
    }

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
                        <Form.Item label="Tipo de sangre: ">
                            <Select
                                options={lists.bloodTypeList}
                                value={bloodType}
                                onChange={e=>setBloodType(e)}
                            />
                        </Form.Item>
                        <Form.Item label="Es propenso al sangrado?: ">
                            <Select 
                                value={proneToBleeding}
                                options={lists.listOfThree}
                                onChange={e=>setProneToBleeding(e)}
                            />
                        </Form.Item>
                        <Form.Item label="Estudios complementarios: ">
                            <Input.TextArea
                                value={complementaryTests}
                                onChange={e=>setComplementaryTests(e.target.value)}
                                autoSize
                            />
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
                        <Form.Item label="Ah presentado reacciones a la anestesia?:">
                            <Select options={lists.listOfThree} value={anesthesia} onChange={e=>setAnesthesia(e)}/>
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
                            <Input disabled={cancer !=1} value={cancerType} onChange={e=>setCancerType(e.target.value)}/>
                        </Form.Item>
                        <Form.Item label="Tratamiento: ">
                            <Input disabled={cancer !=1} value={cancerTreatment} onChange={e=>setCancerTreatment(e.target.value)}/>
                        </Form.Item>
                        <Form.Item label="Localizacion: ">
                            <Input disabled={cancer !=1} value={cancerLocation} onChange={e=>setCancerLocation(e.target.value)}/>
                        </Form.Item>
                        <Form.Item label="Año de diagnostico:">
                            <DatePicker mode="year" disabled={cancer !=1} value={cancerDate} onChange={(a,b)=>setCancerDate(a)}/>
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
                            <InputNumber controls={false} disabled={pregnacy != 1} value={pregnacyTime} onChange={e=>setPregnacyTime(e.target.value)}/>
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
                                styles={{maxWidth: '30vw'}}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                disabled={!ailments.includes(1)}
                                placeholder='Afeccion cardiovascular'
                                value={cardioAffection}
                                onChange={(e) => setCardiopAffection(e)}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                disabled={!ailments.includes(2)}
                                placeholder='Afeccion hematologica'
                                value={hematoAffection}
                                onChange={(e) => setHematoAffection(e)}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                disabled={!ailments.includes(3)}
                                placeholder='Afeccion renal'
                                value={renalAffection}
                                onChange={(e) => setRenalAffection(e)}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                disabled={!ailments.includes(4)}
                                placeholder='Afeccion neurologica'
                                value={neuroAffection}
                                onChange={(e) => setNeuroAffection(e)}
                            />
                        </Form.Item>
                        <Form.Item>
                            <Input
                                placeholder='Afeccion hepatica'
                                value={hepaticAffection}
                                onChange={(e) => setHepaticAffection(e)}
                            />
                        </Form.Item>
                    </Card>
                    <Card>
                        <Form.Item label="Tension: ">
                            <Space.Compact>
                                <InputNumber
                                    controls={false}
                                    prefix="Sys: "
                                    value={sys}
                                    onChange={e=>setSys(e.target.value)}
                                />
                                <InputNumber
                                    controls={false}
                                    prefix="Dia: "
                                    value={dia}
                                    onChange={e=>setDia(e.target.value)}
                                />
                            </Space.Compact>
                        </Form.Item>
                        <Form.Item label="BPM: ">
                            <InputNumber
                                controls={false}
                                value={bpm}
                                onChange={e=>setBpm(e)}
                                suffix="BPM."
                            />
                        </Form.Item>
                        <Space.Compact>
                            <Form.Item label="Peso:">
                                <InputNumber
                                    controls={false}
                                    value={weight}
                                    onChange={e=>setWeight(e)}
                                    suffix={"Kg."}
                                />
                            </Form.Item>
                            <Form.Item label="Altura:">
                                <InputNumber
                                    controls={false}
                                    value={height}
                                    onChange={e=>setHeight(e)}
                                    suffix={"cm"}
                                />
                            </Form.Item>
                            <Form.Item label="Temperatura: ">
                                <InputNumber
                                    controls={false}
                                    value={temp}
                                    onChange={e=>setTemp(e.target.value)}
                                />
                            </Form.Item>
                        </Space.Compact>
                    </Card>
                    <Card title="Examen Fisico">
                        <Form.Item label="Cara:">
                            <Input value={faceTest} onChange={e=>setFaceTest(e.target.value)}/>
                        </Form.Item>
                        <Form.Item label="Ganglios:">
                            <Input value={gangliosTest} onChange={e=>setGangliosTest(e.target.value)}/>
                        </Form.Item>
                        <Form.Item label="ATM:">
                            <Input value={atmTest} onChange={e=>setAtmTest(e.target.value)}/>
                        </Form.Item>
                        <Form.Item label="Musculos masticatorios:">
                            <Input value={mascMusclesTest} onChange={e=>setMascMusclesTest(e.target.value)}/>
                        </Form.Item>
                    </Card>
                    <Card title="Examen Intraoral">
                        <Space align="start">
                            <Space direction="vertical">
                                <Form.Item label="Labios:">
                                    <Input
                                        value={lipsTest}
                                        onChange={e=>setLipsTest(e.target.value)}
                                    />
                                </Form.Item>
                                <Form.Item label="Mucosa Oral: ">
                                    <Input
                                        value={mucouseTest}
                                        onChange={e=>setMucouseTest(e.target.value)}
                                    />
                                </Form.Item>
                                <Form.Item label="Paladar Duro: ">
                                    <Input
                                        value={hardPalateTest}
                                        onChange={e=>setHardPalateTest(e.target.value)}
                                    />
                                </Form.Item>
                                <Form.Item label="Paladar Blando:">
                                    <Input
                                        value={softPalateTest}
                                        onChange={e=>setSoftpalateTest(e.target.value)}
                                    />
                                </Form.Item>
                            </Space>
                            <Space direction="vertical">
                                <Form.Item label="Lengua:">
                                    <Input
                                        value={toungueTest}
                                        onChange={e=>setToungueTest(e.target.value)}
                                    />
                                </Form.Item>
                                <Form.Item label="Piso de boca:">
                                    <Input
                                        value={mouthFloorTest}
                                        onChange={e=>setMouthFloorTest(e.target.value)}
                                    />
                                </Form.Item>
                                <Form.Item label="Glandulas salivales:">
                                    <Input
                                        value={spitGlandTest}
                                        onChange={e=>setSpitGlandTest(e.target.value)}
                                    />
                                </Form.Item>
                            </Space>
                        </Space>
                    </Card>
                    <Card title="Coloracion de encias">
                        <Form.Item label="Color:">
                            <Select options={lists.gumColor}/>
                        </Form.Item>
                        <Form.Item label="Area:">
                            <Select options={lists.gumEvaluationArea} />
                        </Form.Item>
                        <Form.Item label="Ubicacion">
                            <Select options={lists.gumEvaluationLocation} />
                        </Form.Item>
                        <Form.Item label="Mas acentuado en:">
                            <Input />
                        </Form.Item>
                    </Card>
                    <Card title="Tamano de las encias">
                        <Form.Item label="Agrandamiento:">
                            <Select options={lists.gumEnlargement}/>
                        </Form.Item>
                        <Form.Item label="Area:">
                            <Select options={lists.gumEvaluationArea} />
                        </Form.Item>
                        <Form.Item label="Ubicacion">
                            <Select options={lists.gumEvaluationLocation} />
                        </Form.Item>
                        <Form.Item label="Mas acentuado en:">
                            <Input />
                        </Form.Item>
                    </Card>
                    <Card title="Consistencia de las encias">
                        <Form.Item label="Consitencia:">
                            <Select options={lists.gumConsistency}/>
                        </Form.Item>
                        <Form.Item label="Ubicacion">
                            <Select options={lists.gumEvaluationLocation} />
                        </Form.Item>
                        <Form.Item label="Mas acentuado en:">
                            <Input />
                        </Form.Item>
                    </Card>
                    <Card title="Posicion de las encias">
                        <Form.Item label="posicion:">
                            <Select options={lists.gumPosition}/>
                        </Form.Item>
                        <Form.Item label="Ubicacion">
                            <Select options={lists.gumEvaluationLocation} />
                        </Form.Item>
                        <Form.Item label="Mas acentuado en:">
                            <Input />
                        </Form.Item>
                    </Card>
                    <Card title="Forma de las encias">
                        <Form.Item label="Forma:">
                            <Select options={lists.gumForm}/>
                        </Form.Item>
                        <Form.Item label="Ubicacion">
                            <Select options={lists.gumEvaluationLocation} />
                        </Form.Item>
                        <Form.Item label="Mas acentuado en:">
                            <Input />
                        </Form.Item>
                    </Card>
                    <Card>
                        <Form.Item label="Pronostico:">
                            <Input.TextArea/>
                        </Form.Item>
                        <Form.Item label="Tratamiento: ">
                            <Input.TextArea />
                        </Form.Item>
                    </Card>
                </div>         
                <Button
                    htmlType="submit"
                    onClick={setConfirmModal(true)}
                    variant="solid"
                    color="primary"
                >
                    Guardar
                </Button>
            </Form>
            <ConfirmSaveDateModal 
                onClose={()=>setConfirmModal(false)}
                open={confirmModal}
                onOk={()=>sendData}
            />
        </div>
    )
}

export default CurrentDate;
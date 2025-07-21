import React, { useContext } from "react";
import { Divider, List, Space } from 'antd'
import { appContext } from "../context/appContext";
import { getAge } from '../functions/getAge'
import { getDate } from '../functions/formatDateTime'
import { searchOnList, ailmentsList } from "../context/lists";

const History = () => {

    const { attending, historyData } = useContext(appContext)

    return(
        <div className="History">
            <Divider><h1>Historia Medica</h1></Divider>
            { attending ? (<>
                <Space direction="horizontal" style={{display: 'flex', gap: '10vw'}}>
                    <Space direction="vertical">
                        <h4>Nombre: <span>{ historyData.name } { historyData.lastname }</span></h4>

                        { historyData.patientIdentificacion == null ? (
                            <h4>Codigo: <span>{historyData.patientCode}</span></h4>
                        ):(
                            <h4>Cedula: <span>{historyData.patientIdentificacion}</span></h4>
                        ) }

                        <h4>Fecha de nacimiento: <span>{getDate(historyData.birthDate)} ({getAge(historyData.birthDate)} años)</span></h4>
                        <h4>Sexo: <span>{ historyData.sex }</span></h4>
                        <h4>Raza: <span>{ historyData.race }</span></h4>
                        { historyData.ethnicity != null && <h4>Etnia: <span>{historyData.ethnicity}</span></h4> }
                        <h4>Lugar de nacimiento: <span>{ historyData.birthPlace }</span></h4>
                        <h4>Direccion: <span>{ historyData.address }</span></h4>
                        <h4><span>{historyData.addressState} {historyData.addressMunicipality} {historyData.addressCity}</span></h4>
                        { !historyData.firstDate && (<h4>Tipo de sangre: <span>{historyData.bloodType}</span></h4>)}
                        
                        
                    </Space>

                    <Space direction="vertical">
                        { !historyData.firstDate && (<>
                            {JSON.parse(historyData.ailments).ailments.length > 0 ? (
                                <h4>Padecimientos: <span>{JSON.parse(historyData.ailments).ailments.map(item => `${searchOnList(ailmentsList, item)}, `)}</span></h4>
                            ):(
                                <h4>Padecimientos: <span>Ninguno</span></h4>
                            ) }

                            {historyData.ailments.cardio != null && <h4>
                                Afeccion Cardiologica: <span>{historyData.ailments.cardio}</span>
                            </h4>}

                            {historyData.ailments.hematological != null && <h4>
                                Afeccion Hematologica: <span>{historyData.ailments.hematological}</span>
                            </h4>}

                            {historyData.ailments.renal != null && <h4>
                                Afeccion Renal: <span>{historyData.ailments.renal}</span>
                            </h4>}

                            {historyData.ailments.neuro != null && <h4>
                                Afeccion Neurologica: <span>{historyData.ailments.neuro}</span>
                            </h4>}

                            {historyData.ailments.hepatic != null && <h4>
                                Afeccion Hepatica: <span>{historyData.ailments.hepatic}</span>
                            </h4>}

                            <h4>Propenso al sangrado: {historyData.proneToBleeding}</h4>

                        </>)}
                    </Space>

                    <Space direction="vertical">
                        { getAge(historyData.birthDate) < 18 ? (<>    {/*Se muestra si el paciente es menor a 18 años*/}
                            <h4>Estudia: <span>{historyData.currentStudying}</span></h4>
                            <h4>Nombre del representante: <span>{historyData.representativeName}</span></h4>
                            <h4>Cedula del representante: <span>{historyData.representativeIdentification}</span></h4>
                            <h4>Telefono del representante: <span>{historyData.representativePhone}</span></h4>
                            <h4>Tipo de vivienda: <span>{historyData.homeOwnership}</span></h4>
                            <h4>Carga familiar del representante: <span>{historyData.representativeFamilyBurden}</span></h4>
                            <h4>El representante trabaja actualmente: <span>{historyData.representativeWorking}</span></h4>
                            { historyData.representativeWorking == null ? (
                                <h4>Trabaja: <span>No</span></h4>
                            ):(<>
                                <h4>Trabaja: <span>Si</span></h4>
                                <h4>Ocupacion: <span>{historyData.representativeWorkType}</span></h4>
                                <h4>Carga Familiar: <span>{historyData.representativeFamilyburden}</span></h4>
                                <h4>Tipo de vivienda: <span>{historyData.homeOwnership}</span></h4>
                            </>) }
                        </>):(<>                                        {/*Se muestra si el paciente es Mayor a 18 años*/}
                            { historyData.currentWorking == null ? (
                                <h4>trabaja: <span>No</span></h4>
                            ):(<>
                                <h4>Trabaja: <span>Si</span></h4>
                                <h4>Ocupacion: <span>{historyData.workType}</span></h4>
                                <h4>Carga Familiar: <span>{historyData.familyBurden}</span></h4>
                                <h4>Tipo de vivienda: <span>{historyData.homeOwnership}</span></h4>
                            </>) }
                        </>) }
                    </Space>
                </Space>

                <Divider><h1>Contactos</h1></Divider>
                <h4>En caso de emergencias: <span>{historyData.emergencyName} ({historyData.emergencyRelationship}): {historyData.emergencyPhone}</span></h4>
                { historyData.companionPhone != null && (<>
                    <h4>Acompañante habitual: <span>{historyData.companionName} ({historyData.companionRelationship}): {historyData.companionPhone}</span></h4>
                </>)}

                { !historyData.firstDate && <>
                    <Divider><h1>Registro de consultas</h1></Divider>
                    <List bordered className="mainList" style={{width: '75%'}} size="small">
                        { historyData.consultationsList.map(item => (<List.Item key={item.id} className="listItem">
                            <h2>Consulta fecha: {getDate(item.dateTime)}</h2>
                        </List.Item>)) }
                    </List>
                </> }
                
            </>):(<>
                <h1>No esta atendiendo a nadie en este momento.</h1>
                <h3>Revise su lista de citas para comenzar a atender a un paciente.</h3>
            </>) }

        </div>
    )
}

export default History;
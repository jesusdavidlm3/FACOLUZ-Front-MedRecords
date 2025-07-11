import React, { useContext } from "react";
import { Divider } from 'antd'
import { appContext } from "../context/appContext";
import { getAge } from '../functions/getAge'
import { getDate } from '../functions/formatDateTime'

const History = () => {

    const { attending, historyData } = useContext(appContext)

    return(
        <div className="History">
            <Divider><h1>Historia Medica</h1></Divider>
            { attending ? (<>
                { historyData.firstDate && <><h4>Es la primera cita de este paciente</h4><h4>Debe registrar algunos campos</h4></> }
                <h3>Nombre: { historyData.name } { historyData.lastname }</h3>
                { historyData.patientIdentificacion == null ? (
                    <h3>Codigo: {historyData.patientCode}</h3>
                ):(
                    <h3>Cedula: {historyData.patientIdentificacion}</h3>
                ) }
                <h3>{`Fecha de nacimiento: ${getDate(historyData.birthDate)} (${getAge(historyData.birthDate)} años)`}</h3>
                <h3>Sexo: { historyData.sex }</h3>
                <h3>Raza: { historyData.race }</h3>
                { historyData.ethnicity != null && <h3>Etnia: {historyData.ethnicity}</h3> }
                <h3>Lugar de nacimiento: { historyData.birthPlace }</h3>
                <h3>Direccion: { historyData.address }</h3>

                { getAge(historyData.birthDate) < 18 ? (<>    {/*Se muestra si el paciente es menor a 18 años*/}
                    <h3>Estudia: {historyData.currentStudying}</h3>
                    <h3>Nombre del representante: {historyData.representativeName}</h3>
                    <h3>Cedula del representante: {historyData.representativeIdentification}</h3>
                    <h3>Telefono del representante: {historyData.representativePhone}</h3>
                    <h3>Tipo de vivienda: {historyData.homeOwnership}</h3>
                    <h3>Carga familiar del representante: {historyData.representativeFamilyBurden}</h3>
                    <h3>El representante trabaja actualmente: {historydata.representativeWorking}</h3>
                    { historyData.representativeWorking == null ? (
                        <h3>Trabaja: No</h3>
                    ):(<>
                        <h3>Trabaja: Si</h3>
                        <h3>Ocupacion: {historyData.representativeWorkType}</h3>
                        <h3>Carga Familiar: {historyData.representativeFamilyburden}</h3>
                        <h3>Tipo de vivienda: {historyData.homeOwnership}</h3>
                    </>) }
                </>):(<>                                        {/*Se muestra si el paciente es Mayor a 18 años*/}
                    { historyData.currentWorking == null ? (
                        <h3>trabaja: No</h3>
                    ):(<>
                        <h3>Trabaja: Si</h3>
                        <h3>Ocupacion: {historyData.workType}</h3>
                        <h3>Carga Familiar: {historyData.familyBurden}</h3>
                        <h3>Tipo de vivienda: {historyData.homeOwnership}</h3>
                    </>) }
                </>) }

                <h3>{historyData.addressState} {historyData.addressMunicipality} {historyData.addressCity}</h3>

                { historyData.firstDate ? (
                    <h3>Tipo de sangre: Es la primera cita de este paciente</h3>
                ):(
                    <h3>Tipo de sangre: {historyData.bloodType}</h3>
                ) }

                { historyData.firstDate ? (<>
                    <h3>Padecimientos: Es la primera cita de este paciente</h3>
                </>):(
                    historyData.ailments.length > 0 ? (
                        <h3>Padecimientos: {historyData.ailments.map(item => `${item}, `)}</h3>
                    ):(
                        <h3>Padecimientos: Ninguno</h3>
                    ) 
                ) }

                <Divider>Contacto de emergencia</Divider>
                <h3>Nombre: {historyData.emergencyName}</h3>
                <h3>Telefono: {historyData.emergencyPhone}</h3>
                <h3>Relacion: {historyData.emergencyRelationship}</h3>

                { historyData.companionPhone != null && (<>
                    <Divider>Acompañante habitual</Divider>
                    <h3>Nombre: {historyData.companionName}</h3>
                    <h3>Telefono: {historyData.companionPhone}</h3>
                    <h3>Relacion: {historyData.companionRelationship}</h3>
                </>)}
                
            </>):(<>
                <h1>No esta atendiendo a nadie en este momento.</h1>
                <h3>Revise su lista de citas para comenzar a atender a un paciente.</h3>
            </>) }

        </div>
    )
}

export default History;
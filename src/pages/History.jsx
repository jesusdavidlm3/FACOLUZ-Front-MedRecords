import React, { useContext } from "react";
import { historyContext } from '../context/historyContext'
import { Divider } from 'antd'

const History = () => {

    const { historyData } = useContext(historyContext)

    return(
        <div className="history">
            <Divider>Historia Medica</Divider>
            <h3>Nombre: { historyData.name }</h3>
            { historyData.id == null ? (
                <h3>Codigo: {historyData.patientCode}</h3>
            ):(
                <h3>Cedula: {historyData.patientId}</h3>
            ) }
            <h3>{`Fecha de nacimiento: ${historyData.dateOfBirth} (${getAge(historyData.dateOfBirth)} años)`}</h3>
            <h3>Sexo: { historyData.sex }</h3>
            <h3>Raza: { historyData.race }</h3>
            { historyData.ethnicity != null && <h3>Etnia: {historyData.ethnicity}</h3> }
            <h3>Lugar de nacimiento: { historyData.birthPlace }</h3>
            <h3>Direccion: { historyData.address }</h3>

            { getAge(historyData.dateOfBirth) < 18 ? (<>    {/*Se muestra si el paciente es menor a 18 años*/}
                <h3>Estudia: </h3>
                <h3>Nombre del representante: </h3>
                <h3>Cedula del representante: </h3>
                <h3>Telefono del representante: </h3>
                <h3>Tipo de vivienda: </h3>
                <h3>Carga familiar del representante: </h3>
                <h3>El representante trabaja actualmente: </h3>
                { historyData.representativeWorking == null ? (
                    <h3>Trabaja: No</h3>
                ):(<>
                    <h3>Trabaja: Si</h3>
                    <h3>Ocupacion: </h3>
                    <h3>Carga Familiar: </h3>
                    <h3>Tipo de vivienda: </h3>
                </>) }
            </>):(<>                                        {/*Se muestra si el paciente es Mayor a 18 años*/}
                { historyData.currentWorking == null ? (
                    <h3>trabaja: No</h3>
                ):(<>
                    <h3>Trabaja: Si</h3>
                    <h3>Ocupacion: </h3>
                    <h3>Carga Familiar: </h3>
                    <h3>Tipo de vivienda: </h3>
                </>) }
            </>) }

            <h3>{historyData.addressState} {historyData.addressMunicipality} {historyData.addressCity}</h3>
            <h3>Tipo de sangre: {historyData.bloodType}</h3>
            { historyData.ailments.length > 0 ? (
                <h3>Padecimientos: {historyData.ailments.map(item => `${item}, `)}</h3>
            ):(
                <h3>Padecimientos: Ninguno</h3>
            ) }

            <Divider>Contacto de emergencia</Divider>
            <h3>Nombre: {historyData.emergencyName}</h3>
            <h3>Telefono: {historyData.emergencyPhone}</h3>
            <h3>Relacion: {historyData.emergencyRelationship}</h3>

            <Divider>Acompañante habitual</Divider>
            <h3>Nombre: {historyData.companionName}</h3>
            <h3>Telefono: {historyData.companionPhone}</h3>
            <h3>Relacion: {historyData.companionRelationship}</h3>
        </div>
    )
}

export default History;
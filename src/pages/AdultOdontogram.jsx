import React, { useContext } from 'react'
import { Divider, List, Space } from 'antd'
import { appContext } from '../context/appContext'
import { } from '../context/lists'
import DentalDiagram from '../components/DentalDiagram/DentalDiagram'

const AdultOdontogram = () => {
    const { attending, historyData } = useContext(appContext)
    return(
        <div className='AdultOdontogram'>
            <Divider><h1>Odontograma Adulto</h1></Divider>
            { attending ? (<><DentalDiagram /></>) : (<>
                <h1>No esta atendiendo a nadie en este momento.</h1>
                <h3>Revise su lista de citas para comenzar a atender a un paciente.</h3>
            </>) }
        </div>
    )
}

export default AdultOdontogram;

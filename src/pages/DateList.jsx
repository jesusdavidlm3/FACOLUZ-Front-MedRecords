import { Input, DatePicker, Button, Tooltip, List, Divider } from 'antd'
import {AuditOutlined} from '@ant-design/icons'
import React, { useState, useEffect, useContext } from 'react'
import { getDatesList, getHistory } from '../client/client'
import { appContext } from '../context/appContext'
import { routerContext } from '../context/routerContext'
import { getDate, getTime } from '../functions/formatDateTime'
import * as lists from '../context/lists'

const DateList = () => {

    const { setHistoryData, setCurrentDate, setAttending, attending, messageApi, contextHolder } = useContext(appContext)
    const { setView } = useContext(routerContext)

    useEffect(() => {
        getInfo()
    }, [])

    const getInfo = async() => {
        const res = await getDatesList()
        console.log(res)
        if(res.status == 200){
            setShowList(res.data)
        }else{
            messageApi.open({
                type: 'error',
                content: "ah ocurrido un error"
            })
        }
    }

    const attend = async(patientId) => {
        const res = await getHistory(patientId)
        if(res.status == 200){
            setHistoryData(res.data)
            setAttending(true)
            setView("CurrentDate")
        }else{
            messageApi.open({
                type: 'error',
                content: "ah ocurrido un error"
            })
        }
    }

    const [showList, setShowList] = useState([])

    return(
        <div className='DateList'>
            {contextHolder}
            <Divider><h1>Listado de citas</h1></Divider>
            { attending ? (<>
                <h1>Ya esta atendiendo a un paciente en este momento.</h1>
                <h3>por favor termine la cita actual para atender otra.</h3>
            </>):(showList.length > 0 ? (
                <List bordered style={{width: '80%'}}>
                {showList.map(item => (
                    <List.Item style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 15px'}}>
                        <h3>{getDate(item.date)} - {getTime(item.date)} - {item.name} {item.lastname} - {item.idType}-{item.identification!=null ? item.identification : item.code}</h3>
                        <Tooltip title='Atender' >
                            <Button
                                color='primary'
                                shape='circle'
                                icon={<AuditOutlined />}
                                size='large'
                                onClick={() => {setCurrentDate(item.dateId); attend(item.patientId)}}
                            />
                        </Tooltip>
                    </List.Item>
                ))}
                </List>
            ):(<>
                <h1>No hay citas pendientes para mostrar.</h1>
                <h3>Por favor espere a que se le asigne una nueva cita.</h3>
            </>)) }
            
        </div>
    )
}

export default DateList;
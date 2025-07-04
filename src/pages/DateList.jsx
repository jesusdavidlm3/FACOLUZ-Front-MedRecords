import { Input, DatePicker, Button, Tooltip, List, Divider } from 'antd'
import {AuditOutlined} from '@ant-design/icons'
import React, { useState, useEffect } from 'react'
import { getDatesList } from '../client/client'

const DateList = () => {

    useEffect(() => {
        getInfo()
    })

    const getInfo = async() => {
        getDatesList()
    }

    const pruebas = [{
        patientName: 'Jesus',
        patientLastname: 'Lozano',
        doctorName: 'Luis',
        doctorLastname: 'Gomez',
        idType: 'V',
        cedula: '28288269',
        id: '22255d5d5d5d5d5d7878s',
        date: '24-02-2024',
        time: '12:45 p.m.'
    },{
        patientName: 'Cesar',
        patientLastname: 'Moreno',
        doctorName: 'Juan',
        doctorLastname: 'Sanchez',
        idType: 'V',
        cedula: '123456',
        id: '55s55s5f88f74tg44t',
        date: '24-11-2024',
        time: '03:30 p.m.'
    },{
        patientName: 'David',
        patientLastname: 'Garcia',
        doctorName: 'Pedro',
        doctorLastname: 'Ferrer',
        idType: 'V',
        cedula: '44688887',
        id: 'rrr5r5r55f2f4e55e',
        date: '20-09-2024',
        time: '08:00 a.m.'
    }]

    const [showList, setShowList] = useState(pruebas)

    return(
        <div className='DateList'>
            <Divider>Listado de citas</Divider>
            <List bordered>
                {showList.map(item => (
                    <List.Item style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 15px'}}>
                        <h3>{item.date} - {item.time} - {item.idType}-{item.cedula} {item.patientName} {item.patientLastname} - Dr. {item.doctorName} {item.doctorLastname} </h3>
                        <Tooltip title='Atender' >
                            <Button shape='circle' icon={<AuditOutlined />} size='large' />
                        </Tooltip>
                    </List.Item>
                ))}
            </List>
        </div>
    )
}

export default DateList;
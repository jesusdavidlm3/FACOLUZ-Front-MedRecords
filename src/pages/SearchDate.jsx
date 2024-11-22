import { Input, DatePicker, Button, Tooltip } from 'antd'
import {EditOutlined} from '@ant-design/icons'
import { useState } from 'react'

const SearchDate = () => {

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
        <div className='SearchDates'>
            <div className="searchBar">
                <Input.Search placeholder='Ingrese nombre, cedula o codigo' style={{width: '40%'}} size='large' />
                <DatePicker style={{width: '40%'}} size='large' placeholder='Buscar citas por fecha' />
            </div>
            {showList.map(item => (
                <div className='listItem' key={item.id} >
                    <h3>{item.idType}-{item.cedula} {item.patientName} {item.patientLastname} - Dr. {item.doctorName} {item.doctorLastname} - {item.date} - {item.time} </h3>
                    <Tooltip title='Editar' >
                        <Button shape='circle' icon={<EditOutlined />} size='large' />
                    </Tooltip>
                </div>
            ))}
        </div>
    )
}

export default SearchDate
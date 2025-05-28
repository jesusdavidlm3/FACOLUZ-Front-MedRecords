import { Input, Divider, List, Button, Tooltip } from 'antd'
import { useContext, useState } from 'react'
import { routerContext } from '../context/routerContext'
import { EyeOutlined } from '@ant-design/icons' 
import React from 'react'

const SearchHistory = () => {

    const {view} = useContext(routerContext)

    const pruebas = [{
        name: 'Jesus',
        lastname: 'Lozano',
        idType: 'V',
        cedula: '28288269',
        id: '22255d5d5d5d5d5d7878s'
    },{
        name: 'Cesar',
        lastname: 'Moreno',
        idType: 'V',
        cedula: '123456',
        id: '55s55s5f88f74tg44t'
    },{
        name: 'David',
        lastname: 'Garcia',
        idType: 'V',
        cedula: '44688887',
        id: 'rrr5r5r55f2f4e55e'
    }]


    const [showList, setShowList] = useState(pruebas)

    return(
        <div className="SearchHistory">
            <div className='searchBar' >
                <Input.Search placeholder='Ingrese nombre, cedula o codigo del paciente' size='large'/>
            </div>
            <Divider>Historias medicas</Divider>
            <List bordered>
                {showList.map(item => (
                    <List.Item className='listItem' key={item.id}>
                        <h3>{item.idType} - {item.cedula} {item.name} {item.lastname}</h3>
                        <Tooltip title='Ver historia'>
                            <Button shape='circle' icon={<EyeOutlined />} size='large'/>
                        </Tooltip>
                    </List.Item>
                ))}
            </List>
        </div>
    )
}

export default SearchHistory
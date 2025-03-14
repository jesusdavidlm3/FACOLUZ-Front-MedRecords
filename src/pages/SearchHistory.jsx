import { Input } from 'antd'
import { useContext, useState } from 'react'
import { routerContext } from '../context/routerContext'
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
            {showList.map(item => (
                <div className='listItem' key={item.id} onClick={() => view('OpenHistory')} >
                    <h3>{item.idType} - {item.cedula} {item.name} {item.lastname}</h3>
                </div>
            ))}
        </div>
    )
}

export default SearchHistory
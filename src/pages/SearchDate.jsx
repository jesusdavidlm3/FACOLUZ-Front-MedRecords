import { Input, DatePicker } from 'antd'
import { useState } from 'react'

const SearchDate = () => {

    const [showList, setShowList] = useState([])

    return(
        <div className='SearchDates'>
            <div className="DatesSearchBar">
                <Input.Search placeholder='Ingrese nombre o cedula del paciente' style={{width: '40%'}} />
                <DatePicker style={{width: '40%'}} />
            </div>
            {showList.map(item => (
                <div className='ListItem'>
                    <h3>V-00.000.000 Nombre Apellido - Dr. Doctor - Fecha - hora</h3>
                </div>
            ))}
        </div>
    )
}

export default SearchDate
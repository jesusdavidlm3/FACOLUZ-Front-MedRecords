import { Input, DatePicker } from 'antd'
import { useState } from 'react'

const SearchDate = () => {

    const [showList, setShowList] = useState([])

    return(
        <div className='SearchDates'>
            <div className="DatesSearBar">
                <Input.Search/>
                <DatePicker/>
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
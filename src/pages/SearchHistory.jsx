import { Input } from 'antd'
import { useState } from 'react'

const SearchHistory = () => {
    
    const [showList, setShowList] = useState([])

    return(
        <div className="SearchHistory">
            <Input.Search placeholder='Ingrese nombre o cedula'/>
            {showList.map(item => (
                <div classname='listItem'>
                    <h3>V-00.000.000 Nombre Apellido</h3>
                </div>
            ))}
        </div>
    )
}

export default SearchHistory
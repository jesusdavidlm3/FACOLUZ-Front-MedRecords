import { useState } from 'react'

const OpenHistory = () => {

    const [showlist, setShowList] = useState([])

    return(
        <div className='OpenHistory'>
            {showlist.map(item => (
                <h3>Fecha</h3>
            ))}
        </div>
    )
}

export default OpenHistory
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const OpenHistory = () => {

    const pruebas = [{
        date: '24-02-2023',
        doctor: 'Luis Rodriguez'
    },{
        date: '20-09-2023',
        doctor: 'Juan Gomez'
    },{
        date: '23-11-2023',
        doctor: 'Felipe Pirela'
    },{
        date: '24-11-2023',
        doctor: 'Juan Luis Guerra'
    },{
        date: '25-11-2024',
        doctor: 'Antonio Banderas'
    } ]

    const navigate = useNavigate()

    const [showlist, setShowList] = useState(pruebas)

    return(
        <div className='OpenHistory'>
            <h1>Historia</h1>
            {showlist.map(item => (
                <div className='listItem' onClick={() => navigate('/home/openDate')} >
                    <h3>{item.date} - Atendido por: {item.doctor} </h3>
                </div>
            ))}
        </div>
    )
}

export default OpenHistory
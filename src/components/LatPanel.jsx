import { useContext } from 'react'
import { appContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'

const LatPanel = () => {

	const navigate = useNavigate()
	const { userInfo } = useContext(appContext)

	return(
		<div className='LatPanel'>
			<Button onClick={() => navigate('/home/history')}>Buscar historia</Button>
			<Button>Crear historia</Button>
			<Button>Agendar cita</Button>
			<Button onClick={() => navigate('/home/dates')}>Buscar citas</Button>
		</div>	
	)
}

export default LatPanel
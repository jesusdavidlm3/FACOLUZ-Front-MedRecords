import { useContext, useState } from 'react'
import { appContext } from '../context/appContext'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import { MakeDateModal, BasicPatientRegisterModal, CreateHistoryModal } from './Modals'

const LatPanel = () => {

	const navigate = useNavigate()
	const { userInfo } = useContext(appContext)
	const [makeDateModalHandler, setMakeDateModalHandler] = useState(false)
	const [createHistoryHandler, setCreateHistoryHandler] = useState(false)

	return(
		<>
			<div className='LatPanel'>
				<Button size='large' onClick={() => navigate('/home/history')}>Buscar historia</Button>
				<Button size='large' onClick={() => setCreateHistoryHandler(true)} >Crear historia</Button>
				<Button size='large' onClick={() => setMakeDateModalHandler(true)} >Agendar cita</Button>
				<Button size='large' onClick={() => navigate('/home/dates')}>Buscar citas</Button>
			</div>

			<MakeDateModal open={makeDateModalHandler} onCancel={() => setMakeDateModalHandler(false)} />
			<BasicPatientRegisterModal/>	
			<CreateHistoryModal open={createHistoryHandler} onCancel={() => setCreateHistoryHandler(false)} />
		</>
	)
}

export default LatPanel
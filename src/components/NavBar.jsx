import { Button } from 'antd'
import React from 'react'
import { LogoutOutlined, MenuOutlined, LeftOutlined } from '@ant-design/icons'
import { useState, useContext } from 'react'
import { routerContext } from '../context/routerContext'
import { appContext } from '../context/appContext'
import { LogoutModal } from './Modals'
import { useNavigate, useLocation } from 'react-router-dom'

const NavBar = () => {
	
	const [confirmLogout, setConfirmLogout] = useState(false)
	const {userData} = useContext(appContext)
	const {setView} = useContext(routerContext)
	//const navigate = useNavigate()
	//const location = useLocation()

	return(
		<div className='NavBar'>
			<div className='Info'>
				<h1>Bienvenido {userData.name} {userData.lastname} </h1>
			</div>
			<div className='Buttons'>
				{ location.pathname != '/home' && 
				<Button /*onClick={() => navigate(-1)}*/ >{'< Volver'}</Button> }
				<Button variant='solid'
					onClick={() => setConfirmLogout(true)}
					icon={<LogoutOutlined/>} color='danger'>Cerrar Sesion</Button>
			</div>
			
			<LogoutModal
				open={confirmLogout}
				onCancel={() => setConfirmLogout(false)}
			/>
		</div>
	)
}

export default NavBar
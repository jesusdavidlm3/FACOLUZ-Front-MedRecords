import { Button } from 'antd'
import { useNavigate, useLocation } from 'react-router-dom'

const NavBar = () => {

	const navigate = useNavigate()
	const location = useLocation()

	return(
		<div className='NavBar'>
			<div className='Info'>
				<h1>Bienvenido</h1>
			</div>
			<div className='Buttons'>
				{ location.pathname != '/home' && <Button onClick={() => navigate(-1)} >{'< Volver'}</Button> }
				<Button variant='solid' color='danger'>Cerrar Sesion</Button>
			</div>
		</div>
	)
}

export default NavBar
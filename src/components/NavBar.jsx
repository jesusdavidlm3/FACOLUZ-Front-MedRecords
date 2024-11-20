import { Button } from 'antd'

const NavBar = () => {
	return(
		<div className='NavBar'>
			<div className='Info'>
				<h1>Bienvenido</h1>
			</div>
			<div className='Buttons'>
				<Button>{'< Volver'}</Button>
				<Button>Cerrar Sesion</Button>
			</div>
		</div>
	)
}

export default NavBar
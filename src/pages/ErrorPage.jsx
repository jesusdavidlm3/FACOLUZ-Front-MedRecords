import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {

	const navigate = useNavigate()

	return(
		<div className='ErrorPage'>
			<h1>Ah ocurrido un error</h1>
			<h3 onClick={() => navigate('/login')} >Haga click aqui para volver</h3>
		</div>
	)
}

export default ErrorPage
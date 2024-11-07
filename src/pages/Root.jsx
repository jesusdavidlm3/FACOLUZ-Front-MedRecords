import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import NavBar from '../components/NavBar'

const Root = () => {

	const navigate = useNavigate()
	const { logged } = useContext(appContext)

	useEffect(() => {
		navigate('/login')
	}, [])

	return(
		<>
			{ logged && <NavBar/> }
			<Outlet/>
		</>
	)	
}

export default Root
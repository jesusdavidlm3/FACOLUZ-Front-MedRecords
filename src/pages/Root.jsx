import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect, useContext } from 'react'
import { appContext } from '../context/appContext'
import NavBar from '../components/NavBar'

const Root = () => {

	const navigate = useNavigate()
	const { logged, contextHolder } = useContext(appContext)

	useEffect(() => {
		navigate('/login')
	}, [])

	return(
		<>
			{ contextHolder }
			{ logged && <NavBar/> }
			<Outlet/>
		</>
	)	
}

export default Root
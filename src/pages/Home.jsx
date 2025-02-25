import { Outlet, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import { routerContext } from '../context/routerContext'
import LatPanel from '../components/LatPanel'
import HistoryPanel from '../components/HistoryPanel'
import React from 'react'

const Home = () => {
	const {view} = useContext(routerContext)
	//const location = useLocation()

	return(
		<div className='Home'>
			<h1>Bienvenido al modulo de Control de Historias</h1>
			{view != 'OpenHistory' && view != 'OpenDate' && <LatPanel/>}
		
			{(view == 'OpenHistory' || view == 'OpenDate') && <HistoryPanel/> }
		
		</div>
	)
}

//<Outlet/>
//{view == 'Home' && <div className='emptySpace'/>}
export default Home
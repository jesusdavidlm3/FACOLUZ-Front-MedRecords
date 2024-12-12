import { Outlet, useLocation } from 'react-router-dom'
import LatPanel from '../components/LatPanel'
import HistoryPanel from '../components/HistoryPanel'
import React from 'react'

const Home = () => {

	const location = useLocation()

	return(
		<div className='Home'>
			{location.pathname != '/home/openHistory' && location.pathname != '/home/openDate' && <LatPanel/>}

			{(location.pathname == '/home/openHistory' || location.pathname == '/home/openDate') && <HistoryPanel/> }

			<Outlet/>
			{location.pathname == '/home' && <div className='emptySpace'/>}
		</div>
	)
}

export default Home
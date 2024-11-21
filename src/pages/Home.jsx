import { Outlet, useLocation } from 'react-router-dom'
import LatPanel from '../components/LatPanel'
import HistoryPanel from '../components/HistoryPanel'

const Home = () => {

	const location = useLocation()

	return(
		<div className='Home'>
			{location.pathname != '/home/openHistory' || location.pathname != '/home/openDate' ? (
				<LatPanel/>
			):(
				<HistoryPanel/>
			)}
			<Outlet/>
			{location.pathname == '/home' && <div className='emptySpace'/>}
		</div>
	)
}

export default Home
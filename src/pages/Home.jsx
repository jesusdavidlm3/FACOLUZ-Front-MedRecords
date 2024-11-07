import { Outlet } from 'react-router-dom'
import LatPanel from '../components/LatPanel'

const Home = () => {
	return(
		<div className='Home'>
			<LatPanel/>
			<Outlet/>
		</div>
	)
}

export default Home
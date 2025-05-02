import { useContext } from 'react'
import { routerContext } from '../context/routerContext'
import React from 'react'

const Home = () => {
	const {view} = useContext(routerContext)

	return(
		<div className='Home'>
			<h1>Bienvenido al modulo de Control de Historias</h1>
		</div>
	)
}
export default Home
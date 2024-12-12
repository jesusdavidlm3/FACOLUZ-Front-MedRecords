import { Form, Input, Button } from 'antd'
import { useContext, useState } from 'react'
import { appContext } from '../context/appContext' 
import { encrypt } from '../functions/hash'
import { login } from '../client/client'
import { useNavigate } from 'react-router-dom'
import React from 'react'

const Login = () => {

	const navigate = useNavigate()
	const { messageApi, setuserData, setLogged } = useContext(appContext)
	const [loading, setLoading] = useState(false)

	const submitLogin = async () => {
		{/*setLoading(false)
		const identification = document.getElementById('identification').value
		const password = document.getElementById('password').value

		const data = {
			identification: identification,
			passwordHash: await encrypt(password)
		}
		let res = await login(data)
		console.log(res)*/}
		setLogged(true)
		navigate('/home')
	}

	return(
		<div className='Login'>
			<Form disabled={loading} className='loginForm'>
				<h1>Iniciar sesion</h1>
				<Form.Item name='identification'>
					<Input placeholder='Identificacion'/>
				</Form.Item>
				<Form.Item name='password'>
					<Input.Password placeholder='Contraseña'/>
				</Form.Item>

				<Button onClick={submitLogin}>Iniciar Sesion</Button>
			</Form>
		</div>
	)
}

export default Login
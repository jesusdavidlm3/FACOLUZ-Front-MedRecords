import { Form, Input, Button } from 'antd'
import { useContext, useState } from 'react'
import { appContext } from '../context/appContext' 
import { encrypt } from '../functions/hash'
import { httpMethods } from '../client/client'

const Login = () => {

	const { messageApi, setuserData, setLogged } = useContext(appContext)
	const [loading, setLoading] = useState(false)

	const submitLogin = async () => {
		setLoading(true)
		const identification = Document.getElementById('identification').value
		const password = Document.getElementById('password').value

		const data = {
			identification: identification,
			passwordHash: await encrypt(password)
		}

		let res = await httpMethods.post(data)
		if(res.status == 200){
			
		}
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

				<Button>Iniciar Sesion</Button>
			</Form>
		</div>
	)
}

export default Login
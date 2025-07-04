import { appContext } from './appContext'
import { useState } from 'react'
import { message } from 'antd'
import React from 'react'

const ContextProvider = ({children}) => {

	const [userData, setUserData] = useState('')
	const [logged, setLogged] = useState(false)
	const [messageApi, contextHolder] = message.useMessage()
	const [attending, setAttending] = useState(false)

	return(
		<appContext.Provider value={{
			userData,
			setUserData,
			logged,
			setLogged,
			messageApi,
			contextHolder,
			attending,
			setAttending
		}} >
			{children}
		</appContext.Provider>
	)
}

export default ContextProvider
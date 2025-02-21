import axios from 'axios'

const ip = import.meta.env.VITE_BACK_ADDRESS
const url = `${ip}:3000`

export class httpMethods {
	constructor(){
	}

	async get(){
		try{
			let res = await axios.get(`${url}/${apiAddress}`)
			return res
		}catch(err){
			return(err)
		}	
	}

	async post(apiAddress, data){
		try{
			let res = await axios.post(`${url}/${apiAddress}`, data)
			return res
		}catch(err){
			return(err)
		}
	}

	async put(apiAddress, data){
		try{
			let res = await axios.put(`${url}/${apiAddress}`)
			return res
		}catch(err){
			return(err)
		}
	}

	async patch(apiAddress, data){
		try{
			let res = await axios.patch(`${url}/${apiAddress}`)
			return res
		}catch(err){
			return(err)
		}
	}

	async delete(apiAddress, value){
		try{
			let res = await axios.delete(`${url}/${apiAddress}/${value}`)
			return res
		}catch(err){
			return(err)
		}
	}
}
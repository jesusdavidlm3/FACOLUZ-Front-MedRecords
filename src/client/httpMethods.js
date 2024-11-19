import axios from 'axios'

const url = 'http://localhost:3000'

export class httpMethods {
	constructor(){
	}

	async get(){
		try{
			let res = await axios.get('${url}/${apiAddres}')
			return res
		}catch(err){
			return(err)
		}	
	}

	async post(apiAddress, data){
		try{
			let res = await axios.get('${url}/${apiAddres}', data)
			return res
		}catch(err){
			return(err)
		}
	}

	async put(apiAddress, data){
		try{
			let res = await axios.get('${url}/${apiAddres}')
			return res
		}catch(err){
			return(err)
		}
	}

	async patch(apiAddress, data){
		try{
			let res = await axios.get('${url}/${apiAddres}')
			return res
		}catch(err){
			return(err)
		}
	}

	async delete(apiAddress, value){
		try{
			let res = await axios.get('${url}/${apiAddres}/${url}')
			return res
		}catch(err){
			return(err)
		}
	}
}
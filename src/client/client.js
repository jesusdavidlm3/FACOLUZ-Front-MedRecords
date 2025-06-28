import { httpMethods } from './httpMethods'

const http = new httpMethods()
let token

export async function login(data){
	const res = await http.post('api/login', null, data)
	if(res.status == 200){
		token = res.data.jwt
	}
	return res
}

export async function getDatesList() {
	const res = await http.get('api/getDatesList', token)
	if(res.status == 200){
		return res
	}
}

export async function getHistory(patientId) {
	const res = await http.get(`api/getHistory/`, token, patientId)
	if(res.status == 200){
		return res
	}
}
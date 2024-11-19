import { httpMethods } from './httpMethods'

const httpMethods = httpMethods()

async function login(data){
	return httpMethods.post('/api/login', data)
}
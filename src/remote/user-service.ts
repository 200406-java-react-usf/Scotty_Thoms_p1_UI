import { reimbursmentClient } from './reimbursement-client';

export async function register(username: string, password: string, firstName: string, lastName: string, email: string) {
    let response = await reimbursmentClient.post('/users', {username, password, firstName, lastName, email});
    return await response.data;
} 

export async function getAllUsers() {
    let response = await reimbursmentClient.get('/users');
    return await response.data;
}

export async function logout() {
    let response = await reimbursmentClient.get('/auth');
    console.log(`response data: ${response.data}`)
    return await response.data;
}
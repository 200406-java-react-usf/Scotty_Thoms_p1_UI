import { reimbursmentClient } from './reimbursment-client';

export async function register(username: string, password: string, firstName: string, lastName: string, email: string) {
    let response = await reimbursmentClient.post('/users', {username, password, firstName, lastName, email});
    return await response.data;
} 

export async function getAllUsers() {
    let response = await reimbursmentClient.get('/users');
    return await response.data;
}

export async function logout() {
    await reimbursmentClient.get('/auth');
    return true;
}
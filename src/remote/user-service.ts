import { reimbursmentClient } from './reimbursement-client';
import { User } from '../models/user';

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

export async function update(u: User) {
    let response = await reimbursmentClient.put('/users', {u});
    return await response.data;
}

export async function deleteUserById(userToBeDeleted: User) {
    let response = await reimbursmentClient.delete('/users',{
        data: {
            id: userToBeDeleted.id
        }
    });
    return await response.data;
}
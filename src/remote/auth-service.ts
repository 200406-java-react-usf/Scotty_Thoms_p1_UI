import { reimbursmentClient } from './reimbursment-client';

export async function authenticate(username: string, password: string) {
    let response = await reimbursmentClient.post('/auth', {username, password});
    return await response.data;
}


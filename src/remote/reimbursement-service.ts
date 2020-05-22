import { reimbursmentClient } from "./reimbursement-client";
import { Reimbursement } from "../models/reimbursement";

export async function getAllReimbursements() {
    let response = await reimbursmentClient.get('/reimbursements');
    return await response.data;
}

export async function sumbitReimbursement(amount: number, description: string, author_id: number, reimb_type_id: number) {
    let response = await reimbursmentClient.post('/reimbursements', {amount, description, author_id, reimb_type_id});
    return await response.data;
}

export async function getReimbursementByUsername(username: string) {
    let response = await reimbursmentClient.get(`/reimbursements/${username}`);
    return await response.data;
}

export async function resolveReimb(reimb_id: number, resolver_id: number, reimb_status_id: number) {
    console.log('made it here');
    let response = await reimbursmentClient.put('/reimbursements', {reimb_id, resolver_id, reimb_status_id});
    return await response.data;
}

export async function updateReimb(reimb_id: number, amount: number, description: string, reimb_type_id: number) {
    console.log('made it here');
    let response = await reimbursmentClient.put('/reimbursements', {reimb_id, amount, description, reimb_type_id});
    return await response.data;
}
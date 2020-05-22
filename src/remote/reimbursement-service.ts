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

export async function updateReimb(updatedReimb: Reimbursement) {
    let response = await reimbursmentClient.put('reimbursements', {updatedReimb});
}
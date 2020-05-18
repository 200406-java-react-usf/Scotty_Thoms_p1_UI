import { reimbursmentClient } from "./reimbursement-client";

export async function getAllReimbursements() {
    let response = await reimbursmentClient.get('/reimbursements');
    return await response.data;
}
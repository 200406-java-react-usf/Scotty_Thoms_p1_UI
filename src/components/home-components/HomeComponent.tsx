import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { getAllUsers, logout } from '../../remote/user-service';
import { getAllReimbursements } from '../../remote/reimbursement-service';

interface IHomeProps {
    username: string;
}

function HomeComponent (props: IHomeProps) {

    let getUsers = async () => {
        let allUsers = await getAllUsers();
        console.log(allUsers);
    }

    let userLogout = async () => {
        await logout();
    }

    let getAllReimb = async () => {
        let allReimb = await getAllReimbursements();
        console.log(allReimb);
    }

    return (
        !props.username ?
        < Redirect to="/login" />
        :
        <>
            <h1> 
                Welcome, {props.username}!
                <br/><br/>
                <Button onClick={getUsers} variant="contained" color="primary" size="medium">Get ALl Users Test</Button>
                <br/><br/>
                <Button onClick={userLogout} variant="contained" color="primary" size="medium">logout test</Button>
                <br/><br/>
                <Button onClick={getAllReimb} variant="contained" color="primary" size="medium">get all reimb test</Button>
            </h1>
        </>
    )
}

export default HomeComponent;
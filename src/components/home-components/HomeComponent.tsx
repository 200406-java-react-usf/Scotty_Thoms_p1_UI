import React from 'react';
import { Redirect } from 'react-router-dom';
import { getAllUsers, logout } from '../../remote/user-service';
import { Button } from '@material-ui/core';

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
                
            </h1>
        </>
    )
}

export default HomeComponent;
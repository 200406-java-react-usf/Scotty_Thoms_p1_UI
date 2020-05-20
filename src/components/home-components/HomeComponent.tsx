import React from 'react';
import { Redirect } from 'react-router-dom';
import { Button, Table, TableHead, TableRow, TableCell, TableBody } from '@material-ui/core';
import { getAllUsers } from '../../remote/user-service';
import { getAllReimbursements, getReimbursementByUsername } from '../../remote/reimbursement-service';
import { User } from '../../models/user';

interface IHomeProps {
    authUser: User;
    logoutAction: () => void;
}

function HomeComponent (props: IHomeProps) {

    let getUsers = async () => {
        let allUsers = await getAllUsers();
        console.log(allUsers);
    }

    let userLogout = async () => {
        props.logoutAction(); 
        
    }

    let getAllReimb = async () => {
        let allReimb = await getAllReimbursements();
        console.log(allReimb);
    }

    let getReimbByUsername = async () => {
        let reimbFromUser = await getReimbursementByUsername(props.authUser.username);
        console.log(reimbFromUser);

    }

    let r = (newEmp: User) => {
        if (!newEmp) {
            return (
                <TableRow></TableRow>
            );
        }
        else {
            return (
                <TableRow>
                    <TableCell>{props.authUser.username}</TableCell>
                    <TableCell>{props.authUser.firstName}</TableCell>
                    <TableCell>{props.authUser.lastName}</TableCell>
                    <TableCell>{props.authUser.email}</TableCell>
                    <TableCell>{props.authUser.role}</TableCell>
                </TableRow>
            );
        }
    }



    return (
        !props.authUser?.username ?
        < Redirect to="/login" />
        :
        <>
            <h1> 
                Welcome, {props.authUser.firstName}!
                <br/><br/>
                
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell >Username</TableCell>
                            <TableCell >First Name</TableCell>
                            <TableCell >Last Name</TableCell>
                            <TableCell >Email</TableCell>
                            <TableCell >Role</TableCell>
                        </TableRow>
                    </TableHead>
                        <TableBody component="tbody">
                            {r(props.authUser)}
                        </TableBody>
                </Table>

                {
                    (props.authUser.role === 'Admin') ?
                    <>
                        <Button onClick={getUsers} variant="contained" color="primary" size="medium">Get ALl Users Test</Button>
                        <br/><br/>


                    </>
                    :
                    <></>
                }

                {
                    (props.authUser.role === 'Employee') 
                    ?
                    <>
                        <Button onClick={getReimbByUsername} variant="contained" color="primary" size="medium">get just user reimb</Button>
                        <br/><br/>
                    </>
                    :
                    <></>
                }
                
                {
                    (props.authUser.role === 'Manager')
                    ?
                    <>
                        <Button onClick={getAllReimb} variant="contained" color="primary" size="medium">get all reimb test</Button>
                        <br/><br/>
                    </>
                    :
                    <></>
                }
                
                <Button onClick={userLogout} variant="contained" color="secondary" size="medium">Logout</Button>
                
            </h1>
        </>
    )
}

export default HomeComponent;
import React, { useState } from 'react';
import { 
    Typography, 
    FormControl, 
    InputLabel, 
    Input, 
    Button, 
    makeStyles} from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { authenticate, getAllUsers } from '../remote/auth-service';
import { User } from '../models/user';
import { Redirect } from 'react-router-dom';

interface ILoginProps {
    authUser: User;
    setAuthUser: (user: User) => void;
}

const useStyles = makeStyles({
    loginContainer: {
        display: "flex",
        justifyContent: "center",
        margin: 20,
        marginTop: 20,
        padding: 20
    },
    loginForm: {
        width: "50%"
    }
});

function LoginComponent(props: ILoginProps) {

    const classes = useStyles();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // eslint-disable-next-line
    const [errorMessage, setErrorMessage] = useState('Please Enter Valid Credentials');

    let updateUsername = (e: any) => {
        setUsername(e.currentTarget.value);
    }

    let updatePassword = (e: any) => {
        setPassword(e.currentTarget.value);
    }

    let login = async () => {
        let authUser = await authenticate(username, password);
        props.setAuthUser(authUser);
        // console.log(authUser);
    }

    let getUsers = async () => {
        let allUsers = await getAllUsers();
        console.log(allUsers);
    }

    return (
        props.authUser ? 
        < Redirect to="/home" />  
        : 
        <> 
        
            <div className={classes.loginContainer}>
                    <form className={classes.loginForm}>
                        <Typography align="center" variant="h4">Login to Reimbursments!</Typography>

                        <FormControl margin="normal" fullWidth>
                            <InputLabel htmlFor="username">Username</InputLabel>
                            <Input 
                                onChange={updateUsername} 
                                value={username} 
                                id="username" type="text" 
                                placeholder="Enter your username" />
                        </FormControl>

                        <FormControl margin="normal" fullWidth>
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <Input 
                                onChange={updatePassword}
                                value={password}
                                id="password" type="password"
                                placeholder="Enter your password"/>
                        </FormControl>
                        <br/><br/>
                        <Button onClick={login} variant="contained" color="primary" size="medium">Login</Button>
                        <Button onClick={getUsers} variant="contained" color="primary" size="medium">Get ALl Users Test</Button>
                        <br/><br/>
                        {
                            errorMessage 
                                ? 
                            <Alert severity="error">{errorMessage}</Alert>
                                :
                            <></>
                        }
                    </form>
                </div>
        </>
    );
}

export default LoginComponent;
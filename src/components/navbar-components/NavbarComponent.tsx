import React from 'react';
import { makeStyles, List, ListItem, Typography, ListItemText, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { logout } from '../../remote/user-service';

interface INavbarProps {
    username: string;
}

const useStyles = makeStyles({
    link: {
        textDecoration: "none",
        color: "white"
    }
});

function NavbarComponent (props: INavbarProps)  {

    const classes = useStyles();

    let userLogout = async () => {
        await logout(); 
    }

    return(
        <>
            <List component="nav">
                <ListItem component="div">
                    <Typography color="inherit" variant="h5">ERS</Typography>
                    {
                        props.username
                        ?
                        <ListItemText inset>
                            <Typography color="inherit" variant="h6">
                                <Link to="/home" className={classes.link}>Home</Link>
                            </Typography>
                        </ListItemText>
                        :
                        <>
                        </>
                    }
                    

                    {
                        !props.username
                        ?
                        <>
                        <ListItemText inset>
                            <Typography color="inherit" variant="h6">
                                <Link to="/login" className={classes.link}>Login</Link>
                            </Typography>
                        </ListItemText>
                        <ListItemText inset>
                            <Typography color="inherit" variant="h6">
                                <Link to="/register" className={classes.link}>Register</Link>
                            </Typography>
                        </ListItemText>
                        </> 
                        :
                        <>
                        </>
                    }
                    
                    
                    <ListItemText inset>
                        <Typography color="inherit" variant="h6">
                            <span className={classes.link}>{props.username}</span>
                        </Typography>
                    </ListItemText>
                    {
                        props.username
                        ?
                        <ListItemText inset>
                            <Typography color="inherit" variant="h6">
                                <Button  onClick={userLogout} variant="contained" color="primary" size="large">Logout</Button>
                            </Typography>
                        </ListItemText>
                        :
                        <> </>
                    }
                </ListItem>
            </List>
        </>
    )
}

export default NavbarComponent;
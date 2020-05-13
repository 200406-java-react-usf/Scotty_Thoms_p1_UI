import React, { useState } from 'react';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { 
    AppBar,
    Toolbar, 
    Typography} from '@material-ui/core';
import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';

function App() {

    // @ts-ignore
    const [authUser, setAuthUser] = useState(null as User);
    // @ts-ignore
    const [newUser, makeNewUser] = useState(null as User);

    return (
        <>
            < Router >
                < AppBar color="primary" position="static">
                    < Toolbar >
                        < Typography variant="h5" color="inherit">
                            < NavbarComponent authUser={authUser}/>
                        </Typography>
                    </Toolbar>
                </AppBar>

                < Switch >
                    < Route path="/home" render={() => < HomeComponent username={authUser?.username} />} />
                    < Route path="/login" render={() => < LoginComponent authUser={authUser} setAuthUser={setAuthUser}/> } />
                    < Route path="/register" render={() => < RegisterComponent newUser={newUser} setNewUser={makeNewUser} /> } /> 
                    
                </Switch>
            </Router>
        </> 
    );
}

export default App;

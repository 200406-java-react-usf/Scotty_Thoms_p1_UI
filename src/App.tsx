import React, { useState } from 'react';
import './App.css';
import NavbarComponent from './components/navbar-components/NavbarComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { 
    AppBar,
    Toolbar, 
    Typography} from '@material-ui/core';
import HomeComponent from './components/home-components/HomeComponent';
import LoginComponent from './components/login-components/LoginContainer';
import RegisterComponent from './components/register-components/RegisterContainer';
import { User } from './models/user';
import { Provider } from 'react-redux';
import { store } from './Store';

function App() {

    // @ts-ignore
    const [authUser, setAuthUser] = useState(null as User);
    // @ts-ignore
    const [newUser, makeNewUser] = useState(null as User);

    return (
        <>
            < Provider store={store}>
                < Router >
                    < AppBar color="primary" position="static">
                        < Toolbar >
                        < Typography variant="h5" color="inherit">
                                < NavbarComponent authUser={new User(0, '', '', '', '','','')} /> 
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    < Switch >
                    
                        < Route path="/home" render={() => < HomeComponent username={'test3'} />} />
                        < Route path="/login" render={() => < LoginComponent /> } />
                        < Route path="/register" render={() => < RegisterComponent  /> } /> 
                        
                    </Switch>
                </Router>
            </Provider>
        </> 
    );
}

export default App;

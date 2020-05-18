import React from 'react';
import './App.css';
// import NavbarComponent from './components/navbar-components/NavbarContainer';
// import HomeComponent from './components/home-components/HomeContainer';
import NavbarComponent from './components/navbar-components/NavbarComponent';
import HomeComponent from './components/home-components/HomeComponent';
import LoginComponent from './components/login-components/LoginContainer';
import RegisterComponent from './components/register-components/RegisterContainer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { 
    AppBar,
    Toolbar, 
    Typography} from '@material-ui/core';
import { Provider } from 'react-redux';
import { store } from './Store';
import { User } from './models/user';

function App() {

    return (
        <>
            < Provider store={store}>
                < Router >
                    < AppBar color="primary" position="static">
                        < Toolbar >
                        < Typography variant="h5" color="inherit"> 
                                < NavbarComponent authUser={new User(0, '', '', '', '','','')}/> 
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    < Switch >
                    
                        < Route path="/home" render={() => < HomeComponent username={'test'} />} />
                        < Route path="/login" render={() => < LoginComponent /> } />
                        < Route path="/register" render={() => < RegisterComponent  /> } /> 
                        
                    </Switch>
                </Router>
            </Provider>
        </> 
    );
}

export default App;

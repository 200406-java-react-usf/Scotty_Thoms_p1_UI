import React from 'react';
import { Redirect } from 'react-router-dom';

interface ILogoutProps {

}

const LogoutComponent = (props: ILogoutProps) => {
    return (
        <>
            <div>
                <h2>Logged Out Successfully.</h2>
                
            </div>
        </>
    )
}

export default LogoutComponent;
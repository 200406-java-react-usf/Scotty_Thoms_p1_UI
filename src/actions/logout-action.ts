import { Dispatch } from "redux"
import { logout } from "../remote/user-service";

export const logoutActionTypes = {
    SUCCESSFUL_LOGOUT: 'SUCCESSFUL_LOGOUT',
    INTERNAL_SERVER_ERROR: 'LOGOUT_INTERNAL_SERVER_ERROR'
}

export const logoutAction = () => async (dispatch: Dispatch) => {
    try {
        let loggedOut = await logout();
        console.log(`logged out: ${loggedOut}`);
        dispatch({
            type: logoutActionTypes.SUCCESSFUL_LOGOUT,
            payload: loggedOut
        });
    } catch (e) {
        dispatch({
            type: logoutActionTypes.INTERNAL_SERVER_ERROR,
            payload: e.response.data.message
        })
    }
}
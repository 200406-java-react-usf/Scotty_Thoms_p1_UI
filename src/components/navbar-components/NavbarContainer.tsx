import NavbarComponent from "./NavbarComponent"
import { connect } from "react-redux";
import { IState } from "../../reducers";

const mapStateToProps = (state: IState) => {
    return {
        username: state.login.authUser?.username
    }
}

export default connect(mapStateToProps)(NavbarComponent);
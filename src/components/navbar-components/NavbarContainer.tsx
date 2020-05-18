import NavbarComponent from "./NavbarComponent"
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
    return {
        authUser: state.navbar.authUser
    }
}

export default connect(mapStateToProps)(NavbarComponent);
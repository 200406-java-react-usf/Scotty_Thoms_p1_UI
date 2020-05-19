import { IState } from "../../reducers";
import { connect } from "react-redux"
import HomeComponent from "./HomeComponent"

const mapStateToProps = (state: IState) => {
    return {
        username: state.login.authUser?.username
    }
}

export default connect(mapStateToProps)(HomeComponent);


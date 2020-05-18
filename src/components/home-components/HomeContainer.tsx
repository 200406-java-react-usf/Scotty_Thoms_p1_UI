// import { IState } from "../../reducers";

import { connect } from "react-redux"
import HomeComponent from "./HomeComponent"

const mapStateToProps = (state: any) => {
    return {
        authUser: state.home.authUser
    }
}

export default connect(mapStateToProps)(HomeComponent);
import React from "react";
import {updateAllUsers} from "../reducers/users";
import {connect} from "react-redux";

class RetrieveData extends React.Component {

    render() {
        console.log('RetrieveData:', this.props);
        return (
            <button type='button' onClick={() => this.props.updateAllUsers()}>Retrieve data</button>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateAllUsers: () => dispatch(updateAllUsers()),
    };
};

export default connect(null, mapDispatchToProps)(RetrieveData);
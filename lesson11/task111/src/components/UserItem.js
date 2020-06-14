import React from "react";
import './UserItem.styles.css';
import {deleteUser} from "../reducers/users";
import {connect} from "react-redux";

class UserItem extends React.Component {

    handleDelete = () => {
        const {id, deleteUser} = this.props;

        deleteUser(id);
    }

    render() {
        const {id, name, username, website} = this.props;

        return (
            <tr onClick={this.handleDelete} className='user'>
                <td>
                    {id}
                </td>
                <td>
                    {name}
                </td>
                <td>
                    {username}
                </td>
                <td>
                    {website}
                </td>
            </tr>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: (userId) => dispatch(deleteUser(userId)),
    }
}

export default connect(null, mapDispatchToProps)(UserItem);
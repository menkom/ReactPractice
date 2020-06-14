import React from 'react';
import {connect} from "react-redux";
import {getUsers} from "../reducers/users";
import UserItem from "./UserItem";

class UserList extends React.Component {
    render() {
        return (
            <div>
                <table
                    style={{
                        border: "1px solid black",
                        margin: "auto"
                    }}
                >
                    <thead>
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>username</td>
                        <td>website</td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.users
                            .map(
                                (item) => <UserItem key={item.id} {...item}/>
                            )
                    }
                    </tbody>
                </table>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
    };
}

export default connect(mapStateToProps)(UserList);
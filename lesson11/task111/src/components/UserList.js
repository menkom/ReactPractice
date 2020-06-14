import React from 'react';
import {UserItem} from "./UserItem";

export class UserList extends React.Component {
    render() {
        return (
            <div>
                <UserItem name='SomeName'/>
            </div>
        );
    }
}
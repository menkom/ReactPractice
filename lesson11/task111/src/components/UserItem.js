import React from "react";

export class UserItem extends React.Component {
    render() {
        const {name} = this.props;

        return (
            <div>{name}</div>
        )
    }
}
import React from 'react';
import './PostListRow.styles.css';

export class PostListRow extends React.Component {

    handleOnClick = (event) => {
        event.preventDefault();
        const {id} = this.props;
        console.log('Click on post with id=', id);
        return this.props.history.push(`/post/${id}`);
    }

    render() {
        const {id, title} = this.props;
        return (
            <tr className='post' onClick={this.handleOnClick}>
                <td>{id}</td>
                <td>{title}</td>
            </tr>
        )
    }
}
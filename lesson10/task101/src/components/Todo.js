import React, {Component} from 'react';
import {connect} from "react-redux";
import {deleteTodo} from "../actions";

class Todo extends Component {

    handleDelete = e => {
        e.preventDefault();
        console.log('this.props', this.props);
        const {id} = this.props;

        this.props.deleteTodo(id);
    }

    render() {
        const {text} = this.props;
        return (
            <div style={{border: "1px dotted black"}}>
                {text}
                <button type='button' onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}

export default connect(null, {deleteTodo})(Todo);

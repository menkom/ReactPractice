import React, {Component} from 'react';

class Todo extends Component {

    render() {
        const {id, text, deleteTodo} = this.props;
        return (
            <div style={{border: "1px dotted black"}}>
                {text}
                <button type='button' onClick={() => deleteTodo(id)}>Delete</button>
            </div>
        )
    }
}

export default Todo;

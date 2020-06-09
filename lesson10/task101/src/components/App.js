import React, {Component} from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

class App extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <AddTodoForm name="felex"/>
                <TodoList/>
            </div>
        );
    }
}

export default App;

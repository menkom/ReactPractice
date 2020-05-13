import React from 'react';
import InputForm from './component/InputForm';
import './component/styles.css';
import guid from './util/utils';
import TodoItem from './component/TodoItem';
import 'font-awesome/css/font-awesome.min.css';

class App extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            filterText: '',
            filterStatus: 'All',
            todos: [],
        };
    }

    componentDidMount() {
        // Всё логику получения данных положил в componentDidMount, но можно и в конструктор,
        // так как первоочередная цель — это выставление изначального стейта нашему компоненту.
        //
        // Важно, что нельзя вызывать setState перед тем, как компонент монтируется,
        // так что, если делать это в конструкторе, то надо выставлять свойство стейта напрямую.
        const todos = localStorage.getItem('todos');
        if (todos) {
            this.setState(({todos: JSON.parse(todos)}));
        }
    }

    handleOnSubmit = (title) => {
        this.setState((prevState) => ({
            todos: [
                {
                    id: guid(),
                    title,
                    isFinished: false,
                    isImportant: false,
                },
                ...prevState.todos]
        }), () => {
            const {todos} = this.state;
            localStorage.setItem('todos', JSON.stringify(todos));
        });
    };

    handleOnDelete = (todoId) => {
        this.setState((prevState) => (
            {
                todos: prevState.todos.filter((todo) => todo.id !== todoId),
            }
        ), () => {
            const {todos} = this.state;
            localStorage.setItem('todos', JSON.stringify(todos));
        });
    };

    handleToggleFinished = (todoId) => {
        this.setState(
            ({todos}) => ({
                todos: todos.map((todo) => (todo.id === todoId
                    ? {...todo, isFinished: !todo.isFinished}
                    : todo
                )),
            }
            ),
            () => {
                const {todos} = this.state;
                localStorage.setItem('todos', JSON.stringify(todos));
            }
        );
    };

    handleToggleImportant = (todoId) => {
        this.setState(({todos}) => (
            {
                todos: todos.map((todo) => (todo.id === todoId
                    ? {...todo, isImportant: !todo.isImportant}
                    : todo)),
            }
        ),
        () => {
            const {todos} = this.state;
            localStorage.setItem('todos', JSON.stringify(todos));
        });
    };

    onFilterChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    handleOnFilterButtonClick = (buttonName) => {
        this.setState({filterStatus: buttonName});
    };

    render() {
        const {todos, filterText, filterStatus} = this.state;
        return (
            <div className="app-container">
                <div className="app-title">
                    Todo app
                    <div className="search">
                        <input
                            type="text"
                            name="filterText"
                            value={filterText}
                            placeholder="enter text to filter"
                            onChange={this.onFilterChange}
                            className="search-field"
                        />
                        <i className="fa fa-search" />
                    </div>
                </div>

                <div>
                    <button
                        type="button"
                        name="All"
                        onClick={() => this.handleOnFilterButtonClick('All')}
                    >
                        All
                    </button>
                    <button
                        type="button"
                        name="Active"
                        onClick={() => this.handleOnFilterButtonClick('Active')}
                    >
                        Active
                    </button>
                    <button
                        type="button"
                        name="Done"
                        onClick={() => this.handleOnFilterButtonClick('Done')}
                    >
                        Done
                    </button>
                </div>

                <InputForm onSubmit={this.handleOnSubmit} />
                <ul className="todo-list">
                    {todos
                        .filter((todo) => filterStatus === 'All'
                            || (filterStatus === 'Active' && !todo.isFinished)
                            || (filterStatus === 'Done' && todo.isFinished))
                        .filter((todo) => todo.title.includes(filterText))
                        .map((todo) => (
                            <TodoItem
                                key={todo.id}
                                id={todo.id}
                                title={todo.title}
                                isFinished={todo.isFinished}
                                isImportant={todo.isImportant}
                                onDelete={this.handleOnDelete}
                                onToggleIsFinished={this.handleToggleFinished}
                                onToggleIsImportant={this.handleToggleImportant}
                            />
                        ))}
                </ul>
            </div>
        );
    }
}

export default App;

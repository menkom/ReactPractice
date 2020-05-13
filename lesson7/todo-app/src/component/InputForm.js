import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {ReactComponent as TodoIcon} from '../img/todo-icon.svg';

export class InputForm extends PureComponent {

    state = {
        title: '',
    };

    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };

    handleOnSubmit = (event) => {
        // по умолчанию сабмит формы перезагружает страницу
        // и если в функии обработки сабмита первой строчкой поставить event.preventDefault(),
        // то страница не перезагрузится
        event.preventDefault();
        const {onSubmit} = this.props;
        const {title} = this.state;
        console.log('InputForm.handleSubmit');
        console.log('InputForm.handleSubmit', 'this.state.title', this.state.title);
        onSubmit(title);
        this.setState({title: ''});
    };

    handleOnChange = (event) => {
        console.log('handleOnChange');
        this.setState({[event.target.name]: event.target.value});
    };


    render() {
        const {title} = this.state;

        return (
            <form onSubmit={this.handleOnSubmit} className="form-input">
                <TodoIcon className="input-icon"/>
                <input
                    type="text"
                    name="title"
                    placeholder="share your plans with me"
                    value={title}
                    maxLength="150"
                    onChange={this.handleOnChange}
                    className="input-field"
                />
                <button type="submit" disabled={title.length === 0} className="input-button">Create todo</button>
            </form>
        );
    }
}
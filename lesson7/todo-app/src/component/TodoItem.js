import PropTypes from 'prop-types';
import React from 'react';
import './styles.css';
import {ReactComponent as TrashIcon} from '../img/send-to-trash.svg';
import {ReactComponent as ImportantEmptyIcon} from '../img/star-empty.svg';
import {ReactComponent as ImportantFullIcon} from '../img/star-full.svg';

export default class TodoItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isMouseOver: false,
        };
    }

    handleOnDelete = (event) => {
        event.stopPropagation();
        const {id, onDelete} = this.props;
        onDelete(id);
    };

    handleOnToggleIsFinished = () => {
        const {id, onToggleIsFinished} = this.props;
        onToggleIsFinished(id);
    };

    handleOnToggleIsImportant = (event) => {
        // дефолтное поведение, когда у тебя есть обработчик какого-то события(например клика)
        // у родителя и у ребенка, то сначала вызовется обработчик у ребенка, затем у родителя,
        // и так до самого корня дерева
        event.stopPropagation();
        const {id, onToggleIsImportant} = this.props;
        onToggleIsImportant(id);
    };

    handleMouseOver = () => {
        this.setState({
            isMouseOver: true,
        });
    };

    handleMouseOut = () => {
        this.setState({
            isMouseOver: false,
        });
    };

    handleKeyPress = (event) => {
        // 13 - Кпонка Enter
        if (event.charCode === 13 || event.charCode === 32) {
            this.handleOnToggleIsFinished();
        }
    };

    render() {
        const {title, isFinished, isImportant} = this.props;
        const {isMouseOver} = this.state;
        return (
            <div
                role="button"
                tabIndex="0"
                className="todo-item"
                onClick={this.handleOnToggleIsFinished}
                onMouseEnter={this.handleMouseOver}
                onMouseLeave={this.handleMouseOut}
                onKeyPress={this.handleKeyPress}
            >
                {isImportant && (<ImportantFullIcon className="icon" />)}
                <li
                    className={`todo-text${
                        isFinished ? ' todo-text-strike' : ''
                    }${isImportant ? ' todo-text-important' : ''}`}
                >
                    {title}
                </li>
                {isMouseOver && (
                    <div>
                        <button type="button" onClick={this.handleOnToggleIsImportant} className="button">
                            {isImportant
                                ? <ImportantEmptyIcon className="icon" />
                                : <ImportantFullIcon className="icon" />}
                        </button>
                        <button type="button" onClick={this.handleOnDelete} className="button">
                            <TrashIcon className="icon" />
                        </button>
                    </div>
                )}
            </div>
        );
    }
}

TodoItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    isFinished: PropTypes.bool.isRequired,
    onToggleIsFinished: PropTypes.func.isRequired,
    isImportant: PropTypes.bool.isRequired,
    onToggleIsImportant: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};

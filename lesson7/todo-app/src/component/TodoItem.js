import PropTypes from 'prop-types';
import React from 'react';
import './styles.css';
import {ReactComponent as TrashIcon} from '../img/send-to-trash.svg';
import {ReactComponent as ImportantEmptyIcon} from '../img/star-empty.svg';
import {ReactComponent as ImportantFullIcon} from '../img/star-full.svg';

export class TodoItem extends React.PureComponent {

    state = {
        isMouseOver: false,
    };

    static propTypes = {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        isFinished: PropTypes.bool.isRequired,
        onToggleIsFinished: PropTypes.func.isRequired,
        isImportant: PropTypes.bool.isRequired,
        onToggleIsImportant: PropTypes.func.isRequired,
        onDelete: PropTypes.func.isRequired,
    };

    handleOnDelete = () => {
        const {id, onDelete} = this.props;
        console.log('TodoItem.handleOnDelete.id:', id);
        onDelete(id);
    };

    handleOnToggleIsFinished = () => {
        const {id, onToggleIsFinished} = this.props;
        console.log('TodoItem.handleOnToggleIsFinished.id:', id);
        onToggleIsFinished(id);
    };

    handleOnToggleIsImportant = (event) => {
        //дефолтное поведение, когда у тебя есть обработчик какого-то события(например клика) у родителя и у ребенка,
        // то сначала вызовется обработчик у ребенка, затем у родителя, и так до самого корня дерева
        event.stopPropagation();
        const {id, onToggleIsImportant, isImportant} = this.props;
        console.log('TodoItem.handleOnToggleIsImportant.id:', id);
        console.log('TodoItem.handleOnToggleIsImportant.isImportant1:', isImportant);
        onToggleIsImportant(id);
        console.log('TodoItem.handleOnToggleIsImportant.isImportant2:', isImportant);
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

    render() {
        const {title, isFinished, isImportant} = this.props;
        const {isMouseOver} = this.state;
        return (
            <div className="todo-item"
                 onClick={this.handleOnToggleIsFinished}
                 onMouseEnter={this.handleMouseOver}
                 onMouseLeave={this.handleMouseOut}>
                {isImportant && (<ImportantFullIcon className="icon"/>)}
                <li className={"todo-text" + (isFinished ? " todo-text-strike" : "") + (isImportant ? " todo-text-important" : "")}>
                    {title}
                </li>
                {isMouseOver && (
                    <div>
                        <button type="button" onClick={this.handleOnToggleIsImportant} className="button">
                            {isImportant ?
                                <ImportantEmptyIcon className="icon"/> :
                                <ImportantFullIcon className="icon"/>}
                        </button>
                        <button type="button" onClick={this.handleOnDelete} className="button">
                            <TrashIcon className="icon"/>
                        </button>
                    </div>
                )}
            </div>
        );
    }
}
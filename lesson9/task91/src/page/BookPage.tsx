import React from 'react';
import Header from "../header/Header";
import {getBookStorage} from "../storage/BookStorage";
import {RouteComponentProps} from 'react-router-dom';
import {IMatchParams} from '../core/IMatchParams';

interface IBookPageProps extends RouteComponentProps<IMatchParams> {

}

interface IBookPageState {
    id?: string;
    name?: string;
    description?: string;
}

export class BookPage extends React.Component<IBookPageProps, IBookPageState> {

    state: IBookPageState = {};

    componentDidMount() {
        const {id} = this.props.match.params;
        if (id !== undefined) {
            this.setState({...getBookStorage(id)})
        }
    }

    render() {
        const {name, description} = this.state;
        return (
            <div>
                <Header/>
                <div>
                    Name: {name}<p/>
                    Description: {description}<p/>
                </div>
            </div>);
    }
}
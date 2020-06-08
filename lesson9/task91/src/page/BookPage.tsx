import React from 'react';
import Header from "../header/Header";
import {getBookStorage} from "../storage/BookStorage";
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {IMatchParams} from '../core/IMatchParams';

interface IBookPageProps extends RouteComponentProps<IMatchParams> {
    isLoggedIn: boolean;

    toggleLogin(): void;
}

interface IBookPageState {
    id?: string;
    name?: string;
    description?: string;
}

class BookPage extends React.Component<IBookPageProps, IBookPageState> {

    state: IBookPageState = {};

    componentDidMount() {

        const {match} = this.props;
        const {params} = match;
        const {id} = params;
        if (id !== undefined) {
            this.setState({...getBookStorage(id)})
        }
    }

    render() {
        const {name, description} = this.state;
        console.log('BookPage:', this.props);

        return (
            <div>
                <Header {...this.props}/>
                <div>
                    Name: {name}<p/>
                    Description: {description}<p/>
                </div>
            </div>);
    }
}

export default withRouter(BookPage);
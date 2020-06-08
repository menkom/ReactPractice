import React from 'react';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import style from './styles';
import MainPage from "./page/MainPage";
import Books from "./page/Books";
import Cart from "./page/Cart";
import Login from "./page/Login";
import BookPage from "./page/BookPage";

interface IAppState {
    isLoggedIn: boolean;
}

interface IAppProps {
}

export class App extends React.Component<IAppProps, IAppState> {

    state: IAppState = {
        isLoggedIn: false,
    }

    toggleLogin = () => {
        this.setState({isLoggedIn: !this.state.isLoggedIn})
    }

    render() {
        console.log('App:', this.state);
        const {isLoggedIn} = this.state;
        return (
            <div style={style.applicationContainer}>
                <BrowserRouter>
                    <Switch>
                        <Route exact
                               path='/'
                               render={() => <MainPage isLoggedIn={isLoggedIn} toggleLogin={this.toggleLogin}/>}
                        />
                        <Route exact
                               path='/books'
                               render={() => <Books isLoggedIn={isLoggedIn} toggleLogin={this.toggleLogin}/>}
                        />
                        <Route path='/books/:id'
                               render={
                                   (props) =>
                                       <BookPage isLoggedIn={isLoggedIn}
                                                 toggleLogin={this.toggleLogin} {...props}/>
                               }
                        />
                        <Route path='/cart'
                               render={(props) => (
                                   isLoggedIn
                                       ? <Cart isLoggedIn={isLoggedIn} toggleLogin={this.toggleLogin} {...props}/>
                                       : <Redirect to='/login'/>)
                               }
                               exact/>
                        <Route path='/login' exact
                               render={
                                   () => (
                                       isLoggedIn
                                           ? (<Redirect to='/'/>)
                                           : (<Login isLoggedIn={isLoggedIn} toggleLogin={this.toggleLogin}/>)
                                   )
                               }/>
                        <Redirect to='/' from='*'/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;

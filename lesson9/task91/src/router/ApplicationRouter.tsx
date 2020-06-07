import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {MainPage} from "../page/MainPage";
import {Books} from "../page/Books";
import {Cart} from "../page/Cart";
import {BookPage} from "../page/BookPage";

export const ApplicationRouter: React.FunctionComponent = () => (
    <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route exact path='/books' component={Books}/>
        <Route path='/books/:id' component={BookPage}/>
        <Route path='/cart' component={Cart} exact/>
        <Redirect to='/' from='*'/>
    </Switch>
);
import React from 'react';
import {Redirect, Route, Switch} from 'react-router-dom';
import {MainPage} from "../component/MainPage";
import {Books} from "../component/Books";
import {Cart} from "../component/Cart";

export const ApplicationRouter: React.FunctionComponent = () => (
    <Switch>
        <Route exact path='/' component={MainPage}/>
        <Route path='/books' component={Books}/>
        <Route path='/cart' component={Cart} exact/>
        <Redirect to='/' from='*'/>
    </Switch>
);
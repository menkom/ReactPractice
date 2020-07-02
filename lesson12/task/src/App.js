import React from 'react';
import PostList from "./components/PostList";
import PostItem from "./components/PostItem";
import {Redirect, Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <div style={{textAlign: 'center'}}>
            <BrowserRouter>
                <Switch>
                    <Route
                        exact
                        path='/'
                        component={PostList}
                    />
                    <Route
                        exact
                        path='/post/:id'
                        component={PostItem}
                    />
                    <Redirect to='/' from='*'/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;

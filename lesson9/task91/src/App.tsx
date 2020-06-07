import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {ApplicationRouter} from "./router/ApplicationRouter";
import style from './styles';

function App() {
    return (
        <div style={style.applicationContainer}>
            <BrowserRouter>
                <Route component={ApplicationRouter}/>
            </BrowserRouter>
        </div>
    );
}

export default App;

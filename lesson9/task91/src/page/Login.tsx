import React from 'react';
import Header from "../header/Header";
import style from "../styles";
import {RouteComponentProps, withRouter} from "react-router-dom";

interface ILoginProps extends RouteComponentProps {
    isLoggedIn: boolean;

    toggleLogin(): void;
}

const Login: React.FunctionComponent<ILoginProps> = (props) => {

    const {toggleLogin} = props;

    return (
        <div>
            <Header {...props}/>
            <div style={style.pageTitle}>
                Login
            </div>
            <div style={style.pageContent}>
                <button onClick={toggleLogin}>Login</button>
            </div>
        </div>
    );
}

export default withRouter(Login);
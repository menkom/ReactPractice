import React from 'react';
import Header from "../header/Header";
import style from "../styles";
import {RouteComponentProps, withRouter} from "react-router-dom";

interface ICartProps extends RouteComponentProps {
    isLoggedIn: boolean;

    toggleLogin(): void;
}

export const Cart: React.FunctionComponent<ICartProps> = (props: ICartProps) => {

    console.log('Cart:', props);

    return (
        <div>
            <Header isLoggedIn={props.isLoggedIn} toggleLogin={props.toggleLogin}/>
            <div style={style.pageTitle}>
                Cart
            </div>
            <div style={style.pageContent}>
                There are no items in your cart.
            </div>
        </div>
    );
}

export default withRouter(Cart);
import React from 'react';
import Header from "../header/Header";
import style from "../styles";

export const Cart: React.FunctionComponent = () => (
    <div>
        <Header/>
        <div style={style.pageTitle}>
            Cart
        </div>
        <div style={style.pageContent}>
            There are no items in your cart.
        </div>
    </div>
);

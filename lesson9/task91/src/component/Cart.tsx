import React from 'react';
import Header from "../header/Header";
import style from "../styles";

export class Cart extends React.Component<any, any> {

    render() {
        return (
            <div>
                <Header/>
                <div style={style.pageTitle}>
                    Cart
                </div>
                <div style={style.pageContent}>
                    Cart
                </div>
            </div>
        );
    }
}
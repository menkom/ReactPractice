import React from 'react';
import Header from "../header/Header";
import style from "../styles";

export class Books extends React.Component<any, any> {

    render() {
        return (
            <div>
                <Header/>
                <div style={style.pageTitle}>
                    Books
                </div>
                <div style={style.pageContent}>
                    Books
                </div>
            </div>
        );
    }
}
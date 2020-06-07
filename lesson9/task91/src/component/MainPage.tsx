import React from 'react';
import style from '../styles';
import {MainMenuItem} from "./MainPageItem";

export class MainPage extends React.Component<any, any> {

    render() {
        return (<div>
            <table style={style.formTable}>
                <tbody>
                <tr>
                    <td>
                        <div style={style.pageTitle}>
                            Main
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <MainMenuItem link="/books" name='Books'/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <MainMenuItem link="/cart" name='Cart'/>
                    </td>
                </tr>
                </tbody>

            </table>

        </div>);
    }
}
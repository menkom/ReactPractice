import {RouteComponentProps, withRouter} from 'react-router-dom';
import React from "react";
import {HeaderItem} from "./HeaderItem";
import style from '../styles';

interface IHeaderState {

}

class Header extends React.Component<RouteComponentProps, IHeaderState> {
    render() {
        return (
            <nav>
                <table style={style.headerTable}>
                    <tbody>
                    <tr>
                        <td>
                            <HeaderItem link='/' name='Main'/>
                        </td>
                        <td>
                            <HeaderItem link="/books" name='Books'/>
                        </td>
                        <td>
                            <HeaderItem link="/cart" name='Cart'/>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </nav>
        )
    }
}

export default withRouter(Header);
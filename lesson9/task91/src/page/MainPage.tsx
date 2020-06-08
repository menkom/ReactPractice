import React from 'react';
import style from '../styles';
import {MainMenuItem} from "../component/MainPageItem";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {IMatchParams} from "../core/IMatchParams";

interface IMainPageProps extends RouteComponentProps<IMatchParams> {
    isLoggedIn: boolean;

    toggleLogin(): void;
}

const MainPage: React.FunctionComponent<IMainPageProps> = (props: IMainPageProps) => {
    const {isLoggedIn, toggleLogin} = props;
    console.log('MainPage:', props);

    return (
        <div>
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
                {!isLoggedIn && <tr>
                    <td>
                        < MainMenuItem link="/login" name='Login'/>
                    </td>
                </tr>}
                {isLoggedIn && <tr>
                    <td>
                        <button onClick={toggleLogin}>
                            Log out
                        </button>
                    </td>
                </tr>}
                </tbody>

            </table>

        </div>
    );
}

export default withRouter(MainPage);
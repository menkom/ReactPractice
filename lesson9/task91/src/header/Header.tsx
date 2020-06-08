import React from "react";
import {HeaderItem} from "./HeaderItem";
import style from '../styles';

interface IHeaderProps {
    isLoggedIn: boolean;

    toggleLogin(): void;
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
    const {isLoggedIn, toggleLogin} = props;
    console.log('Header:', props);

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
                    {!isLoggedIn && <td>
                        <HeaderItem link="/login" name='Login'/>
                    </td>}
                    {isLoggedIn && <td>
                        <button onClick={toggleLogin} style={style.link}>
                            Log out
                        </button>
                    </td>}
                </tr>
                </tbody>
            </table>
        </nav>
    );
};

export default Header;
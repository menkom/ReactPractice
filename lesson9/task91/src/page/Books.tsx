import React from 'react';
import Header from "../header/Header";
import style from "../styles";
import {BookStorage} from "../storage/BookStorage";
import {BookItem} from "../component/BookItem";
import {RouteComponentProps, withRouter} from "react-router-dom";

interface IBooksProps extends RouteComponentProps {
    isLoggedIn: boolean;

    toggleLogin(): void;
}

const Books: React.FunctionComponent<IBooksProps> = (props) => {

    console.log('Books:', props);

    return (
        <div>
            <Header {...props}/>
            <div style={style.pageTitle}>
                Books
            </div>
            <div style={style.pageContent}>
                <table>
                    <tbody>
                    {BookStorage.map(book =>
                        <tr key={book.id}>
                            <td>
                                <BookItem {...book}/>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default withRouter(Books);
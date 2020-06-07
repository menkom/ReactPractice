import React from 'react';
import Header from "../header/Header";
import style from "../styles";
import {BookStorage} from "../storage/BookStorage";
import {BookItem} from "../component/BookItem";

export const Books: React.FunctionComponent = () => (
    <div>
        <Header/>
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

import React from 'react';
import {IBook} from "../entity/IBook";
import {Link} from "react-router-dom";


export const BookItem: React.FunctionComponent<IBook> = ({id, name}) => (
    <div>
        <Link to={`/books/${id}`}>
            Book name: {name}
        </Link>
    </div>
);
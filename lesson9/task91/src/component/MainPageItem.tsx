import React from 'react';
import {Link} from 'react-router-dom';
import style from '../styles';

interface IMainMenuItem {
    link: string;
    name: string;
}

export const MainMenuItem: React.FunctionComponent<IMainMenuItem> = ({link, name}) => (
    <div style={style.mainMenuItem}>
        <Link to={link} style={style.link}>
            {name}
        </Link>
    </div>
);
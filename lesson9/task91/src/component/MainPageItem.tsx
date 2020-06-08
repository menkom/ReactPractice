import React from 'react';
import {Link} from 'react-router-dom';
import style from '../styles';

interface IMainMenuItemProps {
    link: string;
    name: string;
}

export const MainMenuItem: React.FunctionComponent<IMainMenuItemProps> = ({link, name}) => (
    <div style={style.mainMenuItem}>
        <Link to={link} style={style.link}>
            {name}
        </Link>
    </div>
);
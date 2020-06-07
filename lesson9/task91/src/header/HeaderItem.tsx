import React from "react";
import {Link} from "react-router-dom";
import style from "../styles";

interface IHeaderItemProps {
    name: string;
    link: string;
}

export const HeaderItem: React.FunctionComponent<IHeaderItemProps> = ({name, link}) => (
    <Link to={link} style={style.link}>
        {name}
    </Link>
);
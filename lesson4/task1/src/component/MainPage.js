import React from "react";
import PropTypes from "prop-types";
import {Header} from "./Header";
import {Footer} from "./Footer";
import dogPicture from '../resources/dog.jpg';
import catPicture from '../resources/cat.jfif';

export function MainPage({name, isCat, isGoodWeather}) {
    return (
        <div>
            <Header/>
            <h1 align="center">Hello, {name}.</h1>
            <div align="center">
                <img width="640" height="480" src={isCat ? catPicture : dogPicture}
                     alt={isCat ? "Cat" : "Dog"}/>
            </div>
            {isGoodWeather && <h2 align="center">Weather is fine today</h2>}
            <Footer/>
        </div>)
}

MainPage.defaultProps = {
    name: 'you need to fill name property'
};
MainPage.propTypes = {
    name: PropTypes.string.isRequired,
    isCat: PropTypes.bool.isRequired,
    isGoodWeather: PropTypes.bool.isRequired,
};
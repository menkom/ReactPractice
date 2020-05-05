import React, {Component} from "react";
import {FruitsList} from "./FruitsList";
import {ErrorBoundary} from "./ErrorBoundary";

export class MainPage extends Component {

    fruits = ["orange", "lemon", "grapefruit", "grapes"];

    render() {
        return (
            <div align="center">
                Fruits list:
                <ErrorBoundary>
                    <FruitsList fruits={this.fruits}/>
                </ErrorBoundary>
            </div>
        );
    }
}
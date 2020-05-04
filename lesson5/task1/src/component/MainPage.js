import React, {Component} from "react";

class MainPage extends Component {

    state = {
        value: 0
    };

    plusValue = () => {
        this.setState(prevState => ({
            value: prevState.value + 1
        }));
    };

    minusValue = () => {
        this.setState(prevState => ({
            value: prevState.value - 1
        }));
    };

    render() {
        return (
            <div>
                <label>Value:{this.state.value}</label>
                <button onClick={this.minusValue}>Minus</button>
                <button onClick={this.plusValue}>Plus</button>
            </div>
        );
    }
}

export default MainPage;
import React, {Component} from "react";
import PropTypes from 'prop-types';

export class FruitsList extends Component {

    static defaultProps = {
        fruits: []
    };

    static propTypes = {
        fruits: PropTypes.array.isRequired
    };

    render() {
        const {fruits} = this.props;
        return (
            <ul>
                {fruits.map(fruit => <li key={null}>{fruit}</li>)}
            </ul>
        );
    }
}
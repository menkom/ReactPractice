import React, {PureComponent} from "react";

export class ErrorBoundary extends PureComponent {
    state = {
        error: null
    };

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: error
        });
    }

    render() {
        const {error} = this.state;
        const {children} = this.props;

        return (error ? <p>Something went wrong.</p> : children);
    }
}
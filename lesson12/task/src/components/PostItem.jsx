import React from 'react';
import {getPost} from "../reducers/posts/selector";
import {getPostById} from "../reducers/posts/thunk";
import {connect} from "react-redux";
import {withRouter} from "react-router";

class PostItem extends React.Component {

    componentDidMount() {
        const {id} = this.props.match.params;
        if (id) {
            this.props.updatePost(id);
        }
    }

    render() {
        const {id, title, body} = this.props.post;
        return (<div>
                <div><b>id:</b> {id}</div>
                <div><b>title:</b> {title}</div>
                <div><b>body:</b> {body}</div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        post: getPost(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updatePost: (id) => dispatch(getPostById(id)),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostItem));
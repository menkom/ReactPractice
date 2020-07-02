import React from "react";
import {getPostList} from "../reducers/posts/selector";
import {connect} from "react-redux";
import {getAllPosts} from "../reducers/posts/thunk";
import {PostListRow} from "./PostListRow";
import {withRouter} from "react-router";

class PostList extends React.Component {

    componentDidMount() {
        this.props.updateAll();
    }

    render() {
        console.log('PostList.props.postList:', this.props.postList);

        return (
            <table>
                <tbody>
                {
                    this.props.postList.map(
                        (post) =>
                            <PostListRow
                                key={post.id}
                                history={this.props.history}
                                {...post}
                            />)
                }
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        postList: getPostList(state),
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateAll: () => dispatch(getAllPosts()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostList));
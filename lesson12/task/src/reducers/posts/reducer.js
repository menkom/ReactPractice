import {PostActionType} from "./actions";

const initialState = {
    postList: [],
    post: {},
}

//reducers
const postsReducer = (state = initialState, action) => {
    console.log('postsReducer.state:', state);
    console.log('postsReducer.action:', action);
    switch (action.type) {
        case PostActionType.updateAll:
            return {
                ...state,
                postList: action.payload,
            }
        case PostActionType.updatePost:
            return {
                ...state,
                post: action.payload,
            }
        default:
            return state;
    }
};

export default postsReducer;
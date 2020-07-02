import {PostActionType} from "../reducers/posts/actions";

const logger = (store) => (next) => (action) => {
    console.log("store", store);
    console.log("next", next);
    console.log("action", action);
    if (action.type === PostActionType.updateAll || action.type === PostActionType.updatePost) {
        action.payload.complete = true
        return next(action);
    } else {
        return next(action);
    }
};

export default logger;

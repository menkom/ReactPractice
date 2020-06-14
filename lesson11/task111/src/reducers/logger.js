import {UserOperationType} from "./users";

const logger = (store) => (next) => (action) => {
    console.log("store", store);
    console.log("next", next);
    console.log("action", action);
    if (action.type === UserOperationType.updateAllUsers) {
        action.payload.complete = true
        return next(action);
    } else {
        return next(action);
    }
};

export default logger;

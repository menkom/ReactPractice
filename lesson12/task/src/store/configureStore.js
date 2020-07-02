import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import logger from '../middleware/logger';
import thunk from 'redux-thunk';

const configureStore = createStore(
    rootReducer,
    compose(
        applyMiddleware(logger),
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

export default configureStore;

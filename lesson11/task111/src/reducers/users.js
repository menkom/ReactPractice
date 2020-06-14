import axios from 'axios';

const initialState = {
    users: [],
};

const UserOperationType = {
    updateAllUsers: 'UPDATE_ALL_USERS',
    deleteUser: 'DELETE_USER',
};

//reducers
const users = (state = initialState, action) => {
    switch (action.type) {
        case UserOperationType.updateAllUsers:
            return {
                ...state,
                users: action.payload,
            }
        case UserOperationType.deleteUser:
            return {
                ...state,
                users: state.users.filter(item => item.id !== action.payload),
            }
        default:
            return state;
    }
};

//actions
const updateAllUsers = () => (dispatch) => {
    axios.get('https://jsonplaceholder.typicode.com/users')
        // .then(res => console.log(res.data))
        .then(
            (result) => dispatch(
                {
                    type: UserOperationType.updateAllUsers,
                    payload: result.data,
                }
            )
        )
};

const deleteUser = (userId) => {
    return {
        type: UserOperationType.deleteUser,
        payload: userId,
    }
}

//selectors
const getUsers = state => state.users.users;

export default users;

export {
    updateAllUsers,
    deleteUser,
    getUsers,
    UserOperationType
}

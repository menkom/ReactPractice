import axios from 'axios';
import {updateAll, updatePost} from "./actions";

export function getAllPosts() {
    console.log('thunk.getAllPosts');
    return (dispatch) => {
        return axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((response) => {
                    if (!response.data) {
                        console.log('Error receiving Search List.');
                    }
                    return dispatch(updateAll(response.data));
                }
            )
            .catch((e) => console.log(e));
    }
}

export function getPostById(id) {
    console.log('thunk.getPostById:', id);
    return (dispatch) => {
        return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then((response) => {
                    if (!response.data) {
                        console.log('Error receiving Search List.');
                    }
                    return dispatch(updatePost(response.data));
                }
            )
            .catch((e) => console.log(e));
    }
}

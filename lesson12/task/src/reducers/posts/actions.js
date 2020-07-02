export const PostActionType = {
    updateAll: 'UPDATE_ALL_POSTS',
    updatePost: 'UPDATE_POST',
};

export function updateAll(postList) {
    console.log('actions.updateAll:', postList);
    return {
        type: PostActionType.updateAll,
        payload: postList,
    }
}

export function updatePost(post) {
    return {
        type: PostActionType.updatePost,
        payload: post,
    }
}

import * as api from '../api';

// Action creators - functions that create actions
// Action is an object that has type and payload
// below code is with redux-thunk.
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error);
    }
    // const action = { type: 'FETCH_ALL', payload: [] }
    // dispatch(action);
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);

        dispatch({ type: 'UPDATE', payload: data })
    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try{
        await api.deletePost(id);

        dispatch({type: 'DELETE', payload: id});
    } catch (error) {
        console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await api.likePost(id);

        dispatch({ type: 'UPDATE', payload: data })

    } catch(error) {
        console.log(error);
    }
}
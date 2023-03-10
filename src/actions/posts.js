import * as api from '../api';

// Action creators - functions that create actions
// Action is an object that has type and payload
// below code is with redux-thunk.
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
    // const action = { type: 'FETCH_ALL', payload: [] }
    // dispatch(action);
}
export default (posts = [], action) => {
    // if(action == 'CREATE') {
    // }
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
};
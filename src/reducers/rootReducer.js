import { act } from "react-dom/test-utils";

const initState = {
    posts: [
        { id: '1', title: 'the workshop ', body: 'this is body no 1' },
        { id: '2', title: 'the workshop 2', body: 'this is body no 2' },
        { id: '3', title: 'the workshop 3', body: 'this is body no 3' }
    ]
}

const rootReducer = (state = initState, action) => {
   
    if(action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post =>{
            return action.id !== post.id
        });
        return {
            ...state,
            posts: newPosts
        }
    }

    return state;
}

export default rootReducer;
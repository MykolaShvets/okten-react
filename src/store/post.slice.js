import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {postService} from "../services/post.service";


export const getPosts = createAsyncThunk(
    'postSlice/getPosts',
    async (_, {dispatch}) =>{
        try {
            const allPosts = await postService.getAll();
            dispatch(getAllPosts({data:allPosts}))
        }catch (e){
            console.log(e)
        }
    }
)


const postSlice = createSlice({
    name: 'postSlice',
    initialState:{
        posts: []
    },
    reducers:{
        getAllPosts: (state, action) => {
            state.posts = action.payload.data
        }

    }
})


const postReducer = postSlice.reducer;

export const {getAllPosts} = postSlice.actions

export default postReducer

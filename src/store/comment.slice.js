import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {commentService} from "../services/comment.service";


export const getComments = createAsyncThunk(
    'commentSlice/getComments',
    async (_, {dispatch}) =>{
        try {
            const allComments = await commentService.getAll();
            dispatch(getAllComments({data:allComments}))
        }catch (e){
            console.log(e)
        }
    }
)


const commentSlice = createSlice({
    name: 'commentSlice',
    initialState:{
        comments: []
    },
    reducers:{
        getAllComments: (state, action) => {
            state.comments = action.payload.data
        }

    }
})


const commentReducer = commentSlice.reducer;

export const {getAllComments} = commentSlice.actions

export default commentReducer

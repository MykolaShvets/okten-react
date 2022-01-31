import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {userService} from "../services/user.service";


export const getUsers = createAsyncThunk(
    'userSlice/getUsers',
    async (_, {dispatch}) =>{
        try {
           const allUsers = await userService.getAll();
           dispatch(getAllUsers({data:allUsers}))
        }catch (e){
            console.log(e)
        }
    }
)


const userSlice = createSlice({
    name: 'userSlice',
    initialState:{
        users: []
    },
    reducers:{
    getAllUsers: (state, action) => {
        state.users = action.payload.data
    }

    }
})


const userReducer = userSlice.reducer;

export const {getAllUsers} = userSlice.actions

export default userReducer

import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {carService} from "../services/car.service";


export const getAllCars = createAsyncThunk(
    'carSlice/getAllCars',
    async (_, {rejectWithValue}) => {
        try {
            return await carService.getAll()
        } catch (e) {
            return rejectWithValue(e.message)
        }
    }
);

export const createCar = createAsyncThunk(
    'carSlice/createCar',
    async ({data}, {dispatch}) => {
        try {
            const newCar = await carService.create(data);
            dispatch(addCar({data: newCar}))
        } catch (e) {
            return e.response.data
        }}
)

export const deleteCarThunk = createAsyncThunk(
    'carSlice/deleteCarThunk',
    async ({id}, {dispatch}) => {
        try {
            await carService.deleteById(id)
            dispatch(deleteCar({id}))
        } catch (e) {
            console.log(e.message);
        }
    }
)


export const updateCarThunk = createAsyncThunk(
    'carSlice/updateCarThunk',
    async ({id, data}) => {
        try {

             return await carService.updateById(id, data)

        } catch (e) {
            return e.response.data
        }
    }
)

const carSlice = createSlice({
    name: 'carSlice',
    initialState: {
        cars: [],
        carForUpdate: {},
        status: null,
        error: null
    },
    reducers: {
        addCar: (state, action) => {
            state.cars.push(action.payload.data)
        },
        deleteCar: (state, action) => {
            state.cars = state.cars.filter(car => car.id !== action.payload.id)
        },

        getCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload.car
        },

    },
    extraReducers: {
        [getAllCars.pending]: (state, action) => {
            state.status = 'pending'
            state.error = null
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'fulfilled'
            state.cars = action.payload
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        },

        [updateCarThunk.fulfilled]: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id)
            state.cars[index] = {...action.payload}
            state.carForUpdate = {}
        }
    }
})


const carReducer = carSlice.reducer;

export const {addCar, deleteCar, getCarForUpdate} = carSlice.actions;
export default carReducer;

import {Dispatch} from 'redux'
import {authAPI} from '../api/todolists-api'
import {setIsLoggedInAC} from '../features/Login/auth-reducer'
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export type InitialStateType = {
    status: string
    error: string | null
    isInitialized: boolean
}

const slice = createSlice({
    name: 'app',
    initialState: {
        status: 'idle',
        error: null as null | string,
        isInitialized: false
    },
    reducers: {
        setAppInitializedAC: (state, action: PayloadAction<{isInitialized: boolean}>) => {
            state.isInitialized = action.payload.isInitialized
        },
        setAppStatusAC: (state, action: PayloadAction<RequestStatusType>) => {
            state.status = action.payload
        },
        setAppErrorAC: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload
        }
    }
})

export const appReducer = slice.reducer;
export const {setAppInitializedAC, setAppStatusAC, setAppErrorAC} = slice.actions;

//thunkCreators
export const initializeAppTC = () => (dispatch: Dispatch) => {
    authAPI.me().then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setIsLoggedInAC({value: true}));
        } else {

        }
        dispatch(setAppInitializedAC({isInitialized: true}));
    })
}

//type
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>

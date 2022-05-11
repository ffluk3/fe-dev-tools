import {createSlice} from "@reduxjs/toolkit";
import {initialState} from "../interactions-slice/reducer";

export const interactionsSlice = createSlice({
    name: 'interactionsNew',
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        emitAction: (state, action) => {
            state.emittedActions.push(action.payload.actionName)
        }
    }
})

export const { increment, decrement, emitAction } = interactionsSlice.actions

export default interactionsSlice.reducer
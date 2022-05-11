import { reducers as rootReducer } from './reducers';
import {configureStore} from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
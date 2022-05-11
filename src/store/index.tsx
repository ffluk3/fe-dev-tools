import { reducers as rootReducer } from './reducers';
import {configureStore} from "@reduxjs/toolkit";

// import loggerMiddleware from '../middleware/logger';

export const store = configureStore({
    reducer: rootReducer,
    middleware: [],
})
export type RootState = ReturnType<typeof store.getState>
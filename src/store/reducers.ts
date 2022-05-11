import * as Interactions from '../interactions-slice'
import {combineReducers} from "redux";

export const reducers = combineReducers({
    interactions: Interactions.reducer,
})

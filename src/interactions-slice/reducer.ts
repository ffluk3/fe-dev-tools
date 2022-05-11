import {Reducer} from "redux";
import {InteractionsAction, InteractionsActionTypes, InteractionsState} from "./types";

export const initialState: InteractionsState = {
    count: 0,
    emittedActions: []
}

export const reducer: Reducer<InteractionsState, InteractionsAction> = (state = initialState, action) => {
    // Create a copy of the state
    const newState = {...state}

    switch (action.type) {
        case InteractionsActionTypes.DECREMENT:
            newState.count -= 1;
            break;
        case InteractionsActionTypes.INCREMENT:
            newState.count += 1;
            break;
        case InteractionsActionTypes.EMITTED:
            newState.emittedActions = [...newState.emittedActions, action?.payload?.actionName || "not-found"]
            break;
    }


    return newState
}
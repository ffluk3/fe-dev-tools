import {InteractionsAction, InteractionsActionTypes} from "./types";

export const increment = (): InteractionsAction => ({
    type: InteractionsActionTypes.INCREMENT
})

export const decrement = (): InteractionsAction => ({
    type: InteractionsActionTypes.DECREMENT
})

export const emitAction = (actionName: string): InteractionsAction => ({
    type: InteractionsActionTypes.EMITTED,
    payload: {
        actionName
    }
})
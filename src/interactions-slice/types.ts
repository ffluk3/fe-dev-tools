
export enum InteractionsActionTypes {
    INCREMENT = "Interactions/INCREMENT",
    DECREMENT = "Interactions/DECREMENT",
    EMITTED = "Interactions/EMITTED",

}

export interface InteractionsAction {
    type: InteractionsActionTypes;
    payload?: {
        actionName: string
    }
}

export interface InteractionsState {
    count: number;
    emittedActions: string[]
}
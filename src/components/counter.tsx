import React from 'react';

import {decrement, increment, InteractionsAction} from "../interactions-slice";
import {connect} from "react-redux";
import {RootState} from "../store";
import {Dispatch} from "redux";

interface PropsT {
    increment: () => InteractionsAction;
    decrement: () => InteractionsAction;
    count: number

}

export const Counter: React.FC<PropsT> = ({ increment, decrement, count }) => {
    // Get the count

    return (
        <>
            Count: {count}
            <button onClick={() => increment()}>Increment</button>
            <button onClick={() => decrement()}>Decrement</button>
        </>
    )
}

const mapStateToProps = (state: RootState) => ({
    count: state.interactions.count
})

const mapDispatchToProps = (dispatch: Dispatch) => ({
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
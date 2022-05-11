import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../store";
import {decrement, increment} from "../interactions-slice";


export const Counter: React.FC = () => {
    // Get the count
    const count = useSelector((state: RootState) => state.interactions.count)
    const dispatcher = useDispatch()

    return (
        <>
            Count: {count}
            <button onClick={() => dispatcher(increment())}>Increment</button>
            <button onClick={() => dispatcher(decrement())}>Decrement</button>
        </>
    )
}
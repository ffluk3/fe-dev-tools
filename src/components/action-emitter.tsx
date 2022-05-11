import React from 'react';
import {useDispatch} from "react-redux";
import {emitAction} from "../interactions-slice";
import styled from "@emotion/styled";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
`

export const ActionEmitter: React.FC = () => {
    const dispatcher = useDispatch()

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = document.getElementById("action-form") as HTMLFormElement;

        if(form) {
            const data = new FormData(form);

            dispatcher(
                emitAction(data.get("type")?.toString() || "")
            )
        }


    }

    return (
        <StyledForm id="action-form" onSubmit={onSubmit}>
            <input name="type" type="text" />
            <button type="submit">Dispatch Action Type</button>
        </StyledForm>
    )
}
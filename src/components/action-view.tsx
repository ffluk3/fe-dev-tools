

import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../store";
import styled from "@emotion/styled";

const CodeBlock = styled.code`
    min-width: 200px;
    border: solid 1px white;
    overflow: scroll;
    height: 100%;
`

export const ActionView: React.FC = () => {
    const emittedActions = useSelector((state: RootState) => state.interactions.emittedActions)

    return (
        <CodeBlock>
            {emittedActions.map((action: string) => <pre key={action}>{action}</pre>)}
        </CodeBlock>
    )
}
import { useState } from 'react'
import './App.css'
import Counter from "./components/counter";
import {ActionEmitter} from "./components/action-emitter";
import styled from "@emotion/styled";
import {ActionView} from "./components/action-view";

const Container = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 80vw;
    height: 80vh;
`

const Stack = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`

function App() {

  return (
    <div className="App">
      <header className="App-header">
          <div>Demonstration of Redux!</div>
          <Container>
              <Stack>
                  <Counter />
              </Stack>
              <Stack>
                  <ActionEmitter />
              </Stack>
              <Stack>
                  <ActionView />
              </Stack>
          </Container>
      </header>

    </div>
  )
}

export default App

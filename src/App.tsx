import type { FC } from "react"
import { useReducer } from "react";
import reducer from './reducers/index'

import EventForm from "./components/EventForm";
import Events from "./components/Events";

const App: FC = () => {
  const [ state, dispatch] = useReducer(reducer, [])

  return (
    <div className="container-fluid p-4">
      <EventForm
        state={state}
        dispatch={dispatch}
      />

      <Events
        state={state}
        dispatch={dispatch}
      />

      <h4 className="mt-4">イベント一覧の状態</h4>
      {state.map((item,index) => 
            <p key={index}>{`{ id: ${item.id}, title: ${item.title}, body: ${item.body} }`}</p>
        )
      }
    </div>
  )
}

export default App

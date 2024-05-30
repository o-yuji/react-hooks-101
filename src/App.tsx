import type { FC } from "react"
import { useReducer } from "react";
import reducer from './reducers/index'
import Event from "./components/Event";
import EventForm from "./components/EventForm";

const App: FC = () => {
  const [ state, dispatch] = useReducer(reducer, [])

  const handleClickDeleteButton = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const result: boolean = window.confirm(`本当に[id=${e.target.value}]のデータを削除してもいいですか？`)
    if (result) {
      dispatch({ type: "DELETE_EVENT", id: parseInt(e.target.value) })
    } else {
      return
    }
  }

  return (
    <div className="container-fluid p-4">
      <EventForm
        state={state}
        dispatch={dispatch}
      />
            
      <h4 className="mt-4">イベント一覧</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>タイトル</th>
            <th>ボディ</th>
            <th>削除</th>
          </tr>
        </thead>
        <tbody>
          { state.map((event, index) => (<Event key={index} event={event} handleClickDeleteButton={handleClickDeleteButton} />))}
        </tbody>
      </table>
      <h4 className="mt-4">イベント一覧の状態</h4>
      {state.map((item,index) => 
            <p key={index}>{`{ id: ${item.id}, title: ${item.title}, body: ${item.body} }`}</p>
        )
      }
    </div>
  )
}

export default App

import type { FC } from "react"
import { useState, useReducer } from "react";
import reducer from './reducers/index'

const App: FC = () => {
  const [ state, dispatch] = useReducer(reducer, [])
  const [ title, setTitle] = useState("")
  const [ body, setBody] = useState("")

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const addEvent = (e:any) => {
    e.preventDefault()
    // console.log({type:"CREATE_EVENT",title,body})
    dispatch({ type: "CREATE_EVENT", title, body })
    setTitle("")
    setBody("")
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const deleteAllEvent = (e: any) => {
    e.preventDefault()
    dispatch({ type: "DELETE_ALL_EVENT" })
  }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleClickDeleteButton = (e:any) => {
    e.preventDefault()
    dispatch({ type: "DELETE_EVENT", id: e.target.value })
  }


  return (
    <div className="container-fluid p-4">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input type="text" value={title} onChange={(e)=>setTitle(()=>e.target.value)} className="form-control mb-4" id="formEventTitle" placeholder="タイトルを入力してください" />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディ</label>
          <textarea value={body} onChange={(e)=>setBody(()=>e.target.value)} className="form-control mb-4" id="formEventBody" placeholder="ボディを入力してください" ></textarea>
        </div>
        <button className="btn btn-primary m-2" onClick={(e)=>addEvent(e)}>イベントを作成する</button>
        <button className="btn btn-danger" onClick={(e) => deleteAllEvent(e)}>全てのイベントを削除する</button>
        <button className="btn btn-danger m-2">全ての操作ログを削除する</button>
      </form>
      
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
          {state.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td><button className="btn btn-danger" value={item.id} onClick={(e)=>handleClickDeleteButton(e)}>削除</button></td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <h4 className="mt-4">イベント一覧の状態</h4>
    </div>
  )
}

export default App

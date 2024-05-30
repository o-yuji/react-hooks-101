import { useState } from "react";
import { EventType, ActionType} from "../types/types"

interface EventFormProps {
    state: EventType[];
    dispatch: React.Dispatch<ActionType>;
}

const EventForm = ({ state,dispatch }: EventFormProps) => {

  const [ title, setTitle] = useState("")
  const [ body, setBody] = useState("")

  const addEvent = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    dispatch({ type: "CREATE_EVENT", title, body })
    setTitle("")
    setBody("")
  }

  const deleteAllEvents = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const result: boolean = window.confirm("本当に全て削除してもいいですか？")
    if (result) {
      dispatch({ type: "DELETE_ALL_EVENTS" })
    } else {
      return
    }
  }

  const unCreatable:boolean = title == "" || body == ""

  return (
    <>
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
            <button className="btn btn-primary m-2" onClick={(e)=>addEvent(e)} disabled={unCreatable}>イベントを作成する</button>
            <button className="btn btn-danger" onClick={(e) => deleteAllEvents(e)} disabled={state.length === 0}>全てのイベントを削除する</button>
            <button className="btn btn-danger m-2">全ての操作ログを削除する</button>
        </form>
    </>
  )
}

export default EventForm
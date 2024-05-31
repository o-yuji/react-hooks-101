import { EventType, ActionType } from "../types/types"
import { DELETE_EVENT } from '../actions/index'

interface EventProps {
    event: EventType;
    dispatch: React.Dispatch<ActionType>;
}

const Event = ({ event, dispatch }: EventProps) => {
  const id: number = event.id
  const handleClickDeleteButton = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault()
    const result: boolean = window.confirm(`本当に[id=${id}]のデータを削除してもいいですか？`)
    if (result) {
        dispatch({ type: DELETE_EVENT, id })
    } else {
        return
    }
  }

  return (
    <tr>
        <td>{id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
        <td><button className="btn btn-danger" onClick={handleClickDeleteButton}>削除</button></td>
    </tr>
  )
}

export default Event
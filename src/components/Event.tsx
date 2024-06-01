import { EventType, ActionType } from "../types/types"
import { DELETE_EVENT } from '../actions/index'
import React, { useContext } from 'react'
import AppContext from '../contexts/AppContext';

// interface EventProps {
//     state: EventType[];
//     dispatch: React.Dispatch<ActionType>;
// }

const Event = ({ event }: EventType) => {
  const { dispatch }: React.Dispatch<ActionType> = useContext(AppContext)
        /* eslint @typescript-eslint/no-explicit-any: off */
        const handleClickDeleteButton = (e: any) => {
          e.preventDefault()
          const result: boolean = window.confirm(`本当に[id=${e.target.value}]のデータを削除してもいいですか？`)
          if (result) dispatch({ type: DELETE_EVENT, id:parseInt(e.target.value) }) 
        }
  return (
    <tr key={event.id}>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
      <td><button className="btn btn-danger" value={event.id} onClick={(e)=>handleClickDeleteButton(e)}>削除</button></td>
    </tr>
  )
}

export default Event
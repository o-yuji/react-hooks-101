// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Event = ({event, handleClickDeleteButton}:any) => {
  return (
    <tr>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
        <td><button className="btn btn-danger" value={event.id} onClick={(e)=>handleClickDeleteButton(e)}>削除</button></td>
    </tr>
  )
}

export default Event
import type {FC} from "react"


const App:FC = () => {
  return (
    <div className="container-fluid p-4">
      <h4>イベント作成フォーム</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">タイトル</label>
          <input type="text" className="form-control mb-4" id="formEventTitle" placeholder="タイトルを入力してください" />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">ボディ</label>
          <textarea className="form-control mb-4" id="formEventBody"></textarea>
        </div>
        <button className="btn btn-primary m-2">イベントを作成する</button>
        <button className="btn btn-danger">全てのイベントを削除する</button>
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
          <tr>
            <td>1</td>
            <td>イベントの説明1</td>
            <td>未着手</td>
            <td><button className="btn btn-danger">削除</button></td>
          </tr>
          <tr>
            <td>2</td>
            <td>イベントの説明1</td>
            <td>未着手</td>
            <td><button className="btn btn-danger">削除</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default App

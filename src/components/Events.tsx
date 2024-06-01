import { useContext } from 'react'
import { EventType } from "../types/types"

import Event from './Event'
import AppContext from '../contexts/AppContext'

const Events = () => {
    /* eslint @typescript-eslint/no-explicit-any: off */
    const { state }:any = useContext(AppContext)
    return (
        <>
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
                    {/* eslint @typescript-eslint/no-explicit-any: off */}
                    { state.map((event:EventType, index:number) => (<Event key={index} event={event} />))}
            </tbody>
            </table>
        </>
    )
}

export default Events

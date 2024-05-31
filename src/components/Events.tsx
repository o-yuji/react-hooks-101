import React from 'react'
import Event from "./Event";
import { EventType, ActionType } from '../types/types';

interface EventFormProps {
    state: EventType[];
    dispatch: React.Dispatch<ActionType>;
}

const Events = ({ state, dispatch }: EventFormProps) => {



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
                { state.map((event, index) => (<Event key={index} event={event} dispatch={dispatch} />))}
            </tbody>
            </table>
        </>
    )
}

export default Events

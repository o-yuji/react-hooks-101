import { Reducer } from "react";
import { EventType, ActionType } from "../types/types";
import { CREATE_EVENT, DELETE_EVENT, DELETE_ALL_EVENT } from "../actions/index";

const events: Reducer<EventType[], ActionType> = (state = [], action) => {
  let event: EventType;
  switch (action.type) {
    case CREATE_EVENT:
      event = {
        title: action.title ? action.title : "",
        body: action.body ? action.body : "",
        id: state.length === 0 ? 1 : state[state.length - 1].id + 1,
      };
      return [...state, event];

    case DELETE_EVENT:
      return state.filter((event) => event.id !== action.id);

    case DELETE_ALL_EVENT:
      return [];

    default:
      return state;
  }
};

export default events;

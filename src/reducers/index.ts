import { Reducer } from "react";
import { EventType, ActionType } from "../types/types";

const events: Reducer<EventType[], ActionType> = (state = [], action) => {
  let event: EventType;
  switch (action.type) {
    case "CREATE_EVENT":
      event = {
        title: action.title ? action.title : "",
        body: action.body ? action.body : "",
        id: state.length === 0 ? 1 : state[state.length - 1].id + 1,
      };
      return [...state, event];

    case "ADD_EVENT":
      return [...state, action.payload];

    case "DELETE_EVENT":
      return state.filter((event) => event.id !== parseInt(action.id));

    case "DELETE_ALL_EVENTS":
      return [];

    default:
      return state;
  }
};

export default events;

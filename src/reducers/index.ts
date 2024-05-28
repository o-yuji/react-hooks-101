import { Reducer } from "react";

interface Event {
  title: string;
  body: string;
  id: number;
}

interface Action {
  type: string;
  payload?: any;
  title?: string;
  body?: string;
}

const events: Reducer<Event[], Action> = (state = [], action) => {
  let event: Event;
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

    case "DELETE_ALL_EVENT":
      return [];

    default:
      return state;
  }
};

export default events;

import { Reducer } from "react";

interface Event {
  title: string;
  body: string;
  id: number;
}

interface Action {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
  title?: string;
  body?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  id?: any;
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

    case "DELETE_EVENT":
      return state.filter((event) => event.id !== parseInt(action.id));

    case "DELETE_ALL_EVENTS":
      return [];

    default:
      return state;
  }
};

export default events;

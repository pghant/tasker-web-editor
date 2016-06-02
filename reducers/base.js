import { ADD_PROJECT, ADD_TASK, ADD_PROFILE } from "../constants/ActionTypes";
import { Map, List, fromJS } from "immutable";

const initialState = fromJS({
  projectsById: {
    0: { id: 0, name: "Base" }
  },
  projects: [0]
});

export default function base(state = initialState, action) {
  switch (action.type) {
    case ADD_PROJECT:
      let newId = state.get("projects").max() + 1;
      return state.mergeDeep({
        projectsById: {
          [newId]: { id: newId, name: action.name }
        },
        projects: state.get("projects").push(newId)
      });
    default:
      return state;
  }
}

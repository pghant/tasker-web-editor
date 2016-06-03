import { ADD_PROJECT, ADD_TASK, ADD_PROFILE } from "../constants/ActionTypes";
import { Map, List, fromJS } from "immutable";

const initialState = fromJS({
  projectsById: {
    0: { id: 0, name: "Base" }
  },
  projects: [0],
  profilesById: {},
  profiles: []
});

export default function base(state = initialState, action) {
  switch (action.type) {
    case ADD_PROJECT:
      let newProjId = state.get("projects").max() + 1;
      return state.mergeDeep({
        projectsById: {
          [newProjId]: { id: newProjId, name: action.name }
        },
        projects: state.get("projects").push(newProjId)
      });
    case ADD_PROFILE:
      let newProfId = state.get("profiles").count() === 0 ? 0 : state.get("profiles").max() + 1;
      return state.mergeDeep({
        profilesById: {
          [newProfId]: { id: newProfId, name: action.name }
        },
        profiles: state.get("profiles").push(newProfId)
      });
    default:
      return state;
  }
}

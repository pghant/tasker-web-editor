import { ADD_PROJECT, ADD_TASK, ADD_PROFILE, SELECT_PROJECT } from "../constants/ActionTypes";
import { Map, List, fromJS } from "immutable";

const initialState = fromJS({
  projectsById: {
    0: { id: 0, name: "Base", tids: [], pids: [] }
  },
  projects: [0],
  profilesById: {},
  profiles: [],
  tasksById: {},
  tasks: [],
  ui: {
    selectedProject: 0
  }
});

export default function base(state = initialState, action) {
  let newId;
  let selectedProject = state.getIn(["ui", "selectedProject"]);
  switch (action.type) {
    case ADD_PROJECT:
      newId = state.get("projects").max() + 1;
      return state.mergeDeep({
        projectsById: {
          [newId]: { id: newId, name: action.name, tids: [], pids: [] }
        },
        projects: state.get("projects").push(newId),
        ui: { selectedProject: newId }
      });
    case ADD_PROFILE:
      newId = state.get("profiles").count() === 0 ? 0 : state.get("profiles").max() + 1;
      return state.mergeDeep({
        profilesById: {
          [newId]: { id: newId, name: action.name }
        },
        profiles: state.get("profiles").push(newId),
        projectsById: {
          [selectedProject]: {
            pids: state.getIn(["projectsById", `${selectedProject}`, "pids"]).push(newId)
          }
        }
      });
    case ADD_TASK:
      newId = state.get("tasks").count() === 0 ? 0 : state.get("tasks").max() + 1;
      return state.mergeDeep({
        tasksById: {
          [newId]: { id: newId, name: action.name }
        },
        tasks: state.get("tasks").push(newId),
        projectsById: {
          [selectedProject]: {
            tids: state.getIn(["projectsById", `${selectedProject}`, "tids"]).push(newId)
          }
        }
      });
    case SELECT_PROJECT:
      return state.mergeDeep({
        ui: { selectedProject: action.id }
      });
    default:
      return state;
  }
}

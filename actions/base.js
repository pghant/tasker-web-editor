import * as types from "../constants/ActionTypes";

export function addProject(name) {
  return { type: types.ADD_PROJECT, name };
}

export function addProfile(name) {
  return { type: types.ADD_PROFILE, name };
}

export function addTask(name) {
  return { type: types.ADD_TASK, name };
}

export function selectProject(id) {
  return { type: types.SELECT_PROJECT, id };
}

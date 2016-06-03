import * as types from "../constants/ActionTypes";

export function addProject(name) {
  return { type: types.ADD_PROJECT, name };
}

export function addProfile(name) {
  return { type: types.ADD_PROFILE, name };
}

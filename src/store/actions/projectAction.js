import { ADD_PROJECT } from "./types";

export const createProject = project => (dispatch,{getFirebase,getFirestore}) => {
  dispatch({
    type: ADD_PROJECT,
    payload: project
  })
}
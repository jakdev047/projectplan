import { ADD_PROJECT,ADD_PROJECT_ERROR } from "./types";

export const createProject = project => {
  return (dispatch,getState,{getFirebase,getFirestore}) => {
    const firestore = getFirestore();
    firestore.collection('projects').add({
      ...project,
      authorFirstName: 'Jubayer',
      authorLastName: 'Alam',
      authorId:12345,
      createdAt: new Date()
    }).then(()=>{
      dispatch({type: ADD_PROJECT,payload: project })
    }).catch((err)=>{
      dispatch({type: ADD_PROJECT_ERROR,err })
    });
  }
}
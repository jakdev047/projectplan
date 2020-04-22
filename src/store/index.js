import { createStore,applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

import { getFirestore, reduxFirestore } from "redux-firestore";
import { getFirebase, reactReduxFirebase } from "react-redux-firebase";

import firebaseConfig from '../config/firebaseConfig';

const middleware = [thunk.withExtraArgument({
  getFirebase,
  getFirestore
})];

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(
    applyMiddleware(...middleware),
    reduxFirestore(firebaseConfig),
    reactReduxFirebase(firebaseConfig)
  )
)

export default store;
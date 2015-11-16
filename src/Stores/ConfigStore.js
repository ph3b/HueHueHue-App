/**
 * Created by mattiden on 16.11.2015.
 */
import {createStore} from 'redux';
import {
  SET_APP_NAME,
  SET_BRIDGE,
  SET_COMPLETE,
  SET_USERNAME
} from "../Constants/ConfigConstants";

var initialState = {
  app_name: null,
  bridge: null,
  username: null,
  complete:false
};

const configStateReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_APP_NAME:
      return {...state, app_name: action.app_name};
    case SET_BRIDGE:
      return {...state, bridge: action.bridge};
    case SET_USERNAME:
      return {...state, username: action.username};
    case SET_COMPLETE:
      return {...state, complete: action.complete};
    default:
      return state;
      break;
  }
};

let configStore = createStore(configStateReducer);
export default configStore;
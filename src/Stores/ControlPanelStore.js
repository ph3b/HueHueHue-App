/**
 * Created by mattiden on 16.11.2015.
 */
import {createStore} from 'redux';
import {SET_APP_NAME,
        SET_BRIDGE_ID,
        SET_BRIDGE_IP,
        SET_USERNAME,
        SET_LIGHTS,
        SET_STATE } from '../Constants/ControlPanelConstants';

const initialState = {
  username: null,
  bridge_ip: null,
  bridge_id: null,
  app_name: null,
  lights: []
};

const ControlPanelReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_APP_NAME:
      return {...state, app_name: action.app_name};
    case SET_BRIDGE_ID:
      return {...state, bridge_id: action.bridge_id};
    case SET_BRIDGE_IP:
      return {...state, bridge_ip: action.bridge_ip};
    case SET_USERNAME:
      return {...state, username: action.username};
    case SET_STATE:
      return action.state;
    case SET_LIGHTS:
      return {...state, lights: action.lights};
    default:
      return state;
  }
};
export default createStore(ControlPanelReducer);
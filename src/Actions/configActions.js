/**
 * Created by mattiden on 16.11.2015.
 */
import configStore from "../Stores/ConfigStore";
import {
  SET_APP_NAME,
  SET_BRIDGE,
  SET_COMPLETE,
  SET_USERNAME
  } from "../Constants/ConfigConstants";

var dispatch = function(action){
  configStore.dispatch(action);
};

export default {
  setAppName(app_name){
    const action = {
      type: SET_APP_NAME,
      app_name: app_name
    };
    dispatch(action)
  },
  setBridge(bridge){
    const action = {
      type: SET_BRIDGE,
      bridge: bridge
    };
    dispatch(action)
  },
  setUsername(username){
    const action = {
      type: SET_USERNAME,
      username: username
    };
    dispatch(action)
  },
  setComplete(boolean){
    const action = {
      type: SET_COMPLETE,
      complete: boolean
    };
    dispatch(action)
  }
}
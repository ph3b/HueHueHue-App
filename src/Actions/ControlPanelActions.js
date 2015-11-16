/**
 * Created by mattiden on 16.11.2015.
 */
/**
 * Created by mattiden on 16.11.2015.
 */
import ControlPanelStore from "../Stores/ControlPanelStore";
import {
  SET_APP_NAME,
  SET_USERNAME,
  SET_BRIDGE_ID,
  SET_BRIDGE_IP,
  SET_STATE,
  SET_LIGHTS
} from "../Constants/ControlPanelConstants";

var dispatch = function(action){
  ControlPanelStore.dispatch(action);
};

export default {
  setAppName(app_name){
    const action = {
      type: SET_APP_NAME,
      app_name: app_name
    };
    dispatch(action)
  },
  setBridgeIp(bridge_ip){
    const action = {
      type: SET_BRIDGE_IP,
      bridge_ip: bridge_ip
    };
    dispatch(action)
  },
  setBridgeId(bridge_id){
    const action = {
      type: SET_BRIDGE_ID,
      bridge_id: bridge_id
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
  setLights(lights){
    const action = {
      type: SET_LIGHTS,
      lights: lights
    };
    dispatch(action);
  },
  setState(state){
    const action = {
      type: SET_STATE,
      state: state
    };
    dispatch(action);
  }
}
/**
 * Created by mattiden on 15.11.2015.
 */
import axios from 'axios';

class HueManager {
  constructor(app_name){
    this.appName = app_name;
    this.bridgeIp = null;
    this.apiString = null;
    this.hasBeenAuthorized = false;
    this.callbacks = [];
  }
  getBridge(){
    return new Promise((resolve, reject) => {
      return axios.get("https://www.meethue.com/api/nupnp")
        .then((response) => resolve(response.data))
        .catch((error) => reject(response.data))
    })
  }
  authorizeApp(){
    this.validateClassState();
    let requestPayload = {"devicetype": this.appName};
    return new Promise((resolve, reject) => {
      axios.post(this.apiString, requestPayload)
        .then((response) => resolve(response.data[0]))
    });
  }

  getAuthorizationState(){
    return new Promise((resolve, reject) => {
      let requestPayload = {"devicetype": this.appName};
      axios.post(this.apiString, requestPayload)
        .then((response) => {
          if(response.data[0].error){
            resolve(null);
          } else
          resolve(response.data[0]);
        })
    });
  }

  setBridgeIp(bridge_ip){
    this.bridgeIp = bridge_ip;
    this.apiString = HueManager._makeApiString(bridge_ip);
    return this;
  }

  static _makeApiString(bridge_ip){
    return `http://${bridge_ip}/api`;
  }

  validateClassState(){
    if(this.bridgeIp === null || this.appName === null){
      throw new Error("Invalid state: Check bridge_ip or appName");
    }
    return this;
  }

}
export default HueManager;
/**
 * Created by mattiden on 15.11.2015.
 */
import axios from 'axios';

class HueManager {
  constructor(username, bridge_ip){
    if(!username || !bridge_ip){
      throw new Error("Please include username and bridge_ip");
    }
    this.username = username;
    this.bridge_ip = bridge_ip;
    this.apiString = `http://${this.bridge_ip}/api/${this.username}`
  }

  getLights(){
    return new Promise((resolve, reject) => {
      axios.get(this.apiString + "/lights")
        .then((result) => {
          resolve(result.data);
        })
        .catch(error => reject(error));
    })
  }

  turnOffLight(light_id){
    return this._changeLightState(light_id, false)
  }

  turnOnLight(light_id){
    return this._changeLightState(light_id, true)
  }

  setBrightness(light_id, brightness_level){
    if(brightness_level > 255 || brightness_level < 0){
      throw new Error("Invalid Brightness value. Range: 0-255");
    }
    return new Promise((resolve, reject) => {
      axios.put(`${this.apiString}/lights/${light_id}/state`, {on : true, bri: parseInt(brightness_level)})
        .then((response) => {
          resolve({message: "Ok"});
        })
        .catch((error) => reject(error));
    })
  }
  getUser(){
    return new Promise((resolve, reject) => {
      axios.get(`${this.apiString}/`)
        .then((response) => {
          resolve(response.data.config.name);
        })
        .catch((error) => reject(error));
    })

  }

  _changeLightState(light_id, state){
    return new Promise((resolve, reject) => {
      axios.put(`${this.apiString}/lights/${light_id}/state`, {on : true})
        .then((response) => {
          resolve({message: "Ok", state: state ? "On" : "Off"});
        })
        .catch((error) => reject(error));
    })
  }


}
export default HueManager;
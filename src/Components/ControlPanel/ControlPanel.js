/**
 * Created by mattiden on 15.11.2015.
 */
import React from 'react';
import {existingAppState} from '../../Models/AppState';
import HueManager from './../../Models/HueManager';
import LightList from './LightList';
import {Redirect} from 'react-router';

class ControlPanel extends React.Component {
  constructor(props){
    super(props);
    this.state = {lights : []}
  }
  init(){
    var appState = this.props.location.state;
    if(!appState) return this.props.history.pushState(null, "/config");
    var lightsArray = [];
    this.hueManager = new HueManager(appState.username, appState.bridge_ip);
    this.hueManager.getLights().then((lights) => {
      var counter = 1;
      for(var light in lights){
        if(lights.hasOwnProperty(light)){
          lights[light].id = counter;
          lightsArray.push(lights[light]);
          counter++;
        }
      }
      this.setState({lights: lightsArray})
    })
  }
  componentWillMount(){
    this.init();
  }
  componentWillReceiveProps(){
    this.init();
  }
  handleChangeDim(light_id, dimLevel){
    this.hueManager.setBrightness(light_id, dimLevel)
  }
  handleTurnOffLight(light_id){
    this.hueManager.turnOffLight(light_id)
  }

  render(){
    return (
      <div>
        <LightList lights={this.state.lights}
                   handleChangeDim={this.handleChangeDim.bind(this)}
                   handleTurnOffLight={this.handleTurnOffLight.bind(this)}/>
      </div>
    )
  }
}
export default ControlPanel;
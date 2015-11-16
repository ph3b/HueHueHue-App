/**
 * Created by mattiden on 15.11.2015.
 */
import React from 'react';
import {existingAppState} from '../../Models/AppState';
import HueManager from './../../Models/HueManager';
import LightList from './LightList';
import {Redirect} from 'react-router';
import ControlPanelStore from '../../Stores/ControlPanelStore';
import ControlPanelActions from '../../Actions/ControlPanelActions'

class ControlPanel extends React.Component {
  constructor(props){
    super(props);
    this.state = ControlPanelStore.getState();
  }

  init(){
      var appState = this.props.location.state;
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
        ControlPanelActions.setLights(lightsArray);
      })
  }
  componentWillMount(){
    var appState = this.props.location.state;
    ControlPanelActions.setState(appState);
    if(!appState) return this.props.history.pushState(null, "/config");
    this.unsubscribe = ControlPanelStore.subscribe(() => {
      this.setState(ControlPanelStore.getState());
    });
    this.init();
  }

  componentDidUpdate(){

  }
  componentWillReceiveProps(){
    this.init();
  }

  componentWillUnmount(){
    this.unsubscribe();
  }

  render(){
    return (
      <div>
        <LightList lights={this.state.lights} hueManager={this.hueManager}/>
      </div>
    )
  }
}
export default ControlPanel;
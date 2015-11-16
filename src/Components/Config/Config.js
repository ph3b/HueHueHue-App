/**
 * Created by mattiden on 15.11.2015.
 */
import React from 'react';
import HueApi from '../../Models/HueSetup';
import SetName from './SetAppName';
import FindBridge from './FindBridge';
import AuthorizeBridge from './AuthorizeBridge';
import configStore from '../../Stores/ConfigStore';

class Config extends React.Component {
  constructor(props){
    super(props);
    this.state = configStore.getState();
  }
  componentWillMount(){
    this.unsubscribe = configStore.subscribe(() => {
      var storeState = configStore.getState();
      this.setState(storeState);
      if(storeState.complete) return this.completeSetup();
    })
  }
  componentWillUnmount(){
    this.unsubscribe();
  }

  completeSetup(){
   var nextState = {
     username: this.state.username,
     bridge_ip: this.state.bridge.internalipaddress,
     bridge_id: this.state.bridge.id,
     app_name: this.state.app_name};
    this.props.history.pushState(nextState, "/control");
  }

  render(){
    return (
      <div>
        <h2>Configure a Bridge</h2>
        <SetName />
        {(this.state.app_name)? <FindBridge app_name={this.state.app_name} /> : null}
        {(this.state.bridge)? <AuthorizeBridge app_name={this.state.app_name} bridge={this.state.bridge} /> : null}
      </div>
    )
  }
}
export default Config;
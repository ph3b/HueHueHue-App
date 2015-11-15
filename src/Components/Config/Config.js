/**
 * Created by mattiden on 15.11.2015.
 */
import React from 'react';
import HueApi from '../../Models/HueSetup';
import SetName from './SetAppName';
import FindBridge from './FindBridge';
import AuthorizeBridge from './AuthorizeBridge';
import AppState from '../../Models/AppState';

class Config extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      app_name: null,
      bridge: null,
      username: null,
      show_findBridge: false,
      show_authorizeBridge: false,
      complete: false
    };
  }
  setAppName(app_name){
    this.setState({app_name:app_name, show_findBridge: true});
  }
  setAppBridge(bridge){
    this.setState({bridge: bridge, show_authorizeBridge: true});

  }
  setBridgeUsername(username){
    this.setState({username: username});
    this.completeSetup();
  }
  completeSetup(){
    var sharedAppState = new AppState();
    sharedAppState.username = this.state.username;
    sharedAppState.bridge_ip = this.state.bridge.internalipaddress;
    sharedAppState.bridge_id = this.state.bridge.id;
    sharedAppState.app_name = this.state.app_name;
    this.setState({sharedAppState: sharedAppState});
    this.props.history.pushState(sharedAppState, "/control");
  }

  render(){
    var setName =  <SetName setAppName={this.setAppName.bind(this)}/>
    var findBridge = (this.state.show_findBridge) ?
      <FindBridge app_name={this.state.app_name}
                  setAppBridge={this.setAppBridge.bind(this)}/>
      : null;
    var authorizeBridge = (this.state.show_authorizeBridge)
      ? <AuthorizeBridge
          setBridgeUsername={this.setBridgeUsername.bind(this)}
          bridge={this.state.bridge}
          app_name={this.state.app_name}/>
      : null;
    return (
      <div>
        <h2>Configure a Bridge</h2>
        {setName}
        {findBridge}
        {authorizeBridge}
      </div>
    )
  }
}
export default Config;
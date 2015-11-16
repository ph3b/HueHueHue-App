/**
 * Created by mattiden on 15.11.2015.
 */
/**
 * Created by mattiden on 15.11.2015.
 */
/**
 * Created by mattiden on 15.11.2015.
 */
/**
 * Created by mattiden on 15.11.2015.
 */
import React from 'react';
import HueApi from '../../Models/HueSetup';
import configActions from '../../Actions/configActions';

class AuthorizeBridge extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isWaitingForBridge: false,
      complete: false
    }
  }

  componentWillMount(){
    this.hue = new HueApi(this.props.app_name);
    this.hue.setBridgeIp(this.props.bridge.internalipaddress)
  }

  checkForChanges(){
    var intervalFunction = setInterval(() => {
        this.hue.getAuthorizationState().then((response) => {
          if(response !== null){
            this.setState({complete:true, isWaitingForBridge: false});
            configActions.setUsername(response.success.username);
            configActions.setComplete(true);
            clearInterval(intervalFunction);
          }
        })
      }, 1000);
  }

  authorize(){
    this.setState({isWaitingForBridge: true});
    this.hue.authorizeApp().then(() => this.checkForChanges());
  }

  render(){
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <h4>Authorize your bridge</h4>
          <span> Click on "Authorize bridge", then click on the middle button on your bridge </span>
          <br />
          {(this.state.complete)
            ? <button onClick={this.authorize.bind(this)} disabled="disabled" className="btn btn-info">
            Authorize bridge </button>
            : <button onClick={this.authorize.bind(this)} className="btn btn-info">Authorize bridge</button>}
          {(this.state.isWaitingForBridge) ? <img src="img/ajax-loader.gif"></img> : null}
          {(this.state.complete) ? <span className="glyphicon glyphicon-ok pull-right" aria-hidden="true" /> : null}
        </div>
      </div>
    )
  }
}
export default AuthorizeBridge;
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

class FindBridge extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      complete: false,
      bridges: []
    }
  }
  componentWillMount(){
    var hue = new HueApi(this.props.app_name);
    hue.getBridge().then((response) => {
      response.forEach((bridge) => {
        bridge.clicked = false;
      });
      this.setState({bridges: response})
    })
  }
  selectBridge(bridge){
    this.state.bridges.forEach((bridgeInState) => bridgeInState.clicked = bridgeInState.id == bridge.id);
    this.setState({bridges: this.state.bridges, complete: true});
    this.props.setAppBridge(bridge);
  }
  render(){
    var bridges = this.state.bridges.map((bridge, id) => {
      var bridgeLine;
      if(bridge.clicked){
        bridgeLine = <a className="list-group-item" key={bridge.id} disabled="disabled">
            #{id +1} {bridge.id} <span className="glyphicon glyphicon-ok pull-right" aria-hidden="true" />
        </a>
      }
      else {
        bridgeLine = <a onClick={this.selectBridge.bind(this, bridge)} className="list-group-item" key={bridge.id}>#{id +1} {bridge.id}</a>
      }
      return bridgeLine;
    });

    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <h4>Select a bridge: </h4>
          <ul className="list-group">
            {bridges}
          </ul>
        </div>
      </div>
    )
  }
}
export default FindBridge;
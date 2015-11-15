/**
 * Created by mattiden on 15.11.2015.
 */
/**
 * Created by mattiden on 15.11.2015.
 */
import React from 'react';
import HueApi from '../../Models/HueSetup';

class SetName extends React.Component {
  constructor(props){
    super(props);
    this.state = {complete: false}
  }
  setNameFromAppNameField(){
    let app_name = this.refs.appName.value;
    if(app_name === "") return;
    this.props.setAppName(app_name);
    this.setState({complete: true})
  }

  render(){
    var button;
    var inputField;
    var checkmark;
    if(this.state.complete){
      inputField = <input ref="appName" type="email" disabled="disabled" className="form-control" id="exampleInputEmail1" placeholder="App name" />;
      button = <button onClick={this.setNameFromAppNameField.bind(this)} className="btn btn-info" disabled="disabled">
                Save name
              </button>
      checkmark = <span className="glyphicon glyphicon-ok pull-right" aria-hidden="true"/>;
    }
      else{
      inputField = <input ref="appName" type="email" className="form-control" id="exampleInputEmail1" placeholder="App name" />;
      button = <button onClick={this.setNameFromAppNameField.bind(this)} className="btn btn-info">
                Save name
               </button>;
      checkmark = null;

    }
    return (
      <div className="panel panel-default" >
        <div className="panel-body">
          <div className="form-group">
            <h4>Choose an app name</h4>
            {inputField}
            <br />
            {button} {checkmark}
          </div>
        </div>
      </div>
    )
  }
}
SetName.propTypes = { setAppName: React.PropTypes.func };
export default SetName;
/**
 * Created by mattiden on 15.11.2015.
 */
/**
 * Created by mattiden on 15.11.2015.
 */
import React from 'react';

class LightList extends React.Component {
  handleDimChange(light_id){
    var dimValue = this.refs[light_id].value;
    if(dimValue === 0){
      this.props.handleTurnOffLight(light_id);
    }
    this.props.handleChangeDim(light_id, dimValue);
  }
  render(){
    var lights = this.props.lights.map((light) => {
      var stateButton = light;
      return (
        <div className="col-sm-6" key={light.id}>
          <div className="thumbnail">
            <div className="caption">
              <h3>{light.name}</h3>
              <p><input ref={light.id} onChange={this.handleDimChange.bind(this, light.id)} type="range" min="0" max="255" step="5" /></p>
            </div>
          </div>
        </div>
      )
    });
    return (
      <div className="">
        <div className="row">
          {lights}
        </div>
      </div>
    )
  }
}
export default LightList;
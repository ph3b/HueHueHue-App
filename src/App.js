import React from 'react';
import { render } from 'react-dom';
import Config from './Components/Config/Config';
import ControlPanel from './Components/ControlPanel/ControlPanel';
import { Router, Route, Link, IndexRoute } from 'react-router'

class App extends React.Component {
  render(){
    return (
      <div style={{margin: 10}}>
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">HueHueHue App</a>
            </div>
          </div>
        </nav>
      </div>
      <div>{this.props.children}</div>
      </div>
    )
  }
};

render((
  <Router>
    <Route path="/" component={App}>
      <IndexRoute component={Config}/>
      <Route path="config" component={Config} />
      <Route path="control" component={ControlPanel} />
    </Route>
  </Router>
), document.getElementById("app"));
/**
 * Created by mattiden on 15.11.2015.
 */
class AppState {
  constructor(){
    this.username = null;
    this.bridge_ip = null;
    this.bridge_id = null;
    this.app_name = null;
  }
}

export default AppState;


export var existingAppState = new AppState();
existingAppState.app_name = "Mathias app";
existingAppState.bridge_id = "001788fffe1951b2";
existingAppState.bridge_ip = "10.0.0.2";
existingAppState.username = "c97c9492e1e8373814348d16767b5b";

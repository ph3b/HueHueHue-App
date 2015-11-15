/**
 * Created by mattiden on 15.11.2015.
 */
import expect from 'expect.js';
import HueSetup from '../../src/Models/HueSetup';
import {existingAppState} from '../../src/Models/AppState'

describe('HueSetup test', () => {
    
    it('Should get bridges in my house', () => {
      var hueSetup = new HueSetup("Superapp");
      return hueSetup.getBridge().then((bridges) => {
        expect(bridges[0]).to.have.property("internalipaddress");
      })
    });

    it('Should get bridges in my house', () => {
      var hueSetup = new HueSetup("Superapp");
      return hueSetup.getBridge()
        .then((bridge) => {
          hueSetup.setBridgeIp(bridge[0].internalipaddress);
          return hueSetup.authorizeApp("Test app")
        })
        .then((result) => {
          return hueSetup.getAuthorizationState();
        })
        .then((state) => {

        })
        .catch((error) => expect().fail());
    });

});
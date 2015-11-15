/**
 * Created by mattiden on 15.11.2015.
 */
import expect from 'expect.js';
import HueManager from '../../src/Models/HueManager';
import {existingAppState} from '../../src/Models/AppState'

describe('HueManager test', () => {

  it('Should get bridges in my house', () => {
    var hueManager = new HueManager(existingAppState.username,existingAppState.bridge_ip);
    return hueManager.getLights()
      .then((lights) => {
        expect(lights["1"].name).to.be.eql("Taklampe")
      })
  });

  it("Should turn off light", () => {
    var hueManager = new HueManager(existingAppState.username,existingAppState.bridge_ip);
    return hueManager.turnOffLight("1")
      .then((response) => {
        expect(response.message).to.be("Ok");
        expect(response.state).to.be("Off")
      })
  });

  it("Should turn on light", () => {
    var hueManager = new HueManager(existingAppState.username,existingAppState.bridge_ip);
    return hueManager.turnOnLight("1")
      .then((response) => {
        expect(response.message).to.be("Ok");
        expect(response.state).to.be("On")
      })
  });

  it("Should change brightness of light", () => {
    var hueManager = new HueManager(existingAppState.username,existingAppState.bridge_ip);
    return hueManager.setBrightness("1", 255)
      .then((response) => {
        expect(response.message).to.be("Ok");
      })
  });


  it("Should get information about user", () => {
    var hueManager = new HueManager(existingAppState.username,existingAppState.bridge_ip);
    return hueManager.getUser()
      .then((response) => {
        expect(response).to.be.eql("Mathias Iden")
      })
  })
});
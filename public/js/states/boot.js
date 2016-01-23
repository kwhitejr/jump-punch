JumpPunch.Boot = function () {

};

JumpPunch.Boot.prototype.preLoad = function () {
  //will preload all assets
};

JumpPunch.Boot.prototype.create = function () {
  // switch to game state
  this.state.start( JumpPunch.STATES.GAME );
};
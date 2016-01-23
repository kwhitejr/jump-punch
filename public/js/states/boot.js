JumpPunch.Boot = function () {

};

JumpPunch.Boot.prototype.preLoad = function () {
  //will preload all assets
  //using functional and declarative programming, not imperatives!

  Object.keys(JumpPunch.ASSETS).forEach(function(type) {
    for (var asset in JumpPunch.ASSETS[type]) {
      JumpPunch.game.load[ type.toLowerCase() ](
        JumpPunch.ASSETS[type][ asset ].name,
        JumpPunch.ASSETS[type][ asset ].width,
        JumpPunch.ASSETS[type][ asset ].height,
        JumpPunch.ASSETS[type][ asset ].frames,
        JumpPunch.ASSETS[type][ asset ].path
      );
    }
  });

};

JumpPunch.Boot.prototype.create = function () {
  // switch to game state
  this.state.start( JumpPunch.STATES.GAME );
};
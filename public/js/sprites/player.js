// sprite class constructor
JumpPunch.Player = function (game, id, name) {
  this.game = game;
  this.id = id;
  this.name = name? name : 'Player '+(id+1);

  // super constructor call
  Phaser.Sprite.call(this, game, 0, 0, JumpPunch.ASSETS.SPRITESHEET.PLAYER.name);
};

//extend Sprite prototype
JumpPunch.Player.prototype = Object.create(Phaser.Sprite.prototype, {
  constructor: {
    value: JumpPunch.Player
  }
});


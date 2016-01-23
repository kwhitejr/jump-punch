// An IIFE is a self-invoking function. (Immediately Invoked Function Expression)
(function () {

  // private static variable
  var ANIMATIONS = {
    IDLE : {
      name : 'title',
      frames : [0,1,2,3],
      fps : 5
    }
  };

  // sprite class constructor
  JumpPunch.Player = function (game, id, name) {
    this.game = game;
    this.id = id;
    this.name = name? name : 'Player '+(id+1);

    // super constructor call
    Phaser.Sprite.call(this, game, 0, 0, JumpPunch.ASSETS.SPRITESHEET.PLAYER.name);

    // set animations
    this.animations.add(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.frames);

    // play the initial animation
    this.animations.play(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.fps, true); // third argument is 'loop'
  };

  //extend Sprite prototype
  JumpPunch.Player.prototype = Object.create(Phaser.Sprite.prototype, {
    constructor: {
      value: JumpPunch.Player
    }
  });

})();
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

  var FACING_FACTOR = {
    LEFT : -1,
    RIGHT : 1
  };

  // sprite class constructor
  JumpPunch.Player = function (game, id, name) {
    this.game = game;
    this.id = id;
    this.name = name? name : 'Player '+(id+1);
    this.facing; //direction that player is facing, state updates this. game state knows this about each player

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

  // public statis variable
  JumpPunch.Player.FACING = {
    LEFT : 'LEFT',
    RIGHT : 'RIGHT'
  };

  // is invoked on every frame
  JumpPunch.Player.prototype.update = function(){

    // update player facing
    this.scale.x = FACING_FACTOR[ this.facing ];

  };

})();
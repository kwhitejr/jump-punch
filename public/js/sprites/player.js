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

  var WALK_SPEED = 401;

  function select_sprite_row(player_id) {
    return function(frame_id) {
      return frame_id + player_id*JumpPunch.ASSETS.SPRITESHEET.PLAYER.frames_per_row;
    };
  };

  // sprite class constructor
  JumpPunch.Player = function (game, id, name) {
    this.game = game;
    this.id = id;
    this.name = name? name : 'Player '+(id+1);
    this.facing; //direction that player is facing, state updates this. game state knows this about each player

    // super constructor call
    Phaser.Sprite.call(this, game, 0, 0, JumpPunch.ASSETS.SPRITESHEET.PLAYER.name);

    // enable physics (adds this.body)
    this.game.physics.enable(this, Phaser.Physics.ARCADE);

    // set center registration point
    this.anchor = {x: 0.5, y: 0.5};

    // set animations
    this.animations.add(ANIMATIONS.IDLE.name, ANIMATIONS.IDLE.frames.map(select_sprite_row(this.id)));

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

  // Input actions
  JumpPunch.Player.prototype.jump = function () {
    this.body.velocity.y = -WALK_SPEED;

  };

  JumpPunch.Player.prototype.dive = function () {
    this.body.velocity.y = WALK_SPEED;

  };

  JumpPunch.Player.prototype.dive_stop = function () {
    this.body.velocity.y = 0;
  };

  JumpPunch.Player.prototype.step_left = function () {
    this.body.velocity.x = -WALK_SPEED;
  };

  JumpPunch.Player.prototype.step_right = function () {
    this.body.velocity.x = WALK_SPEED;
  };

  // triggered on key up
  JumpPunch.Player.prototype.stop = function () {
    this.body.velocity.x = 0;
  };

})();
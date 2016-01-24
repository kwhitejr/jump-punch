
(function(){

  var GRAVITY = 1945;

  var INITIAL_POSITIONS = [
    // Player 1
    {x: 100, y: 100},
    // Player 2
    {x: 600, y: 100}
  ];

  JumpPunch.Game = function () {

    this.player_1;
    this.player_2;
    this.facing; // direction that player faces
  };

  JumpPunch.Game.prototype.create = function () {
    this.player_1 = new JumpPunch.Player(this.game, 0);
    this.player_2 = new JumpPunch.Player(this.game, 1);
    this.game.add.existing(this.player_1);
    this.game.add.existing(this.player_2);

    //position players
    this.player_1.x = INITIAL_POSITIONS[0].x;
    this.player_1.y = INITIAL_POSITIONS[0].y;

    this.player_2.x = INITIAL_POSITIONS[1].x;
    this.player_2.y = INITIAL_POSITIONS[1].y;

    // initialize input handler
    this.input = new JumpPunch.GameInput(this);
  };

  JumpPunch.Game.FLOOR_Y = 400;

  JumpPunch.Game.prototype.update = function () {

    // determine which direction each player is facing
    if ( this.player_1.x < this.player_2.x) {
      this.player_1.facing = JumpPunch.Player.FACING.RIGHT;
      this.player_2.facing = JumpPunch.Player.FACING.LEFT;
    } else {
      this.player_1.facing = JumpPunch.Player.FACING.LEFT;
      this.player_2.facing = JumpPunch.Player.FACING.RIGHT;
    }

    [this.player_1, this.player_2].forEach(function(player){
      // touching land or falling
      if(player.body.y > JumpPunch.Game.FLOOR_Y){
        player.body.y = JumpPunch.Game.FLOOR_Y;
        player.body.velocity.y = 0;
        player.body.acceleration.y = 0;
      }else{
        player.body.acceleration.y = GRAVITY;
      }

    });
  };

  JumpPunch.Game.prototype.shutdown = function () {

  };

  // Input actions
  JumpPunch.Game.prototype.continue = function () {

  };

})();
JumpPunch.Game = function () {

};

JumpPunch.Game.prototype.create = function () {
  this.player_1 = new JumpPunch.Player(this.game, 0);
  this.game.add.existing(this.player_1);
};

JumpPunch.Game.prototype.update = function () {

};

JumpPunch.Game.prototype.shutdown = function () {

};
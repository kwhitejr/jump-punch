// create single global variable of type Object
// Constant variables are ALL CAPS. Can be accessed and should not be set.

window.JumpPunch = {
  // input static global variables
  ASSETS : {},

  STAGE : {
    WIDTH : 900,
    HEIGHT : 600
  },

  STAGE_ID : 'game', //div in index.html to render this game

  STATES : {
    BOOT : 'Boot',
    GAME : 'Game'
  }

};
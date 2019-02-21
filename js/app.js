// Enemies our player must avoid
var Enemy = function() {
    // enemy positin and sprite image
    this.x = 0;
    this.y = 0;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    // change x  * speed *dt until touched border
    //if touched border move to initial x
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// My player class
var Player = function () {
    this.x = 0;
    this.y = 0;
    this.sprite = 'images/char-boy.png';
    this.render = function() { ctx.drawImage(Resources.get(this.sprite), this.x, this.y)};
};

//  update() method to update playes position on boad
   // check player position against enemies
   // check if player reached water (win)
      // if any above true move player to beginning - start method


//this methd renders player positin on the board. It is the same as the one povided for Enemy object. ocommented out as moved inside the consructor instead of prototype
/*Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);*/

//   handleInput() method to handle keyboad input


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [];
// Place the player object in a variable called player
var player = new Player();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
// Enemies our player must avoid
var Enemy = function() {
    // enemy positin and sprite image
    this.x = 0;
    this.y = 83;
    this.height = 50;
    this.width = 101;
    this.speed = Math.random() * 500;
    this.sprite = 'images/enemy-bug.png';
    this.move = 101;
    this.position =  (this.y * Math.floor(Math.random() * 3 + 1))-20;
    };

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    if (this.x< 5 * this.move) {
     this.x +=  this.speed * dt ;

    }
    // change x  * speed *dt until touched border
    //if touched border move to initial x and randomize y
    else {
      this.x = -101;
	  this.position = (this.y * Math.floor(Math.random() * 3 + 1))-20;
    }


    //collision logic

    if (player.y >= this.position && player.y <= (this.height + this.position) && player.x >= this.x && player.x <= (this.width + this.x)){
	//console.log("this");
	//console.log(player.y);
	//console.log(this.position  + this.height);
    player.x = 202;
    player.y = 415-10 ;
 }


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.position);
};

// My player class
var Player = function () {
    this.x = 202;
    this.y = 415-10 ;
    this.sprite = 'images/char-boy.png';
    this.render = function() { ctx.drawImage(Resources.get(this.sprite), this.x, this.y)};

};
// winning check
 Player.prototype.update = function(){
    if (player.y ==-10) {
       setTimeout(function () {
        alert('You won!')
         player.x = 202;
        player.y = 415-10 ;
   },1);
 }
};



//   handleInput() method to handle keyboad input
Player.prototype.handleInput = function(key) {
    if (key === 'left') {
        if (this.x>0) {this.x -= 101}
    }
   else if (key === 'right') {
         if (this.x <= 403) {this.x += 101}
    }
    else if (key === 'up') {
         if (this.y > -10)  {this.y -= 83;}
    }
    else if (key === 'down') {
          if (this.y < 405) {this.y += 83}
    }
}

// Now instantiate your objects.
var player = new Player();
var enemyOne = new Enemy();
var enemyTwo = new Enemy();
var enemyThree = new Enemy();
var enemyFour = new Enemy();
var enemyFive = new Enemy();
var enemySix = new Enemy();
var enemySeven = new Enemy();
// Place all enemy objects in an array called allEnemies
var allEnemies = [enemyOne, enemyTwo, enemyThree, enemyFour,enemyFive,enemySix,enemySeven];
// Place the player object in a variable called player




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
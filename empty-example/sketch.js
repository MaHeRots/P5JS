var snake;
var gridSize = 20;
var speed = 5;

function setup() {
  //here a board to draw dummy
  createCanvas(windowWidth, windowHeight);

  //You will need as many apples in the drawing
  for (var i = 0; i < 1; i++) {
    putApplesinBasket();
  }
  //And a snake position
  snakePosition = createVector(windowHeight / 2, windowWidth / 2);
  snakeDirection = createVector(0, -1);
  snake = new aSnake(snakePosition, snakeDirection, 4);
}

//A basket of apples : here it is with the creation of a new array
var applesBasket = new Array();

//A way to put your apples in a basket
function putApplesinBasket() {
  applesBasket.push(new anApple(random(width), random(height)));
}

//And a way to put them out
function drawNewApple() {
  for (var i = 0; i < applesBasket.length; i++) {
    applesBasket[i].draw();
  }
}

//here you draw what you want on your board, here and not outside
function draw() {
  //hey you, twit, here a background color
  background(43, 65, 65);
  //And here you  will display your apple. if you want just one : put you apple creation like this
  // createApple(random(width), random(height));
  //in your basket, pit all sof the apples you want
  for (var i = 0; i < 100; i++) {}
  //but if you want to display a lot... go create an array of apples like a basket to put it all in
  //And now, you can put it off
  drawNewApple();
  //Now you will need a snaky snake, shitty but true, if he bitte you, kill him just, you're stronger !
  //go to the snake file
  if (frameCount % speed === 0) {
    snake.move();
  }
  snake.draw();

  if (snake.eat(anApple)) {
    drawNewApple();
  }
}

//ça, j'ai compris mais c'est pas ce qu'on me demande
function keyPressed() {
  if (keyCode === UP_ARROW && snake.direction.y !== 1) {
    snake.direction = createVector(0, -1);
  } else if (keyCode === DOWN_ARROW && snake.direction.y !== -1) {
    snake.direction = createVector(0, 1);
  } else if (keyCode === LEFT_ARROW && snake.direction.x !== 1) {
    snake.direction = createVector(-1, 0);
  } else if (keyCode === RIGHT_ARROW && snake.direction.x !== -1) {
    snake.direction = createVector(1, 0);
  }
}

var snake;
var gridSize = 20;
var speed = 5;
var applesBasket = new Array();

function setup() {
  //here a board to draw dummy
  createCanvas(windowWidth, windowHeight);

  //You will need as many apples in the drawing
  for (var i = 0; i < 10; i++) {
    applesBasket.push(
      new anApple(Math.round(random(width)), Math.round(random(height)))
    );
  }
  //And a snake position
  snakePosition = createVector(
    Math.round(windowHeight / 2),
    Math.rounwindowWidth / 2
  );
  snakeDirection = createVector(0, -1);
  snake = new aSnake(snakePosition, snakeDirection, 4);
}

//And a way to put them out
function drawApple() {
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
  //but if you want to display a lot... go create an array of apples like a basket to put it all in
  //And now, you can put it off
  drawApple();
  //Now you will need a snaky snake, shitty but true, if he bitte you, kill him just, you're stronger !
  //go to the snake file
  if (frameCount % speed === 0) {
    snake.move();
  }
  snake.draw();

  if (snake.eat(applesBasket)) {
    drawApple();
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

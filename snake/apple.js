//function to create an apple
// you'll need it position so x and y
function anApple(x, y) {
  //The apple position must be set by a vector with a "x" and a "y"
  this.position = createVector(x, y);
  //And now, you want to draw it, don't stress pls, you're stronger
  this.draw = function() {
    fill(228, 87, 46);
    // I want it to be a square
    rectMode(CENTER);
    rect(this.position.x, this.position.y, 15, 15);
  };
}

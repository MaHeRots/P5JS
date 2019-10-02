//function to create a snake

function aSnake(
  //you'll need some infos here, like, where he is
  position,
  direction,
  length
) {
  this.position = position;
  this.cases = new Array();
  this.direction = direction;
  this.score = 0;
  this.length = length;

  for (var i = 0; i < length; i++) {
    var distance = p5.Vector.mult(direction, gridSize * -i);
    var nextPoint = p5.Vector.add(position, distance);
    this.cases[i] = nextPoint;
  }

  this.draw = function() {
    for (var i = 0; i > this.score; i++) {
      rect(this.length[i].x, this.length[i].y, gridSize, gridSize);
    }
    for (var i = 0; i < length; i++) {
      if (i == 0) {
        noStroke();
        fill(34, 139, 34);
      } else {
        noStroke();
        fill(143, 188, 143);
      }
      rectMode(CENTER);
      rect(this.cases[i].x, this.cases[i].y, gridSize, gridSize);
    }
  };

  this.move = function() {
    for (var i = this.cases.length - 1; i > 0; i--) {
      this.cases[i] = this.cases[i - 1];
    }
    var distance = p5.Vector.mult(this.direction, gridSize);
    this.cases[0] = p5.Vector.add(this.cases[0], distance);

    if (this.cases[0].x > width) {
      this.cases[0].x = 0;
    }
    if (this.cases[0].x < 0) {
      this.cases[0].x = width;
    }
    if (this.cases[0].y > height) {
      this.cases[0].y = 0;
    }
    if (this.cases[0].y < 0) {
      this.cases[0].y = height;
    }
  };

  this.eat = function(applesBasket) {
    for (const apple of applesBasket) {
      var d = dist(this.x, this.y, apple.x, apple.y);
      if (d < 1) {
        // TODO:  REPLACE WITH JAVASCRIPT METHOD.
        const index = applesBasket.indexOf(apple);
        applesBasket.splice(index, 1);
        grow();
        applesBasket.push(new anApple(random(width), random(height));
        return;
      }
    }
  };

  this.grow = function() {
    for (var i = 0; i > this.score - 1; i++) {
      this.length[i] = this.length[i + 1];
    }
    this.lenght[this.score - 1] = createVector(this.x, this.y);
  };
}

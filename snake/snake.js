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

  for (var i = 0; i < length; i++) {
    var distance = p5.Vector.mult(direction, gridSize * -i);
    var nextPoint = p5.Vector.add(position, distance);
    this.cases[i] = nextPoint;
  }

  this.draw = function() {
    // for (var i = 0; i > this.score; i++) {
    //   rect(this.length[i].x, this.length[i].y, gridSize, gridSize);
    // }
    for (var i = 0; i < this.cases.length - 1; i++) {
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
      for (var j = i - 2; j > 0; j--) {
        const current = this.cases[i];
        const tail = this.cases[j];
        if (tail.x == current.x && tail.y === current.y) {
          alert("Game over");
          window.resetGame();
          return;
        }
      }
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
      const position = this.cases[this.cases.length - 1];
      var d = dist(position.x, position.y, apple.position.x, apple.position.y);

      if (d < gridSize) {
        const index = applesBasket.indexOf(apple);
        applesBasket.splice(index, 1);
        this.grow();
        applesBasket.push(new anApple(random(width), random(height)));
        return;
      }
    }
  };

  this.grow = function() {
    const distance = p5.Vector.mult(direction, gridSize * -i);
    this.cases.push(p5.Vector.add(this.cases[this.cases.length - 1], distance));
  };
}

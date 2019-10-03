var lines = new Array();

function setup() {
  //here a board to draw dummy

  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  lines = new Array();
  for (var i = 0; i < 2; i++) {
    lines.push(new motif(60, 90, round(random(10), 0)));
  }
  noLoop();
}

function drawBigMotif(x, y, width, height) {
  if (random() < 0.5) {
    motif(x, y, width, height / 2, random(10));
    motif(x, y, width / 2, height, random(10));
    // noFill();
    // rect(x, y + height / 2, width, height / 2);
  } else {
    motif(x + width / 2, y, width / 2, height, random(10));
    motif(x, y + height / 2, width, height / 2, random(10));
    // noFill();
    // rect(x, y + height / 2, width, height / 2);
  }
}

//here you draw what you want on your board, here and not outside
function draw() {
  background(220, 220, 220);
  var linesNumber = 10;
  var step_y = height / linesNumber;
  for (var i_y = 0; i_y < linesNumber; i_y++) {
    var columnsNumber = 10;
    var step_x = width / columnsNumber;
    for (var i_x = 0; i_x < columnsNumber; i_x++) {
      var x = i_x * step_x;
      var y = i_y * step_y;
      drawBigMotif(x, y, step_x, step_y);
    }
  }
}

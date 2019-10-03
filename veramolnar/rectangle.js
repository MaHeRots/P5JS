function motif(x, y, width, height, pointsNumber) {
  push();
  translate(x, y);
  const firstPointHorizontalPlace = [];
  const firstPointVerticalPlace = [];

  for (var i = 0; i < width; i++) {
    firstPointHorizontalPlace.push((i * width) / pointsNumber);
  }

  for (var i = 0; i < height; i++) {
    firstPointVerticalPlace.push((i * height) / pointsNumber);
  }

  for (var i = 0; i < pointsNumber; i++) {
    var ramdomCase = random("1", "2", "3");
    switch (ramdomCase) {
      case "1":
        line(firstPointHorizontalPlace[i], 0, 0, firstPointVerticalPlace[i]);
        line(
          width,
          firstPointVerticalPlace[i],
          firstPointHorizontalPlace[i],
          height
        );
        break;
      case "2":
        line(
          width,
          firstPointVerticalPlace[i],
          firstPointHorizontalPlace[i],
          height
        );
        break;
      case "3":
        line(firstPointHorizontalPlace[i], 0, 0, firstPointVerticalPlace[i]);
        break;
      default:
        line(firstPointHorizontalPlace[i], 0, 0, firstPointVerticalPlace[i]);
        line(
          width,
          firstPointVerticalPlace[i],
          firstPointHorizontalPlace[i],
          height
        );
    }
  }
  pop();
}

https://p5js.org/reference/#/p5/noLoop

## Next Steps
- End game when it touches itself.
- Change switch to if statement to prevent backward movements.
- There is frickin BUGGG!!!

## When White Box Touch
function match (arr) {
  for (let i = 1; i < boxes.length; i++) {
    for (let j = i+1; j < boxes.length; j++) {
      let d = dist(boxes[i].x, boxes[i].y, boxes[j].x, boxes[j].y);

      if(d < squareRadius) {
        noLoop();
      }
    }
  }
    
  return false;
}

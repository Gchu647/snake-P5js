let x = 200;
let y = 200;


function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  fill(0);
  rect(x, y, 50, 50);
}
function keyTyped() {
  switch (key) {
    case 'w':
      y = y - 20;
      break;
    case 's':
      y = y + 20;
      break;
    case 'a':
      x = x - 20;
      break;
    case 'd':
      x = x + 20;
      break;
    default:
      break;
  }
}
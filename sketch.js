let currentX = 100;
let currentY = 100;
let previousX = 100;
let previousY = 100;


function setup() {
  createCanvas(1200, 1200);
}

function draw() {
  fill(0);
  rect(currentX, currentY, 50, 50);
}
function keyTyped() {
  let tempX = currentX;
  let tempY = currentY;

  clear();

  switch (key) {
    case 'w':
      currentY = previousY - 50;
      break;
    case 's':
      currentY = previousY + 50;
      break;
    case 'a':
      currentX = previousX - 50;
      break;
    case 'd':
      currentX = previousX + 50;
      break;
    default:
      break;
  }

  previousX = tempX;
  previousY = tempY;
}
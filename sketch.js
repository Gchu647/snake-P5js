let x = 150;
let y = 200;


function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  background(220);
  fill(0);
  rect(x, y, 20, 20);

  switch (key) { // moves square in a different direction
    case 'w':
      y = y - 3;
      break;
    case 's':
      y = y + 3;
      break;
    case 'a':
      x = x - 3;
      break;
    case 'd':
      x = x + 3;
      break;
    default:
      break;
  }
}

function keyTyped() {
  if (key === 'w' || key === 'a' || key === 's' || key === 'd') {
    loop();
  } else {
    noLoop();
  }
}

// function keyTyped() {
//   switch (key) {
//     case 'w':
//       y = y - 20;
//       break;
//     case 's':
//       y = y + 20;
//       break;
//     case 'a':
//       x = x - 20;
//       break;
//     case 'd':
//       x = x + 20;
//       break;
//     default:
//       break;
//   }
// }
let x = 0;
let y = 200;


function setup() {
  createCanvas(500, 500);
  noLoop();
}

function draw() {
  background(220);
  fill(0);
  rect(x, y, 20, 20);
  x = x + 1;
}

function keyTyped() {
  if (key === 'd') {
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
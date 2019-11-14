let x = 250;
let y = 250;
let x2 = Math.floor(Math.random() * 470);
let y2 = Math.floor(Math.random() * 470);
let squareRadius = 20;
let firstLoop = true;


function setup() {
  createCanvas(500, 500);
  noLoop();
  frameRate(180);
}

function draw() {
  background(220);
  // black square code
  rectMode(CENTER);
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
  
  // red square code
  rectMode(CENTER);
  fill('#f54242');
  rect(x2, y2, 20, 20);

  // move red square if d is too close
  let d = dist(x, y, x2, y2);
  console.log('distance: ', d);
  
  if (d <= squareRadius) {
    x2 = Math.floor(Math.random() * 500);
    y2 = Math.floor(Math.random() * 500);
  }
}

function keyTyped() {
  if (key === 'w' || key === 'a' || key === 's' || key === 'd') {
    loop();
  } else {
    noLoop();
  }
}
let x1 = 250;
let y1 = 250;
let x2 = Math.floor(Math.random() * 470);
let y2 = Math.floor(Math.random() * 470);
let squareRadius = 20;
let addSquare = 0;


function setup() {
  createCanvas(500, 500);
  noLoop();
  box = new Box(0);
}

function keyTyped() {
  if (key === 'w' || key === 'a' || key === 's' || key === 'd') {
    loop();
  } else {
    noLoop();
  }
}

function draw() {
  background(220);
  // black square code
  box.display();

  switch (key) { // moves square in a different direction
    case 'w':
      y1 = y1 - 3;
      break;
    case 's':
      y1 = y1 + 3;
      break;
    case 'a':
      x1 = x1 - 3;
      break;
    case 'd':
      x1 = x1 + 3;
      break;
    default:
      break;
  }
  
  // red square code
  rectMode(CENTER);
  fill('#f54242');
  rect(x2, y2, 20, 20);

  // move red square if d is too close
  let d = dist(x1, y1, x2, y2);
  console.log('distance: ', d);
  
  if (d <= squareRadius) {
    x2 = Math.floor(Math.random() * 500);
    y2 = Math.floor(Math.random() * 500);
    addSquare ++;
  }
}

class Box {
  constructor (color) {
    this.x = 250
    this.y = 250
    this.width = 20;
    this.height = 20;
    this.color = color || 255;
  }

  display () {
    rectMode(CENTER);
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }
}
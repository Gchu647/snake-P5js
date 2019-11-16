let squareRadius = 20;
let addSquare = 0; // will use for later

function setup() {
  createCanvas(500, 500);
  noLoop();
  box1 = new Box(0);
  box2 = new Box('#f54242');
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
  box1.display();
  box1.move();
  
  // red square code
  box2.display();
  box2.teleport(box1.x, box1.y);
}

class Box {
  constructor (color) {
    this.x = Math.floor(Math.random() * 400);
    this.y = Math.floor(Math.random() * 400);
    this.width = 20;
    this.height = 20;
    console.log(color);
    this.color = color;
  }

  x () {
    return this.x;
  }

  y () {
    return this.y;
  }

  move () {
    switch (key) { // moves square in a different direction
      case 'w':
        this.y = this.y - 3;
        break;
      case 's':
        this.y = this.y + 3;
        break;
      case 'a':
        this.x = this.x - 3;
        break;
      case 'd':
        this.x = this.x + 3;
        break;
      default:
        break;
    }
  }

  teleport(x2, y2) {
    let d = dist(this.x, this.y, x2, y2);
  
    if (d <= squareRadius) {
      this.x = Math.floor(Math.random() * 500);
      this.y = Math.floor(Math.random() * 500);
    }
  }

  display () {
    rectMode(CENTER);
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }
}
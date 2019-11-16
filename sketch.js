let squareRadius = 20;
let addSquare = 0; // will use for later
let boxes = [];
let boxIndex = 2;

function setup() {
  createCanvas(500, 500);
  noLoop();
  // make black square and red square
  box1 = new Box(0);
  box2 = new Box('#f54242');
  //put boxes in an array;
  boxes[0] = box1;
  boxes[1] = box2;
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

  // if more than 2 boxes
  // TEST: display stores boxes from 2 and beyond
  console.log('boxes: ', boxes.length);
  for (let i = 2; i < boxes.length; i++) {
    boxes[i].display();
  }
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
  
    if (d <= squareRadius) { // when box1 touch box2
      this.x = Math.floor(Math.random() * 500);
      this.y = Math.floor(Math.random() * 500);

      // TEST: Store new Box()
      boxes[boxIndex] = new Box(100);
      boxIndex ++
    }
  }

  display () {
    rectMode(CENTER);
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }
}
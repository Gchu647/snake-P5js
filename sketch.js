let squareRadius = 10;
let boxes = [];
let boxIndex = 2;

function setup() {
  createCanvas(500, 500);
  frameRate(25);
  // intial boxes
  boxes[0] = new Box(null, null, '#f54242'); // red box
  boxes[1] = new Box(230, 240); // 1st white box

  //trailing boxes
  // boxes[2] = new Box(240, 240);
  // boxes[3] = new Box(250, 240);
  // boxes[4] = new Box(250, 250);

  noLoop();
}

function draw() {
  background(220);
  //1st white box code
  boxes[1].display();
  boxes[1].move();
  
  // red box code
  boxes[0].display();

  let d = dist(boxes[1].x, boxes[1].y, boxes[0].x, boxes[0].y);
  
  if (d <= squareRadius) { // when boxes[1] touch boxes[0]
    boxes[0].teleport();

    // add new Box() with box[i-1]'s prevX and preVY
    boxes[boxIndex] = new Box(boxes[boxIndex-1].prevX, boxes[boxIndex-1].prevY);
    boxIndex ++;
  }

  // display trailing boxes
  for (let i = 2; i < boxes.length; i++) {
    boxes[i].display();
    boxes[i].follow(boxes[i-1].prevX, boxes[i-1].prevY);
  }
}

function keyTyped() {
  if (key === 'w' || key === 'a' || key === 's' || key === 'd') {
    loop();
  } else {
    noLoop();
  }
}

class Box {
  constructor (x, y, color) {
    this.x = x || Math.floor(Math.random() * 480);
    this.y = y || Math.floor(Math.random() * 480);
    this.width = 10;
    this.height = 10;
    this.color = color || 255;

    // for tracking
    this.prevX = 0;
    this.prevY = 0;
  }

  track() {
    this.prevX = this.x;
    this.prevY = this.y;
  }

  move () { //movement of 1st box
    this.track();

    switch (key) { // moves square in a different direction
      case 'w':
        this.y = this.y - 10;
        break;
      case 's':
        this.y = this.y + 10;
        break;
      case 'a':
        this.x = this.x - 10;
        break;
      case 'd':
        this.x = this.x + 10;
        break;
      default:
        break;
    }
  }

  follow(x2, y2) { // for trailing boxes
    this.track();

    // move
    this.x = x2;
    this.y = y2;
  }

  teleport() {  
    this.x = Math.floor(Math.random() * 480);
    this.y = Math.floor(Math.random() * 480);
  }

  display () {
    rectMode(CENTER);
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }
}
let boxes = [];
let boxIndex = 2;
let squareRadius = 10;
let gameOver = false;

function setup() {
  createCanvas(505, 505);
  console.log('width:', width);
  frameRate(25);
  // intial boxes
  boxes[0] = new Box(null, null, '#f54242'); // red box
  boxes[1] = new Box(); // 1st white box

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

    // add three new Box();
    for (let i = 0; i < 3; i++) {
      let x = boxes[boxIndex-1].prevX;
      let y = boxes[boxIndex-1].prevY;
      boxes[boxIndex] = new Box(x, y);
      boxIndex ++;
    }
  }

  // display all trailing boxes
  for (let i = 2; i < boxes.length; i++) {
    boxes[i].display();
    boxes[i].follow(boxes[i-1].prevX, boxes[i-1].prevY);
  }

  checkGameOver();
}

function keyTyped() {
  if (gameOver === true)
    return;

  if (key === 'w' || key === 'a' || key === 's' || key === 'd') {
    loop();
  } else {
    noLoop();
  }
}

function checkGameOver() {
  // when box touches the border
  if ( (boxes[1].x) > 505 || (boxes[1].x) <= 0 || (boxes[1].y) > 505 || (boxes[1].y) <= 0) {
    gameOver = true;
    noLoop();
  }
}

function range() {
  return Math.floor(Math.random() * 495) + 5;
}

class Box {
  constructor (x, y, color) {
    this.x = x || range();
    this.y = y || range();
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
    this.x = range();
    this.y = range();
  }

  display () {
    rectMode(CENTER);
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }
}
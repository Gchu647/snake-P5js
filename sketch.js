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
  boxes[2] = new Box(240, 240);
  boxes[3] = new Box(250, 240);
  boxes[4] = new Box(250, 250);

  noLoop();
}

function draw() {
  background(220);
  //1st white box code
  boxes[1].display();
  boxes[1].move();
  
  // red box code
  boxes[0].display();
  boxes[0].teleport(boxes[1].x, boxes[1].y);

  // Display trailing boxes
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
    this.x = x || Math.floor(Math.random() * 400);
    this.y = y || Math.floor(Math.random() * 400);
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

  follow(x2, y2) {
    this.track();

    // move
    this.x = x2;
    this.y = y2;
  }

  teleport(x2, y2) {
    let d = dist(this.x, this.y, x2, y2);
  
    if (d <= squareRadius) { // when boxes[1] touch boxes[0]
      this.x = Math.floor(Math.random() * 500);
      this.y = Math.floor(Math.random() * 500);

      // TEST!!!!!
      // boxes[boxIndex] = new Box(100);
      // boxIndex ++
    }
  }

  display () {
    rectMode(CENTER);
    fill(this.color);
    rect(this.x, this.y, this.width, this.height);
  }
}
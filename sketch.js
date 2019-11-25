let boxes = [];
let boxIndex = 2; // index location of boxes to add the next box
let addBox = 0; // # of boxes to add
let squareRadius = 10; // distance between squares
let direction = '';  // to prevent backward movement
let gameOver = false;
let scoreElem;
let prevScore;

function setup() {
  createCanvas(525, 525);
  frameRate(25);
  
  // intial boxes
  boxes[0] = new Box(null, null, '#f54242'); // red box
  boxes[1] = new Box(); // 1st white box

  // Display text to track score
  scoreElem = createDiv('Score = 0');
  scoreElem.position(20, 20);
  scoreElem.class = 'score';
  scoreElem.style('color', 'white');
  scoreElem.style('font-size', '20px');

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
  
  if (d <= squareRadius) { // when 1st white box touch red box
    boxes[0].teleport();
    addBox = 5; // setup to add three new Box();
    
    // track and display your score
    let prevScore = parseInt(scoreElem.html().substring(8));
    scoreElem.html('Score = ' + (prevScore + 1));
  }

  if (addBox > 0) { // add one new Box() every draw() loop
      let x = boxes[boxIndex-1].prevX;
      let y = boxes[boxIndex-1].prevY;
      boxes[boxIndex] = new Box(x, y);
      boxIndex ++;
      addBox --;
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

  if (key === 'w' && direction !== 'down') {
    direction = 'up';
  } else if(key === 's' && direction !== 'up') {
    direction = 'down';
  } else if (key === 'a' && direction !== 'right') {
    direction = 'left';
  } else if (key === 'd' && direction !== 'left') {
    direction = 'right';
  }
}

function checkGameOver() {
  // when box touches the wall
  if ( (boxes[1].x) > width || (boxes[1].x) <= 0 || (boxes[1].y) > width || (boxes[1].y) <= 0) {
    gameOver = true;
    noLoop();
  }

  // when box touch itself
  for (let i = 1; i < boxes.length; i++) {
    for (let j = i+1; j < boxes.length; j++) {
      let d = dist(boxes[i].x, boxes[i].y, boxes[j].x, boxes[j].y);

      if(d < squareRadius) {
        noLoop();
        gameOver = true;
      }
    }
  }
}

function range() {
  // this equation retuns a number from 10 to width 520 in multiples of 10
  return (floor(random((width - 15)/10 )) * 10) + 10;
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

    if (direction === 'up') {
      this.y = this.y - 10; 
    } else if(direction === 'down') {
      this.y = this.y + 10;
    } else if (direction === 'left') {
      this.x = this.x - 10;
    } else if (direction === 'right') {
      this.x = this.x + 10;
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
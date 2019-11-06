let value = '#ffffff';

function setup() {
  createCanvas(640, 480);
}

function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function keyTyped() {
  switch (key) {
    case 'w':
      value = '#fcba03';
      break;
    case 'a':
      value = '#0ee375';
      break;
    case 's':
        value = '#0e87e3';
        break;
    case 'd':
        value = '#e34a0e';
        break;
    default:
      value = '#ffffff';
      break;
  }
}
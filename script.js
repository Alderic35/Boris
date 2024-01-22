let ball;
let ySpeed;
let colours = [ "orange" ,"yellow",];
let index = 0;

function setup() {
  createCanvas(400, 200); // Set the canvas size
  ball = 400; // Initialize the ball position
  ySpeed = 1;
  frameRate(10);
  noStroke();
}

function draw() {
  if (mouseIsPressed)
  {
    background(255, 0, 0);
    ellipse(random(width), random(200), 20);
    
  }
  else
  {
  background(32); //press mouse to make background red and to turn back to black
  }
  // Draw current frame based on state
  circle(random(400), random(ball), (20));
 
  
  // Modify state
  ball = ball + ySpeed;
  if (ball > 200) {
    ySpeed = -3;
  }
  if (ball < 0) {
    ySpeed = 1;
  }
  {
    fill(colours[index ]);
    ellipse(mouseX, mouseY, 20);
    
  }
}

function setup() {
  createCanvas(1000, 800);
 background("rgb(32,221,213)");
} 
function draw() {
  fill('pink');
  stroke('black');
  if (mouseIsPressed)
   rect(mouseX,mouseY,100,200);
} 

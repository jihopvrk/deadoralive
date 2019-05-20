function setup() {
  createCanvas(600, 600);
}
function draw() {
  background(0);
  strokeWeight(3);
  fill(50 + sin(frameCount*.01) * 50);
  if (mouseIsPressed) {
    stroke(255);
  }
  else{
    noStroke();
  }
  textSize(20);
  textLeading((mouseY / height) * 40);
  text("I am not overthinking it. I am not overthinking it. I am not overthinking it. I am not overthinking it. I am not overthinking it. I am not overthinking it. I am not overthinking it. I am not overthinking it. I am not overthinking it. I am not overthinking it. I am not overthinking it. I am not overthinking it. I am not overthinking it. I am not overthinking it. I am not overthinking it. I am not overthinking it. I am not overthinking it. I am not overthinking it. I am not overthinking it. ",
    100, 100, 400, 400);
}

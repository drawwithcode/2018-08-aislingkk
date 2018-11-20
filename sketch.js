var value = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  setMoveThreshold(5);
}

function draw() {
  background(0);
  fill(255-value*10);
  textAlign(CENTER);
  textSize(30);
  text('Shake Your Phone to See Pattern !',width/2,70);
  noStroke();

  for(var i=0;i<=height/100+3;i++){
    for(var j=0;j<=width/100+3;j++){
      var r = random(10);
      if (r<5) {
        fill(value,value,r*10,70);
      } else {
        fill(r*10,value,value,70);
      }
      ellipse(j*100,100*i,value);
    }
  }

  if(value>450){
    value=random(10);
  }

}

function deviceMoved() {
  value++;
}

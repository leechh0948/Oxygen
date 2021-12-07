let oxygen = [];

function setup(){
  createCanvas(600, 600);
}

function draw(){
  background(15);

  if(keyIsPressed){
    if(keyCode == LEFT_ARROW){
      oxygen.push(new Oxygen());
    }
    else if(keyCode == RIGHT_ARROW){
      oxygen.pop();
    }
  }
  for (let i = 0; i < oxygen.length; i++){
    oxygen[i].walk();
    oxygen[i].display();
  }
}

class Oxygen{
  constructor(){
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
  }

  walk(){
    this.vel = createVector(random(-1, 1), random(-1, 1));
    this.pos.add(this.vel);
  }

  display(){
    fill(255);
    ellipse(this.pos.x, this.pos.y, 3, 3);
  }
}

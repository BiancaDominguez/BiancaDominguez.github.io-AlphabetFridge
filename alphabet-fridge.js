let mouseImage;
let mouseX = 100;
let mouseY = 350;
let fridgeImage;
let foundLetter;
let winningText = "Congratulations! You Won!";

let aScore;
let bScore;
let cScore;

let a;
let aX;
let aY;
let b;
let bX;
let bY;
let c;
let cX;
let cY;

let aCollected = false;
let bCollected = false;
let cCollected = false;

function preload() {
  mouseImage = loadImage("mouseImage.png");
  fridgeImage = loadImage("fridgeImage.png");

  a = loadImage("letterA.png");
  b = loadImage("letterB.png");
  c = loadImage("letterC.png");

  aScore = loadImage("letterA.png");
  bScore = loadImage("letterB.png");
  cScore = loadImage("letterC.png");
}

function setup() {
  createCanvas(400, 400);

  aX = random(0,200);
  aY = random(0,200);

  bX = random(0,200);
  bY = random(0,200);

  cX = random(0,200);
  cY = random(0,200);
}

function draw() {
  background("#cedbbf");

  //fridge + mouse images
  noTint();
  image(fridgeImage, 200, 140, 200, 265);
  image(mouseImage, mouseX, mouseY, 100, 50);

//letter Placement
  image(a,aX,aY,20,20);
  image(b,bX,bY,20,20);
  image(c,cX,cY,20,20);

//Score of letters collected
  scored();

//Game End Screen
  if(aCollected == true && bCollected == true && cCollected == true){
  endGame();
}
}

function scored(){
  text("Collected:",240,325);
  textSize(13);
  textFont("Verdana");
  textStyle(BOLD);
  fill("white");

  tint(0);
  image(aScore,230,340,20,20);
  image(bScore,260,340,20,20);
  image(cScore,290,340,20,20);

  if(aCollected == true){
  noTint();
  image(aScore,230,340,20,20);
  fill("#cedbbf");
  noStroke();
  circle(aX + 6,aY + 6,40);
}
if(bCollected == true){
  noTint();
  image(bScore,260,340,20,20);
  fill("#cedbbf");
  noStroke();
  circle(bX + 6,bY + 6,40);
}
if(cCollected == true){
  noTint();
  image(cScore,290,340,20,20);
  fill("#cedbbf");
  noStroke();
  circle(cX + 6,cY + 6,40);
}
}

function endGame() {
fill("#bfdadb");
square(0, 0,400);

  textFont("Verdana");
  textSize(25);
  textAlign(CENTER);
  textStyle(BOLD);
  fill("white");
  text(winningText, 200, 200);
}

function keyPressed() {
  if (key == "ArrowUp") {
    mouseY = mouseY - 10;
  }
  if (key == "ArrowDown") {
    mouseY = mouseY + 10;
  }
  if (key == "ArrowRight") {
    mouseX = mouseX + 10;
  }
  if (key == "ArrowLeft") {
    mouseX = mouseX - 10;
  }
  if (key == "a"){
    aCollected = true;
    print("A collected");
  }
  if(key == "b"){
    bCollected = true;
    print("B Collected");
  }
  if(key == "c"){
    cCollected = true;
    print("C Collected");
  }
}


var background1, background2,back;
var canvas;
var form;
var database;
var game;
var answer;
var allplayers;
var player, playerCount;
var sound;


function preload(){
  background1= loadImage("Background image2.png");
  background2= loadImage("quiz.png");
  sound = loadSound("Sound.mp3")
}
function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database= firebase.database();

  game= new Game();

 
  


}

function draw() {
  background(background2); 
 

  
    game.start();
  
  
 
  
  drawSprites();
}
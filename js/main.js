const game = new Game();
const beatLine = 120;
//let songSound;  
// let canvas = document.getElementById("gameScreen");
// let context = canvas.getContext('2d');



function preload(){
    // songSound = loadSound("/dance-arrow-game/assets/dance-scene-hq.mp3");
    game.preload();
}

function setup(){
    createCanvas(1280,720);
    // songSound.play();
    game.setup();
    

}

function draw(){
    game.draw();


}

function keyPressed(){
   // game.checkCorrectKey(keyCode);
   console.log(game.currentArrow.right);
}

 
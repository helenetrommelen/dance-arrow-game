const game = new Game();
const beatLine = 120;
//let songSound;  
// let canvas = document.getElementById("gameScreen");
// let context = canvas.getContext('2d');
// let sketch = function(p){
//     p.setup;
// };
// new p5(sketch, window.document.getElementById('container'));

function preload(){
    // songSound = loadSound("/dance-arrow-game/assets/dance-scene-hq.mp3");
    game.preload();
}

function setup(){
    mode = 0;
    createCanvas(1280,720);
    // songSound.play();
    game.setup();
}

function draw(){
    game.draw();
}

function keyPressed(){
    if (keyCode === 13 && !game.hasStarted){
        console.log('enter is pressed')
        game.startGame();
    }
   game.checkCorrectKey(keyCode);
   //console.log(game.currentArrow.right);
}

 
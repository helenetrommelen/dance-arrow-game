const game = new Game();
const beatLine = 120;
let gameFont;
let songSound;  
// let canvas = document.getElementById("gameScreen");
// let context = canvas.getContext('2d');
// let sketch = function(p){
//     p.setup;
// };
// new p5(sketch, window.document.getElementById('container'));

function preload(){
    songSound = loadSound("/dance-arrow-game/assets/danceSound.mp3");
    gameFont = loadFont('/dance-arrow-game/assets/PressStart2P-Regular.ttf');
    
    game.preload();
}

function setup(){
    createCanvas(1280,720);
    //frameRate(50);
    //createLoop({duration:3, gif:true});
    
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

 
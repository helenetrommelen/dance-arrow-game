const game = new Game();


function preload(){
    game.preload();
}

function setup(){
    createCanvas(1280,720);
    game.setup();
    
    // const timeSinceGameStart = millis();
    // console.log(timeSinceGameStart);
}

function draw(){
    game.draw();
    // console.log(`score`, game.hit);
}

function keyPressed(){
    game.checkCorrectKey(keyCode);
    //check if current arrow is ready to be pressed
    // let score = arrow.hits();
    // console.log(`score`, game.hit);
    // if (keyCode === 39 && score==='perfect'){ //right arrow
    //     console.log('right arrow is pressed')
    // }

    // if (keyCode === 39){ //right arrow
    //     console.log('right arrow is pressed')
    // }
}

 
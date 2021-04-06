class Game {
    constructor(){
        //this.interval = setInterval(this.draw, 1000);
        this.currentArrow ={
          left: false,
          down: false,
          up: false,
          right: false 
        }; //should say which arrows are overlapping, and if yes which one it is
        this.movingArrowLeft;
        this.movingArrowDown;
        this.movingArrowUp;
        //this.movingArrowRight;
        this.time;
        this.score = 0;
        //this.beat = 0;
    }

    checkCorrectKey(code){

      // if (code === 39 && this.movingArrowRight.direction ==='right'){
      //   console.log('you hit the right arrow')
      // }

      if (code === 39 && this.currentArrow.right){
        console.log('you hit the right arrow')
      } else if (code === 39 && !this.currentArrow.right){
        console.log('you missed')
      }

    }

    setup(){
        this.background = new Background();
        this.movingArrowLeft = new Arrow(this.movingArrowLeftImg,0);//have to go inside the cons

        this.movingArrowRight = [];
        //this.movingArrowLeft = [true, true, true, false, true, true, true, true, false, true, false, true, true, true, true, true, true, true];
        // let timeSinceGameStart = millis();
        // this.time = timeSinceGameStart;
        // console.log(`${timeSinceGameStart} setup`);
      }

    preload(){
        this.backgroundImage = loadImage('/dance-arrow-game/assets/background-1.png');

        //load static arrows i nbackground
        this.staticArrowLeft = loadImage('/dance-arrow-game/assets/arrow-bw-left.png');
        this.staticArrowDown = loadImage('/dance-arrow-game/assets/arrow-bw-down.png');
        this.staticArrowUp = loadImage('/dance-arrow-game/assets/arrow-bw-up.png');
        this.staticArrowRight = loadImage('/dance-arrow-game/assets/arrow-bw-right.png');

        //load moving arrows in game
        this.movingArrowLeftImg = loadImage('/dance-arrow-game/assets/arrow-color-left.png');
        this.movingArrowDownImg = loadImage('/dance-arrow-game/assets/arrow-color-down.png');
        this.movingArrowUpImg = loadImage('/dance-arrow-game/assets/arrow-color-up.png');
        this.movingArrowRightImg = loadImage('/dance-arrow-game/assets/arrow-color-right.png');
    }

    draw(){
      clear();
      //console.log('draw game');
      this.background.draw();
      let timeSinceGameStart = millis();
      this.time = timeSinceGameStart;
      //console.log(`${this.time} draw`);
      this.movingArrowLeft.draw();

      if(this.time % 3000 < 20) {
        //console.log('do something every 1s')
        this.movingArrowRight.push(new Arrow(this.movingArrowRightImg,300, 'right'))
      }

      this.movingArrowRight.forEach(function(arrow){
        arrow.draw();
        //console.log('ARROW WITHIN RANGE', arrow.targetOpen);
        // const scoreElement = arrow.targetOpen;
        // // console.log(scoreElement);
        // if (scoreElement === 'perfect'){
  
        //    this.score +=100;
        //    console.log(this.score)
        // }
      })

      //if (movingArrowRight.hits(this.))

      
      //console.log(`${timeSinceGameStart} draw`);
      //console.log(`${this.time} draw`);
      



      //do something every beat
      //loop through array of beats.
      //draw new arrow object
      //check for every bea
      //score system


    }
    
}
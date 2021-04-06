class Game {
    constructor(){
        //this.interval = setInterval(this.draw, 1000);
        this.currentArrow ={
          left: false,
          down: false,
          up: false,
          right: false 
        }; //should say which arrows are overlapping, and if yes which one it is
        // this.movingArrowLeft;
        // this.movingArrowDown;
        // this.movingArrowUp;
        //this.movingArrowRight;
        this.time;
        this.score = 0;
        this.streak = 0;
        this.multiplier = {
          perfect: false,
          good: false,
          bad: false,
          miss: false
        }
        this.songSound;
        this.accuracyText = '';

    }

    checkCorrectKey(code){

      // if (code === 39 && this.movingArrowRight.direction ==='right'){
      //   console.log('you hit the right arrow')
      // }
      if (code === 39 && this.currentArrow.right && this.multiplier.perfect){
        this.score += 100;
        this.streak++;
        this.accuracyText = 'PERFECT'
      } if (code === 39 && this.currentArrow.right && this.multiplier.good){
        this.score += 50;
        this.streak++;
        this.accuracyText = 'GOOD'
      } if (code === 39 && this.currentArrow.right && this.multiplier.bad){
        this.score += 20;
        this.streak++;
        this.accuracyText = 'BAD'
      } else if (code === 39 && !this.currentArrow.right){
        console.log('you missed')
        this.streak = 0;
        this.accuracyText = 'MISS'
      }

      // if (code === 38 && this.currentArrow.up && this.multiplier.perfect){
      //   this.score += 100;
      //   this.streak++;
      // } if (code === 38 && this.currentArrow.up && this.multiplier.good){
      //   this.score += 50;
      //   this.streak++;
      // } if (code === 38 && this.currentArrow.up && this.multiplier.bad){
      //   this.score += 20;
      //   this.streak++;
      // } else if (code === 38 && !this.currentArrow.up){
      //   console.log('you missed')
      //   this.streak = 0;
      // }

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

        //load sound
        // soundFormats('mp3', 'ogg');
        // songSound = loadSound('/dance-arrow-game/assets/dance-scene-hq.mp3');
        
    }

    draw(){
      clear();
      //console.log('draw game');
      this.background.draw();
      let timeSinceGameStart = millis();
      this.time = timeSinceGameStart;
      //console.log(`${this.time} draw`);
      this.movingArrowLeft.draw();
      
      

      if(this.time % 2000 < 20) {
        //console.log('do something every 1s')
        this.movingArrowRight.push(new Arrow(this.movingArrowRightImg,300, 'right'))
      }

      this.movingArrowRight.forEach(function(arrow){
        arrow.draw();
      });

      textSize(48);
      fill(255,255,255);
      text(`${this.accuracyText}`,100, 400);

      
      //console.log(`${timeSinceGameStart} draw`);
      //console.log(`${this.time} draw`);

    }
    
}
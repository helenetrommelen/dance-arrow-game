

class Game {
    constructor(){
        this.hasStarted = false;
        this.movingArrowLeft = [];
        
        // this.movingArrowDown;
        this.movingArrowUp = [];
        this.movingArrowRight = [];
        this.time;
        this.score = 0;
        this.streak = 0;
        this.dancingGif;

        this.dancingImages;
        this.dancing;
        this.songSound;
        this.accuracyText = '';
        this.activeArrow;
        this.activeArrowLeft;
    }

    startGame(){
      this.hasStarted= true;
    }

    gamePlay(){
      let timeSinceGameStart = millis();
        this.time = timeSinceGameStart;
        //console.log(`${this.time} draw`);

        //left arrow
        if(this.time % 3500 < 20) {
          this.movingArrowLeft.push(new Arrow(this.movingArrowLeftImg,0, 'left'))
        }

        //up arrow
        if(this.time % 6500 < 20) {
          this.movingArrowUp.push(new Arrow(this.movingArrowUpImg,0, 'up'))
        }

        //right arrows
        if(this.time % 2000 < 20) {
          this.movingArrowRight.push(new Arrow(this.movingArrowRightImg,300, 'right'))
        }

        this.movingArrowLeft.forEach(function(arrow){
          arrow.draw();
        });
      
        this.movingArrowRight.forEach(function(arrow){
          arrow.draw();
        });

        //show accuracy text
        textFont(gameFont);
        textSize(48);
        fill(255,255,255);
        text(`${this.accuracyText}`,100, 400);
    }

    preload(){
        this.backgroundImage = loadImage('/dance-arrow-game/assets/background-2.png');
        this.dancingGif = loadGif("/dance-arrow-game/assets/twistGif.gif");
        

        //load static arrows in background
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

    setup(){
      this.background = new Background();
      //songSound.play();
    }

    draw(){
      
      clear();
      this.background.draw();

      if (game.hasStarted){
        
        if(!songSound.isPlaying()){
          songSound.play();
        }
        if(this.time > 11000){
          image(this.dancingGif, 600, 220);
        }
        this.gamePlay();
      } else {
        textFont(gameFont);
        fill(246,255,0);
        textSize(68);
        text(`GET READY!`, 300, 300)
      }
    }//end of draw

    removeHit(){
    return this.movingArrowRight = this.movingArrowRight.filter(arrow =>{
      return ((arrow !== this.activeArrow));
    })
  }

    removeHitLeft(){
      return this.movingArrowLeft = this.movingArrowLeft.filter(arrow =>{
        return ((arrow !== this.activeArrowLeft));
      })
  }
    
    checkCorrectKey(code){
      //every time a right key arrow is pressed you loop through arrows in the right arrow array. and for each arrow check.
      // if (code === 39 && this.movingArrowRight.direction ==='right'){
      //   console.log('you hit the right arrow')
      // }
      //console.log('checkCorrectkey entered', code, this.currentArrow.right, this.multiplier);
      if (code === 39){
        //console.log()
        //console.log('right key is pressed');
        for (let i=0; i<this.movingArrowRight.length; i++){
          let arrow = this.movingArrowRight[i];    
          // arrow', this.activeArrow);   
          if (arrow.currentArrow.right){
            if (arrow.multiplier.perfect){
              this.score += 100;
              this.streak++;
              this.accuracyText = 'PERFECT';
              this.removeHit();
            } else if (arrow.multiplier.good){
              this.score += 50;
              this.streak++;
              this.accuracyText = 'GOOD';
              this.removeHit();
            } else if (arrow.multiplier.bad){
              this.score += 20;
              this.streak++;
              this.accuracyText = 'O.K.';
              this.removeHit();
            } 
            //else {
              //console.log('you missed') // this one is not detected
            //}
          } else {
            //console.log('you missed');
            //if miss and streak are set to 0 here, it's always 0
          }
        }
        // if(!arrow.currentArrow.right){
        //   console.log('you missed');        
        // }
      }
    
      if (code === 37){
        //console.log('left key is pressed');
        //console.log(this.movingArrowLeft);
        for (let j=0; j<this.movingArrowLeft.length; j++){
          let arrowL = this.movingArrowLeft[j];  
          //console.log('this.active arrow L', this.activeArrowLeft);
          if (arrowL.currentArrow.left){
            //console.log('left arrow in reach')
            if (arrowL.multiplier.perfect){
              this.score += 100;
              this.streak++;
              this.accuracyText = 'PERFECT';
              this.removeHitLeft();
            } else if (arrowL.multiplier.good){
              this.score += 50;
              this.streak++;
              this.accuracyText = 'GOOD';
              this.removeHitLeft();
            } else if (arrowL.multiplier.bad){
              this.score += 20;
              this.streak++;
              this.accuracyText = 'O.K.';
              this.removeHitLeft();
            } //else {
              //console.log('you missed') // this one is not detected
            //}
          } else {
            //console.log('you missed');
            //if miss and streak are set to 0 here, it's always 0
          }
        }
      }
    }
  }
      // if (code === 39 && this.currentArrowL.right && this.multiplier.perfect){
        
      //   console.log('you hit perfect')
      //   this.score += 100;
      //   this.streak++;
      //   this.accuracyText = 'PERFECT'
      //   this.wasClicked = true;
      //   this.currentArrow.right = false;
    //     //remove arrows on top
    //     // console.log(this.movingArrowRight)
    //     // this.movingArrowRight = this.movingArrowRight.filter(arrow =>{
    //     // return ((arrow !== this.activeArrow));
        
    //     // this.wasClicked = false
    //     // if (this.wasClicked) {
    //     //   return false; //because arrows should not exist
    //     // } else {
    //     //   return true; //missed arrows
    //     // }
    //   // })
    //     console.log(this.movingArrowRight)
    //   } else if (code === 39 && this.currentArrow.right && this.multiplier.good){
    //     // console.log('you hit good')
    //     this.score += 50;
    //     this.streak++;
    //     this.accuracyText = 'GOOD'
    //     this.wasClicked = true;
    //     this.currentArrow.right = false;
    //     // this.movingArrowRight = this.movingArrowRight.filter(arrow =>{
    //     //   return ((arrow !== this.activeArrow));
    //     // })
        
    //   }else if (code === 39 && this.currentArrow.right && this.multiplier.bad){
    //     // console.log('you hit ok')
    //     this.score += 20;
    //     this.streak++;
    //     this.accuracyText = 'O.K.'
    //     this.wasClicked = true;
    //     // this.movingArrowRight = this.movingArrowRight.filter(arrow =>{
    //     //   return ((arrow !== this.activeArrow));
    //     // })
    //   }
    //   // } else if (code === 39 && !this.currentArrow.right){
    //   //   // console.log('you missed')
    //   //   this.streak = 0;
    //   //   this.accuracyText = 'MISS'
    //   //   // this.wasClicked = false;
    //   // } else {this.wasClicked = false;}

    //   // if (code === 38 && this.currentArrow.up && this.multiplier.perfect){
    //   //   this.score += 100;
    //   //   this.streak++;
    //   // } if (code === 38 && this.currentArrow.up && this.multiplier.good){
    //   //   this.score += 50;
    //   //   this.streak++;
    //   // } if (code === 38 && this.currentArrow.up && this.multiplier.bad){
    //   //   this.score += 20;
    //   //   this.streak++;
    //   // } else if (code === 38 && !this.currentArrow.up){
    //   //   console.log('you missed')
    //   //   this.streak = 0;
    //   // }
    // }

    // clickedSuccesfully(){
    //   if (this.multiplier.perfect || this.multiplier.good || this.multiplier.bad);
    // }
    

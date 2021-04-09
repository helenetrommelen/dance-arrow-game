class Arrow {
  constructor(arrowImg, x, direction){
    this.direction = direction;
    this.arrowImg = arrowImg;
    this.x = x;
    this.y = height - 50 //they start just cunder the screen: -50
    // this.targetOpen = {
    //   perfect: false,
    //   good: false,
    //   bad: false,
    //   miss: false
    // }
    this.currentArrow ={
      left: false,
      down: false,
      up: false,
      right: false 
    }
    this.multiplier = {
      perfect: false,
      good: false,
      bad: false,
      miss: false
    }

  }

  withinHittingRange(){
    //check for collision
    
    //right arrows
    if(this.direction === 'right' && this.y > beatLine - 25 && this.y < beatLine + 25){
      this.currentArrow.right = true;
      game.activeArrow = this;
      //console.log(game.activeArrow);
    }
    
    if (this.direction === 'right' && (this.y <= beatLine + 2 && this.y >= beatLine - 2)){
      this.multiplier.perfect = true;
      game.activeArrow = this;
    } else if (this.direction === 'right' && (this.y >= beatLine-10 && this.y<beatLine-2) || (this.y > beatLine+2 && this.y <= beatLine+10)){
      //console.log('right arrow detected: good');
      this.multiplier.good = true;
      game.activeArrow = this;
    }  else if (this.direction === 'right' && (this.y > beatLine-25 && this.y<beatLine-10) || (this.y > beatLine+10 && this.y < beatLine+25)){
      //console.log('right arrow detected: bad');
      this.multiplier.bad = true;
      game.activeArrow = this;
    }
    
    //left arrows
    if(this.direction === 'left' && this.y > beatLine - 25 && this.y < beatLine + 25){
      this.currentArrow.left = true;
      game.activeArrowLeft = this;
      //console.log(game.activeArrowLeft);
    }
    
    if (this.direction === 'left' && (this.y <= beatLine + 2 && this.y >= beatLine - 2)){
      this.multiplier.perfect = true;
      game.activeArrowLeft = this;
    } else if (this.direction === 'left' && (this.y >= beatLine-10 && this.y<beatLine-2) || 
    (this.y > beatLine+2 && this.y <= beatLine+10)){
      //console.log('left arrow detected: good');
      this.multiplier.good = true;
      game.activeArrowLeft = this;
    }  else if (this.direction === 'left' && (this.y > beatLine-25 && this.y<beatLine-10) || 
    (this.y > beatLine+10 && this.y < beatLine+25)){
      //console.log('left arrow detected: bad');
      this.multiplier.bad = true;
      game.activeArrowLeft = this;
    }
    // else if (this.direction === 'right' && this.y < beatLine - 25){
    //   console.log('right arrow detected: miss')
    //   game.multiplier.miss = true;
    // }
    else {
      this.currentArrow.right = false;
      this.currentArrow.left = false;
      this.multiplier.perfect = false;
      this.multiplier.good = false;
      this.multiplier.bad = false;
      this.multiplier.miss = false;
      //console.log("2 exit  currentArrow.right to true statement", game.currentArrow.right);
    }
  }

  // clickedSuccesfully(){
  //   if (game.wasClicked){
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  checkWhichArrow(){
    if (arrow.currentArrow.right){
      return console.log('current arrow is set to true', arrow.currentArrow.right)
    } else {return console.log('currentArrow.right is false', arrow.currentArrow.right)}
  }

  draw(){
    this.y--; //speed with wich the arrow moves upwards
    image(this.arrowImg, this.x, this.y, 100, 100);
    this.withinHittingRange();
    // image(game.movingArrowDown, 100, yStatArr);
    // image(game.movingArrowUp, 200, yStatArr);
    // image(game.movingArrowRight, 300, yStatArr); 
  }
}


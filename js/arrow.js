class Arrow {
  constructor(arrowImg, x, direction){
    this.direction = direction;
    this.arrowImg = arrowImg;
    this.x = x;
    this.y = height - 500 //they start just cunder the screen: -50
    // this.targetOpen = {
    //   perfect: false,
    //   good: false,
    //   bad: false,
    //   miss: false
    // }

  }

  withinHittingRange(){
    //check for collision
  
    if(this.direction === 'right' && this.y > beatLine - 25 && this.y < beatLine + 25){
      game.currentArrow.right = true;
    }if (this.direction === 'right' && (this.y <= beatLine + 2 && this.y >= beatLine - 2)){
      console.log('right arrow detected: perfect');
      game.multiplier.perfect = true;
    } else if (this.direction === 'right' && (this.y > beatLine-10 && this.y<beatLine-2) || (this.y > beatLine+2 && this.y < beatLine+10)){
      //console.log('right arrow detected: good');
      game.multiplier.good = true;
    }  else if (this.direction === 'right' && (this.y > beatLine-25 && this.y<beatLine-10) || (this.y > beatLine+10 && this.y < beatLine+25)){
      //console.log('right arrow detected: bad');
      game.multiplier.bad = true;}
    // } else if (this.direction === 'right' && this.y < beatLine - 25){
    //   //console.log('right arrow detected: miss')
    //   game.multiplier.miss = true;
    // }

    // if(this.direction === 'up' && this.y > beatLine - 25 && this.y < beatLine + 25){
    //   game.currentArrow.up = true;
    // }if (this.direction === 'up' && (this.y <= beatLine + 2 && this.y >= beatLine - 2)){
    //   //console.log('up arrow detected: perfect');
    //   game.multiplier.perfect = true;
    // } else if (this.direction === 'up' && (this.y > beatLine-10 && this.y<beatLine-2) || (this.y > beatLine+2 && this.y < beatLine+10)){
    //   //console.log('up arrow detected: good');
    //   game.multiplier.good = true;
    // }  else if (this.direction === 'up' && (this.y > beatLine-25 && this.y<beatLine-10) || (this.y > beatLine+10 && this.y < beatLine+25)){
    //   //console.log('up arrow detected: bad');
    //   game.multiplier.bad = true;
    // } else if (this.direction === 'up' && this.y < beatLine - 25){
    //   console.log('up arrow detected: miss')
    //   game.multiplier.miss = true;
    // }
    else {
      game.currentArrow.up = false;
      game.currentArrow.right = false;
      game.multiplier.perfect = false;
      game.multiplier.good = false;
      game.multiplier.bad = false;
    }
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


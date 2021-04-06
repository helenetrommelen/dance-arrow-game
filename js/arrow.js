class Arrow {
  constructor(arrowImg, x, direction){
    this.direction = direction;
    this.arrowImg = arrowImg;
    this.x = x;
    this.y = height - 500 //they start just cunder the screen
    this.targetOpen;

  }

  withinHittingRange(){
    //check for collision
    // console.log(this.arrowImg);
    if (this.direction === 'right' && (this.y < 130 && this.y > 110)){
      console.log('right arrow detected');
      game.currentArrow.right = true;
    } else {
      game.currentArrow.right = false;
    }
    // if (this.y < 130 && this.y > 110){
    //     let score = 'perfect';
    //     console.log('arrow target is open for perfect hit');
    //     return score;
    // }


  }

  draw(){
    //console.log('draw arrow moving')
    //console.log(`${this.time} draw`);
    this.y--; //speed with wich the arrow moves upwards
    // console.log(this.arrowImg);
    image(this.arrowImg, this.x, this.y, 100, 100);
    this.withinHittingRange();
    // image(game.movingArrowDown, 100, yStatArr);
    // image(game.movingArrowUp, 200, yStatArr);
    // image(game.movingArrowRight, 300, yStatArr); 
  }
}

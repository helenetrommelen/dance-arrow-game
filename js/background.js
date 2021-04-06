class Background {
  constructor(){
    this.staticArrowLeft;
    this.staticArrowDown;
    this.staticArrowUp;
    this.staticArrowRight;
  }
    draw() {
      image(game.backgroundImage, 0, 0, width, height);
      //console.log('draw background image');

      const yStatArr = 120;

      image(game.staticArrowLeft, 0, yStatArr);
      image(game.staticArrowDown, 100, yStatArr);
      image(game.staticArrowUp, 200, yStatArr);
      image(game.staticArrowRight, 300, yStatArr);
      //console.log('draw static arrow');
    }
}
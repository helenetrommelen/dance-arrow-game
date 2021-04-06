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

      //static arrows
      image(game.staticArrowLeft, 0, yStatArr);
      image(game.staticArrowDown, 100, yStatArr);
      image(game.staticArrowUp, 200, yStatArr);
      image(game.staticArrowRight, 300, yStatArr);

      //score
      textSize(48);
      fill(255,255,255);
      text(`${game.score}`,350, 75);
      textSize(24);
      text(`streak: ${game.streak}`,350, 100);
      //console.log('draw static arrow');
    }
}
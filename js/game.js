class Game {
    constructor(){
        this.backgroundImage;
    }

    setup(){
        this.background = new Background();
    }

    preload(){
        this.backgroundImages = loadImage('/assets/background-1.png');
    }
}
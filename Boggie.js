class Boggie{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,50,50);
        this.boggieImg = loadImage("Images/Engine.png");
        this.width = 150;
        this.height = 150;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        //rotate();
        //translate();
        imageMode(CENTER);
        image(this.boggieImg,pos.x,pos.y,this.width, this.height);
        pop();
    }
}
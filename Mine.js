class Mine{
    constructor(x,y){
        this.body= Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.mineimage = loadImage("Images/mine.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.mineimage,pos.x,pos.y,  this.width, this.height);
        pop();
      }
}
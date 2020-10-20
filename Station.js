class Station{
    constructor(x,y){
        this.body= Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
        this.STimage = loadImage("Images/Sation.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.STimage,pos.x,pos.y,  this.width, this.height);
        pop();
      }
}
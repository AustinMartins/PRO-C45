class Coal{
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,50,50);
        this.coalImg = loadImage("Images/cooal.jpg");
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
        image(this.coalImg,pos.x,pos.y,this.width, this.height);
        pop();
    }
}
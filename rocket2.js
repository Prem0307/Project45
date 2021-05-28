class Rocket2{
    constructor(x,y,width,height,angle){
     var rocket2_options={
         restitution:0.8,
         friction:1.0,
          density:0.04,

     }
     this.body=Bodies.rectangle(x,y,width,height,rocket2_options)
     this.width=width;
     this.height=height;
     Matter.Body.setAngle(this.body,PI/360*angle)       
     this.image=loadImage("Images/rocket.png")
     Matter.Body.setVelocity(this.body,{x:7, y:7});

     World.add(myWorld,this.body)
   
    }
    display()
    {
        push();
     translate(this.body.position.x,this.body.position.y)
     rotate(this.body.angle)
     imageMode(CENTER)
     
    image(this.image,0,0,this.width,this.height);
    pop();
    }
}





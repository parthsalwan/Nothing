class wall {
    constructor(){
  
      var options = {
          isStatic:true
        }
  
  this.bottom = Bodies.rectangle(800, 500, 150, 10, options)
  this.width1=200;
  this.height1=100;
  
  /*this.left = Bodies.rectangle(700, 550, 20, 100, options)
  this.width2=20;
  this.height2=100;

  this.right = Bodies.rectangle(900, 550, 20, 100, options)
  this.width3=20;
  this.height3=100;*/

  this.image=loadImage("dustbingreen.png");
  World.add(world, this.bottom);
  //World.add(world, this.left);
  //World.add(world, this.right);

 
  }
  
  display(){
  var pos=this.bottom.position;
  rectMode(CENTER);
  
  //rect(this.left.position.x,this.left.position.y,this.width2,this.height2);
  imageMode(CENTER);

  //rect(this.right.position.x,this.right.position.y,this.width3,this.height3);
    
  image(this.image, pos.x, pos.y, 200, 200);

  }
    }
  
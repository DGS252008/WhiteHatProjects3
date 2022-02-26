class Drops{
  constructor(x, y){
    var options={
        isStatic:false,
        density:random(0.7, 1)
    }
    this.x = x;
    this.y = y; 
    this.drop = Bodies.circle(this.x, this.y, 5, options);
    World.add(world, this.drop);
  }
//not sure here
  reuse(){
    if(this.drop.y<800){
      this.drop.x = -10;
    }
  }

  display(){
    var pos = this.drop.position;
  
        push()
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        fill(0,0,255)
        ellipse(0, 0, 5, 5);
        pop();
  }
}
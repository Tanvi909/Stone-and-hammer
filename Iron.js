class Iron {
    constructor(x, y) {
      var options = {
        'density': 45, 
        'friction': 3,
        'restitution': 0.8
      };
      this.body = Bodies.rectangle(x, y, 100, 100, options);
      this.width = 110;
      this.height = 110;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      pos.x = this.body.position.x; 
      pos.y = this.body.position.y; 
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('black')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  
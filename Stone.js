class Stone {
    constructor(x, y) {
      var options = {
        'density': 12, 
        'friction': 0.9,
        'restitution': 0.8
      };
      this.body = Bodies.rectangle(x, y, 80,  80, options);
      this.width = 90;
      this.height = 90;
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
      stroke('brown')
      fill('green')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  
class Obstacle {
  constructor() {
    
    let e = random();
    
    if (e < 0.6) {
      
      // 위 → 아래
      this.x = random(width);
      this.y = -out;
      this.vx = random(-1.2, 1.2);
      this.vy = random(1.8, 3.6);
    } 
    else {
      // 좌/우 → 안쪽
      this.y = random(height * 0.8);
      
      if (random() < 0.5) {
        this.x = -out;
        this.vx = random(1.6, 3.2);
      } 
      else {
        this.x = width + out;
        this.vx = random(-3.2, -1.6);
      }
      this.vy = random(-0.4, 1.6);
    }
    
    this.s = random(16, 28);
    this.c = color(random(180, 255), 120, random(180, 255), 180);
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  show() {
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, this.s);
  }
}

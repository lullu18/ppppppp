class Player {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.s = 40;
    this.dir = 1;
    this.sp = 0.5;
  }

  update() {
    this.x += (mouseX - this.x) * 0.05;
    this.y += (mouseY - this.y) * 0.05;

    // 호흡
    this.s += this.sp * this.dir;
    
    if (this.s > 80 || this.s < 30) this.dir *= -1;
  }

  borderStop() {
    
    if (this.x < this.s / 2) this.x = this.s / 2;
    
    if (this.x > width - this.s / 2) this.x = width - this.s / 2;
    
    if (this.y < this.s / 2) this.y = this.s / 2;
    
    if (this.y > height - this.s / 2) this.y = height - this.s / 2;
  }

  show() {
    noStroke();
    fill(180, 220, 255, 120);
    ellipse(this.x, this.y, this.s + 16);
    fill(120, 180, 255);
    ellipse(this.x, this.y, this.s);
  }
}
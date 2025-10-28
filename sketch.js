let p;            // 플레이어
let obs = [];     // 장애물
let score = 0;    // 점수
let hp = 3;       // 체력
let over = false; // 게임 종료 플래그

let sr = 0.016; // 장애물 스폰
let mo = 16;    // 장애물 최대 스폰 갯수
let out = 40;   // 화면 밖 판정 여유

function setup() {
  createCanvas(500, 500);
  textAlign(CENTER);
  p = new Player();
  
  // 장애물 생성
  for (let i = 0; i < 5; i++) {
    obs.push(new Obstacle());
    score++;  // 초기 장애물도 점수 포함
  }
}

function draw() {
  background(25, 30, 60);

  if (!over) {
    // 플레이어
    p.update();
    p.borderStop();
    p.show();

    // 장애물 스폰 + 점수
    if (random() < sr && obs.length < mo) {
      obs.push(new Obstacle());
      score++;
    }

    // 장애물 이동/충돌/정리
    for (let i = obs.length - 1; i >= 0; i--) {
      obs[i].move();
      obs[i].show();

      // 충돌 검사
      if (dist(p.x, p.y, obs[i].x, obs[i].y) < (p.s + obs[i].s) / 2) {
        obs.splice(i, 1); // 화면에서 제거
        hp--;
        if (hp <= 0) over = true;
        continue;
      }

      // 장애물이 화면 바깥으로 벗어나면 제거
      if (
        obs[i] &&
        (obs[i].x < -out || obs[i].x > width + out ||
         obs[i].y < -out || obs[i].y > height + out)
      ) {
        obs.splice(i, 1);
      }
    }

    // 게임 설정
    fill(255);
    textSize(20);
    text("Score: " + score, width / 2, 30);

    textSize(14);
    text("Move your mouse to help the creature breathe", width / 2, height - 20);

    textSize(14);
    text("HP: " + hp, 50, 26);

  } else {
    // 게임 
    fill(255, 120, 140);
    textSize(36);
    text("Game Over", width / 2, height / 2 - 20);
    textSize(20);
    text("Score: " + score, width / 2, height / 2 + 16);
    textSize(14);
    fill(220);
    text("Click to restart", width / 2, height / 2 + 48);
  }
}


function mousePressed() {
  if (over) {
    // 리셋
    p = new Player();
    obs = [];
    score = 0;
    hp = 3;
    over = false;
    
    for (let i = 0; i < 5; i++) {
      obs.push(new Obstacle());
      score++;
    }
  }
}
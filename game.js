// game
function gamerun() {
  init();
}

function step(){
  update();
  draw();
}

function update() {
  if (!movesnake()) {
    alert("You're dead. Your score was: " + size);
    die();
  }
}

function draw() {
  screenclear();
  drawsnake();
  drawfood();
}

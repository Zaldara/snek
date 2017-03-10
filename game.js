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
    alert("yall'std'v'll'est'ed got ded. score: " + size);
    die();
  }
}

function draw() {
  screenclear();
  drawsnake();
  drawfood();
}

let monster_frame = 1;

function tick_monster () {
  if (monster_frame === 2) {
    monster_frame = 1;
  } else {
    monster_frame = 2;
  }
  document.getElementById('monster').src = `assets/monster${monster_frame}.png`;
}

setInterval(tick_monster, 400);
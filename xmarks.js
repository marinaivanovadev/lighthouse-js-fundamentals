const moves = ['north', 'north', 'west', 'west', 'north', 'east','north'];

function finalPosition(moves) {
  let x = 0;
  let y = 0;
  for (let i = 0; i < moves.length; i++) {
    let move = moves[i];
    if (move === 'north') {
      y++;
    } else if (move === 'south') {
      y--;
    } else if (move === 'west') {
      x--;
    } else if (move === 'east') {
      x++;
    }
  }
  return [x, y];
};
/*
function finalPosition(moves) {
  let x = 0;
  let y = 0;
  for (const move of moves) {
    switch (move) {
      case 'north':
        y++;
        break;
      case 'south':
        y--;
        break;
      case 'west':
        x--;
        break;
      case 'east':
        x++;
        break;
    }
  }
  return [x, y];
};*/
finalPosition(moves);
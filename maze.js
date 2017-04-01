var maze = [
  [1,1,1,1,1,1,1,1,1,1,1,1,1],
  [1,9,1,0,1,0,1,0,0,0,0,0,1],
  [1,0,1,0,0,0,1,0,1,1,1,0,1],
  [1,0,0,0,1,1,1,0,0,0,0,0,1],
  [1,0,1,0,0,0,0,0,1,1,1,0,1],
  [1,0,1,0,1,1,1,0,1,0,0,0,1],
  [1,0,1,0,1,0,0,0,1,1,1,0,1],
  [1,0,1,0,1,1,1,0,1,0,1,0,1],
  [1,0,0,0,0,0,0,0,0,0,1,2,1],
  [1,1,1,1,1,1,1,1,1,1,1,1,1]
];

var goal = 2;

// defines starting position
var startPos = {row:1,col:1};

// sets current position to the starting position
var currentPos = {
  row: startPos.row,
  col: startPos.col
}

// sets value for current position
currentPos.value = mazeValue(currentPos);

function solveMaze(pos) {

  console.log("Current position: " + pos.row + ", " + pos.col);

  // sets possible positions
  var positions = [
    {
      row: pos.row,
      col: pos.col - 1,
      move: "left"
    },{
      row: pos.row,
      col: pos.col + 1,
      move: "right"
    },{
      row: pos.row - 1,
      col: pos.col,
      move: "up"
    },{
      row: pos.row + 1,
      col: pos.col,
      move: "down"
    }
  ];

  if (mazeValue(pos) == goal) return console.log("goal");

  var values = [];

  for (var i = 0; i < positions.length; i++) {

    values.push(mazeValue(positions[i]));

    // TODO: stuck here
    if (mazeValue(positions[i]) == 0) {
      console.log("Moved " + positions[i].move);
      moveTo(positions[i]);
      return solveMaze(currentPos);
    }
  }

  // TODO: Compare surrounding values to evaluate next position
  if (values.indexOf(goal) > 0) {
    // goal is found
  } else if (values.indexOf(0) > 0) {
    // 0 is found
  } else if (values.indexOf(9) > 0) {
    // 9 is found
  }
}

function mazeValue(pos) {
  return maze[pos.row][pos.col];
}

function moveTo(pos) {
  // Sets new value in maze
  maze[pos.row][pos.col] = currentPos.value;
  // Updates position
  currentPos.row = pos.row;
  currentPos.col = pos.col;
  console.log(maze);
}

solveMaze(currentPos);

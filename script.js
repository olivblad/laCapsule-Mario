//Storage of Mario's img dimension for motion purpose
const marioHeight = $("#player").height();
const marioWidth = $("#player").width();
//Binding keys, img and moves within an object
const moves = {
  ArrowUp: {
    img: "mario-back-1.png",
    move: { top: -1 * marioHeight, left: 0 },
  },
  ArrowRight: { img: "mario-right-1.png", move: { top: 0, left: marioWidth } },
  ArrowDown: { img: "mario-front-1.png", move: { top: marioHeight, left: 0 } },
  ArrowLeft: {
    img: "mario-left-1.png",
    move: { top: 0, left: -1 * marioWidth },
  },
};

//Function to have Mario moving --> fired when keys Up, Down, Left & Right pressed
const movingMario = (event) => {
  const mario = $("#player");
  const currentPosition = mario.offset();
  if (Object.keys(moves).indexOf(event.key) < 0) {
    console.log("i stay here sir");
  } else {
    let src = `./images/${moves[event.key].img}`;
    mario.attr("src", src);
    mario.offset({
      top: currentPosition.top + moves[event.key].move.top,
      left: currentPosition.left + moves[event.key].move.left,
    });
    console.log(currentPosition);
  }
};

//Logging Mario's initial Position
console.log($("#player").offset());
//Event Listener to catch key press
$("body").on("keydown", (event) => movingMario(event));

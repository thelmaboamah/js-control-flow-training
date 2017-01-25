console.log("sing.js loaded");

function sing(bottles) {
  bottles = Number(prompt("How many bottles of beer are on the wall?"));
  
  for (var i = bottles; i > 0; i--) {
    if (i > 2) {
      console.log(i + " bottles of beer on the wall,\n" + i + " bottles of beer!\nTake one down and pass it around,\n" + (i - 1) + " bottles of beer on the wall!");
    } else if (i == 2) {
      console.log(i + " bottles of beer on the wall,\n" + i + " bottles of beer!\nTake one down and pass it around,\n" + (i - 1) + " bottle of beer on the wall!")
    } else if (i == 1) {
      console.log(i + " bottle of beer on the wall,\n" + i + " bottle of beer!\nTake one down and pass it around,\nNo bottles of beer on the wall!")
    }
  }
}

sing();
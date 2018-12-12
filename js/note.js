function displayNote(note) {
  return maxLength(note, 20).fontcolor(randomColor()) + "<br>";
}

function randomColor() {
  var colors = ['red', 'green', 'blue', 'orange', 'yellow'];
  return colors[Math.floor(Math.random() * colors.length)];
}

function maxLength(note, lenght) {
  return note.substring(0, lenght)
}

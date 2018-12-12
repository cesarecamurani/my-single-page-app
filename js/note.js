function displayNote() {
  var newNote = document.getElementById("note").value + "<br>"
  return newNote.fontcolor(randomColor());
}

function randomColor() {
  var colors = ['red', 'green', 'blue', 'orange', 'yellow'];
  return colors[Math.floor(Math.random() * colors.length)];
}


function NoteListView(noteList) {
  this.noteList = noteList
}

NoteListView.prototype.display = function () {
  return [
    "<br>",
    "<center>",
    "<h2>",
    "<font face='courier'>",
    "Print some notes:",
    "</h2>",
    "<br>",
    "<form>",
    "<input type='text'></input>",
    "<br>",
    "<br>",
    "<input type='submit' class='btn btn-outline-success'></input>",
    "</form>",
    "<br>",
      this.noteList.notes.map(function(note) {
      return [
        "<div>",
        "<a href='#notes/" + note.id + "'>" + note.title() + "</a>",
        "</div>"
      ].join("")
    }).join(""),
    "</font>",
    "</center>"
  ].join("")
}

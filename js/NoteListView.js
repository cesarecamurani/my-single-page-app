
function NoteListView(noteList) {
  this.noteList = noteList
}

NoteListView.prototype.display = function () {
  return [
    "<br>",
    "<center>",
    "<h2>",
    "<font face='courier'>",
    "Print a Note:",
    "</h2>",
    "<br>",
    "<form>",
    "<input type='text'></input>",
    "<br>",
    "<br>",
    "<input type='submit' class='btn btn-outline-success'></input>",
    "</form>",
    "<br>", "<br>", "<br>",
      this.noteList.notes.map(function(note) {
      return [
        "<div>",
        "<h2>",
        "<a href='#notes/" + note.id + "'>" + note.title() + "</a>",
        "</h2>",
        "</div>"
      ].join("")
    }).join(""),
    "</font>",
    "</center>"
  ].join("")
}


(function (exports) {

  function NoteController (noteList, noteListView, noteView) {
    this.noteList = noteList
    this.noteListView = noteListView
    this.NoteView = noteView

    this._set()
  };

  NoteController.prototype._set = function () {
    var self = this

    window.addEventListener("submit", function(event) {
      event.preventDefault()
      self.noteList.createNote(event.target[0].value)
      var html = self.noteListView.display()

      self.display(html)
    })

    window.addEventListener("hashchange", function() {
      var noteId = window.location.hash.split('#notes/')[1]
      var note = self.noteList.findById(noteId)
      var noteView = new self.NoteView(note) //n or N
      var html = noteView.display()

      self.display(html)
    })

  }

  NoteController.prototype.display = function (html) {
    document.getElementById("app").innerHTML = html
  }

  exports.NoteController = NoteController

})(this);

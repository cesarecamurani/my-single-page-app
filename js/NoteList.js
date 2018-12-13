
(function (exports) {

  function NoteList(note) {
    this.note = note
    this.notes = [];
  }

  NoteList.prototype.noteAdd = function(text) {
    var newNote = new this.note(text) // create a Note
    this.notes.push(newNote); // then add to list
  };

  NoteList.prototype.all = function() {
    return this.notes; // returns all notes
  }

  exports.NoteList = NoteList

})(this);

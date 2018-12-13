
window.addEventListener('load', function() {

  var note = Note
  var notesView = new NotesView([])
  var controller = new NotesController(note, notesView)

  controller.updateDOM()
})

// src/controller.js
function NotesController(note, notesView) {
  this.note = note
  this.notesView = notesView

  this._setup()
}

NotesController.prototype = {

  _setup: function() {
    var self = this

    window.addEventListener('submit', function(event) {
      event.preventDefault()

      var note = new self.note(event.target[0].value)
      self.notesView.add(note)

      self.updateDOM()
    })
  },

  updateDOM: function() {

    document.getElementById('app').innerHTML = this.notesView.render()
  }
}

// src/note-model.js

function Note(text) {
  this.text = text
}

// src/notes-view.js

function NotesView(notes) {
  this.notes = notes
}

NotesView.prototype = {
  add: function(note) {
    this.notes.push(note)
  },

  render: function() {
    return [
      "<form>",
        "<input type='text'></input>",
        "<input type='submit'></input>",
      "</form>",
      this.notes.map(function(note) {
        return "<p>" + note.text + "</p>"
      }).join("")
    ].join("")
  }
}

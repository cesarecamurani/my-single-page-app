// app.js
// on load, create the app

window.addEventListener('load', function() {

  // model is responsible for the information ('text')
  var note = Note
  // view is responsible for what html looks like
  var notesView = new NotesView([])

  // controller is responsible for listening to events - it needs to setup a listener
    // - and doing things - create a note, re-render
  var controller = new NotesController(note, notesView)

  // create the initial state of the app and render it.
  controller.updateDOM()
})

// src/controller.js
function NotesController(note, notesView) {
  this.note = note
  this.notesView = notesView

  // run setup once to listen for events
  this._setup()
}

NotesController.prototype = {

  _setup: function() {
    var self = this
    // set up a listener for submit events
    window.addEventListener('submit', function(event) {
      event.preventDefault()
      // create a note
      var note = new self.note(event.target[0].value)
      self.notesView.add(note)
      // update the DOM
      self.updateDOM()
    })
  },

  updateDOM: function() {
    // render the whole app
	// (next step -> inject the element from app.js)
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

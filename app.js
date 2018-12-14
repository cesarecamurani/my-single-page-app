
window.addEventListener('load', function() {

  // var note = new Note()
  var noteList = new NoteList(Note)
  var noteListView = new NoteListView(noteList)
  var controller = new NoteController(noteList, noteListView, NoteView)

  var html = noteListView.display()

  controller.display(html)

});

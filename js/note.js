
(function(exports) {
  var id = 0

  function Note(text) {
    this.text = text
    id++
    this.id = id
  }

  Note.prototype.title = function() {
    return this.text.substring(0, 20).fontcolor("green")
  }



  exports.Note = Note

})(this);

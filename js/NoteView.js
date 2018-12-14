
(function(exports) {

    function NoteView (note) {
      this.note =  note
    };

    NoteView.prototype.showNote = function () {
      return [
        "div",
        "p" + this.note.text + "/p",
        "/div"
      ].join('')
    };

    // NoteView.prototype.render = function () {
    //   return maxLength(note, 20).fontcolor(randomColor()) + "<br>";
    // };
    //
    // NoteView.prototype.randomColor = function () {
    //   var colors = ['red', 'green', 'blue', 'orange', 'yellow'];
    //   return colors[Math.floor(Math.random() * colors.length)];
    // };
    //
    // NoteView.prototype.maxLength = function (note, lenght) {
    //   return note.substring(0, lenght);
    // };

    exports.NoteView = NoteView

})(this);

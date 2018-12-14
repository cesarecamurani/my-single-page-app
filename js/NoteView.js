
(function(exports) {

    function NoteView (note) {
      this.note =  note
    };

    NoteView.prototype.display = function () {
      return [
        "<br>",
        "<center>",
        "<h4>", "<font face='courier' color='green'>",
        "<a href='#notes'>", "Notes List", "</a>",
        "</h4>", "</font>",
        "<br>", "<br>", "<br>",
        "<h2>", "<font face='courier' color='green'>",
        "<div>", "<p>" + this.note.text + "</p>", "</div>",
        "</h2>", "</font>",
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

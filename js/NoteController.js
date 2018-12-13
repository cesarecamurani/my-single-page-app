var controller = {};

(function (exports) {

    function add(note) {
      document.getElementById("add").addEventListener("click", function() {
        model.noteAdd(note)
        controller.display(note)
      });
    }

    function display(note) {
      document.getElementById("notes").innerHTML = view.noteShow(document.getElementById("note").value);
    }

    exports.add = add
    exports.display = display

})(controller);

window.onload=function() {

  document.getElementById("post").addEventListener("click", function() {
    document.getElementById("notes").innerHTML += displayNote()
  });

}

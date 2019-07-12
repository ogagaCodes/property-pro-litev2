

var form = document.querySelector(".search2");
var openDialog = document.querySelector(".open-dialog");
var span = document.querySelector("span.close");
openDialog.addEventListener("click", function() {
  form.style.display = "block";
});
span.addEventListener("click", function() {
  form.style.display = "none";
});
window.onclick = function(event) {
  if (event.target == form) {
    form.style.display = "none";
  }
};



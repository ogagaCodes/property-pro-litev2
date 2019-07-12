var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector(".modalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal


// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

// for chat box
let openButton = document.querySelector(".open-button");
let contactUs = document.querySelector(".contactUs");
openButton.addEventListener('click',()=> {
  document.querySelector(".chat-popup").style.display = "block";
  body.opacity="0.1";
});
contactUs.addEventListener('click',()=> {
  document.querySelector(".chat-popup").style.display = "block";
  body.opacity="0.1";
})


function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
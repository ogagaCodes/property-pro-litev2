let showUser = document.querySelector("button.details");
let user = document.querySelector(".nav-user-items");




showUser.addEventListener('click', ()=>{
   user.style.display= "block";
   user.classList.add("userClass");
   body.opacity="0.2";
  
});
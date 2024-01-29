let submit = document.querySelector(".submit");
let closePopup = document.querySelector(".closePopup");
let popup = document.querySelector(".popup");

submit.addEventListener("click", function(){
    popup.classList.add("openPopup");
})

closePopup.addEventListener("click", function(){
    popup.classList.remove("openPopup");
})
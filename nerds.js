'use strict';
var write = document.querySelector(".write");
var openform = document.querySelector(".modal-content");
var name = openform.querySelector("[name=name]");
var close = document.querySelector(".modal-content-close");
write.addEventListener("click", function(event) {
    event.preventDefault();
    openform.classList.add("modal-content-open");
	name.focus();
});
close.addEventListener("click", function(event) {
    event.preventDefault();
    openform.classList.remove("modal-content-open");
});
window.addEventListener("keydown", function(event) {
    if (event.keyCode == 27) {
        if (openform.classList.contains("modal-content-open")) {
            openform.classList.remove("modal-content-open");
             }
            }
});
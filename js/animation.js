/*ANIMAÇÕES*/
const target = document.querySelectorAll("[data-animate]");
const button = document.getElementById('goHome')
const animateClass = "animation";

function Scrool() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animateClass);
      button.classList.add('go_to_home_active')
      button.classList.remove('go_to_home')
    } 
  });
}

window.addEventListener("scroll", function () {
  Scrool();
});
/*******ANIMAÇÃO GO_TO_HOME_BUTTON******* */

/********Questions**********/
function ActiveMenu(e) {
  const parentNode = e.parentNode;
  parentNode.classList.toggle("activate_dropdown");
}

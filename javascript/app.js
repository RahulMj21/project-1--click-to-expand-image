const pannel = document.querySelectorAll(".pannel");

pannel.forEach(function (element, index) {
  console.log(element);
  element.addEventListener("click", function () {
    remove();
    element.classList.add("active");
  });
});

function remove() {
  pannel.forEach(function (element) {
    element.classList.remove("active");
  });
}


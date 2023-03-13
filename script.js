const panels = document.querySelectorAll(".panel");

const showImage = function (k) {
  for (let i = 0; i < panels.length; i++) {
    panels[i].classList.remove("active");
  }
  console.log(k);
  panels[k].classList.add("active");
};

for (let i = 0; i < panels.length; i++) {
  panels[i].addEventListener("click", () => {
    for (let j = 0; j < panels.length; j++) {
      panels[j].classList.remove("active");
    }
    panels[i].classList.add("active");
  });
}

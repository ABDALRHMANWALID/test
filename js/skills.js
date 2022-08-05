// Start Skills
let skillsScroll = document.querySelector(".skills");
let spansSkills = document.querySelectorAll(".skills .counter span");
let circles = document.querySelectorAll(".sk-progress svg circle ");
window.onscroll = () => {
  if (this.pageYOffset >= skillsScroll.offsetTop) {
    spansSkills.forEach((nnn) => {
      startCount(nnn);
      cccrrr();
    });
  }
};
function cccrrr() {
  circles.forEach(function (ele, index) {
    let goals = spansSkills[index].getAttribute("goal");
    ele.classList.add(`ancircle${index + 1}`);
    document.documentElement.style.setProperty(`--tar-${index + 1}`, goals);
  });
}
function startCount(el) {
  let goal = el.getAttribute("goal");
  let count = setInterval(() => {
    if (Number(el.textContent) == goal) {
      clearInterval(count);
    } else {
      el.textContent++;
    }
  }, 4000 / goal);
}
// End Skills

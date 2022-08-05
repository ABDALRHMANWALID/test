// Start Services
let milestonesScroll = document.querySelector(".milestones");
let spansmilestones = document.querySelectorAll(".milestones .number span");
window.onscroll = () => {
  if (this.pageYOffset >= milestonesScroll.offsetTop) {
    spansmilestones.forEach((nnn) => {
      startCount(nnn);
    });
  }
};

function startCount(el) {
  let goal = el.getAttribute("goal");
  let count = setInterval(() => {
    if (Number(el.textContent) == goal) {
      clearInterval(count);
    } else {
      el.textContent++;
    }
  }, 2000 / goal);
}
// End Services

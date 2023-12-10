function toggleSkills() {
  var skillsList = document.querySelector(".skills-list");
  toggleVisibility(skillsList);
}

function toggleArcs() {
  var arcs = document.querySelector(".arcs-list");
  toggleVisibility(arcs);
}

function toggleSoftSkills() {
  var softSkills = document.querySelector(".soft-skills-list");
  toggleVisibility(softSkills);
}

function toggleVisibility(element) {
  if (window.getComputedStyle(element).display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}
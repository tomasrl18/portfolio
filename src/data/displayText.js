function toggleSkills() {
  var skillsList = document.querySelector(".skills-list");
  if (skillsList.style.display === "none") {
    skillsList.style.display = "block";
  } else {
    skillsList.style.display = "none";
  }
}

function toggleArcs() {
  var arcs = document.querySelector(".arcs-list");
  if (arcs.style.display === "none") {
    arcs.style.display = "block";
  } else {
    arcs.style.display = "none";
  }
}

function toggleSoftSkills() {
  var softKills = document.querySelector(".soft-skills-list");
  if (softKills.style.display === "none") {
    softKills.style.display = "block";
  } else {
    softKills.style.display = "none";
  }
}
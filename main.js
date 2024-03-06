// Determine Letter Grades - Start Code
// A: 80 - 100
// B: 65 - 79
// C: 55 - 64
// D: 50 - 54
// F: 0 - 49

// Determine Letter Grades Click Event
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Percentage Grades
  let engPercent = +document.getElementById("eng-percent").value;
  let socPercent = +document.getElementById("soc-percent").value;
  let mathPercent = +document.getElementById("math-percent").value;
  let sciPercent = +document.getElementById("sci-percent").value;
  // Calculate & Output Letter Grades
  // English
  document.getElementById("eng-letter").innerHTML = calclettergrd(engPercent);

  // Social Studies
  document.getElementById("soc-letter").innerHTML = calclettergrd(socPercent);

  // Mathematics
  document.getElementById("math-letter").innerHTML = calclettergrd(mathPercent);

  // Science
  document.getElementById("sci-letter").innerHTML = calclettergrd(sciPercent);
}

function calclettergrd(subperc) {
  console.log(subperc);
  let lettergrade;
  if (subperc >= 80) {
    lettergrade = "A";
  } else if (subperc >= 65) {
    lettergrade = "B";
  } else if (subperc >= 55) {
    lettergrade = "C";
  } else if (subperc >= 50) {
    lettergrade = "D";
  } else {
    lettergrade = "F";
  }
  return lettergrade;
}

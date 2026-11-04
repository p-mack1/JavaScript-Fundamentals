console.log("Module 1 started");
const output = document.querySelector("#output");
output.textContent = "JavaScript changed this paragraph!";
console.log("Module 1 finished");

// Values describing a student
const studentName = "Alex";
let completedLessons = 1;
const isLearning = true;
completedLessons = completedLessons + 1;
const profile = document.querySelector("#profile");
profile.textContent = studentName + " completed " + completedLessons + " lessons.";
console.log(typeof studentName, typeof completedLessons, typeof isLearning);
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

let points = 0;
const pointsText = document.querySelector("#pointsText");
const pointsBtn = document.querySelector("#pointsBtn");
function earnPoints() {
    points+= 5;
    pointsText.textContent = "Points: " + points;
}
pointsBtn.addEventListener("click", earnPoints);

const firstNum = document.querySelector("#firstNum");
const secondNum = document.querySelector("#secondNum");
const addBtn = document.querySelector("#addBtn");
const sumText = document.querySelector("#sumText");
function addNumbers() {
    const a = Number(firstNum.value);
    const b = Number(secondNum.value);
    sumText.textContent = "Total: " + (a + b);
}
addBtn.addEventListener("click", addNumbers);

const scoreInput = document.querySelector("#scoreInput");
const checkBtn = document.querySelector("#checkBtn");
const scoreResult = document.querySelector("#scoreResult");
function checkScore() {
    const score = Number(scoreInput.value);
    if (score >= 70) {
        scoreResult.textContent = "Pass";
    } else {
        scoreResult.textContent = "Keep practicing";
    }
}
checkBtn.addEventListener("click", checkScore);

const nameInput = document.querySelector("#nameInput");
const greetBtn = document.querySelector("#greetBtn");
const greetingText = document.querySelector("#greetingText");
function makeGreeting(name) {
    return "Welcome to JavaScript, " + name + "!";
}
function showGreeting() {
    const name = nameInput.value.trim;
    greetingText.textContent = makeGreeting(name);
}
greetBtn.addEventListener("click", showGreeting);
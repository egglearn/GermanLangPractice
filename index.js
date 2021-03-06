import { data } from "./data.js";

const randomNounBox = document.getElementById("text");
const hintBox = document.getElementById("hint");
const startAndNextButton = document.getElementById("button");

const derButton = document.getElementById("der");
const dieButton = document.getElementById("die");
const dasButton = document.getElementById("das");

const derEndings = /(ismus|ent|er|ig|or|ich|ist|ling)$/;
const dieEndings = /(heit|ie|ik|keit|schaft|tät|ung|ette|ine|ion|ur|e)$/;
const dasEndings = /(chen|lein|nis|ing|ment|um|tum|o|ma)$/;
const dasBeginning = /^(ge)/;

const correctSound = document.getElementById("correct");
const incorrectSound = document.getElementById("incorrect");

const numberOfNouns = 1957;
var randomNoun;
startAndNextButton.addEventListener("click", function getRandomNoun() {
  randomNoun = data[Math.floor(Math.random() * numberOfNouns)];
  startAndNextButton.innerText = "Next";
  randomNounBox.innerText = randomNoun[0];
  hintBox.innerText = "";
  randomNounBox.style.background = "LightBlue";

  if (derEndings.test(randomNoun[0])) {
    hintBox.innerText = `⚠️many words ending with "${
      randomNoun[0].match(derEndings)[0]
    }" are masculine`;
  } else if (dieEndings.test(randomNoun[0])) {
    hintBox.innerText = `⚠️ many words ending with "${
      randomNoun[0].match(dieEndings)[0]
    }" are feminine`;
  } else if (dasEndings.test(randomNoun[0])) {
    hintBox.innerText = `⚠️many words ending with "${
      randomNoun[0].match(dasEndings)[0]
    }" are neutral`;
  } else if (dasBeginning.test(randomNoun[0])) {
    hintBox.innerText = `⚠️many words starting with "${
      randomNoun[0].match(dasBeginning)[0]
    }" are neutral`;
  } else {
    hintBox.innerText = "⚠️sometimes there are no hints, try to memorise!";
  }
});

derButton.addEventListener("click", function checkIfMasculine() {
  if (randomNoun[1] == "m") {
    randomNounBox.style.background = "LightGreen";
    console.log(randomNoun);
    correctSound.play();
  } else {
    randomNounBox.style.background = "Tomato";
    incorrectSound.play();
  }
});

dieButton.addEventListener("click", function checkIfFeminine() {
  if (randomNoun[1] == "f") {
    randomNounBox.style.background = "LightGreen";
    correctSound.play();
  } else {
    randomNounBox.style.background = "Tomato";
    incorrectSound.play();
  }
});

dasButton.addEventListener("click", function checkIfNeutral() {
  if (randomNoun[1] == "n") {
    randomNounBox.style.background = "LightGreen";
    correctSound.play();
  } else {
    randomNounBox.style.background = "Tomato";
    incorrectSound.play();
  }
});

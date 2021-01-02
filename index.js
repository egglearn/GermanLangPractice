import { data } from "./data.js";

const randomNounBox = document.getElementById("text");
const hintBox = document.getElementById("hint");
const startAndNextButton = document.getElementById("button");

const derButton = document.getElementById("der");
const dieButton = document.getElementById("die");
const dasButton = document.getElementById("das");

const derEndings = /(ismus|ent|er|ig|or|ich|ist|ling|)$/;
const dieEndings = /(heit|ie|ik|keit|schaft|tät|ung|ette|ine|ion|ur|e)$/;
const dasEndings = /(chen|lein|nis|ing|ment|um|tum|o|ma)$/;
const dasBeginning = /^(ge)/;

const correctSound = document.getElementById("correct");
const incorrectSound = document.getElementById("incorrect");

const numberOfNouns = 1957;

startAndNextButton.addEventListener("click", function getRandomNoun() {
  let clicked = false;
  startAndNextButton.innerText = "Next";
  let randomNoun = data[Math.floor(Math.random() * numberOfNouns)];
  randomNounBox.innerText = randomNoun[0];
  hintBox.innerText = "";
  randomNounBox.style.background = "LightBlue";
  console.log(randomNoun);
  console.log(randomNoun[0].match(derEndings)[0]);
  console.log(randomNoun[0].match(dieEndings)[0]);
  console.log(randomNoun[0].match(dasEndings)[0]);

  if (randomNoun[0].match(derEndings)[0] != null) {
    hintBox.innerText = `⚠️many words ending with "${
      randomNoun[0].match(derEndings)[0]
    }" are masculine`;
  } else if (randomNoun[0].match(dieEndings) != null) {
    hintBox.innerText = `⚠️ many words ending with "${
      randomNoun[0].match(dieEndings)[0]
    }" are feminine`;
  } else if (randomNoun[0].match(dasEndings) != null) {
    hintBox.innerText = `⚠️many words ending with "${
      randomNoun[0].match(dasEndings)[0]
    }" are neutral`;
  } else if (randomNoun[0].match(dasBeginning) != null) {
    hintBox.innerText = `⚠️many words starting with "${
      randomNoun[0].match(dasBeginning)[0]
    }" are neutral`;
  }

  derButton.addEventListener("click", function checkIfMasculine() {
    if (randomNoun[1] == "m") {
      randomNounBox.style.background = "LightGreen";

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
});

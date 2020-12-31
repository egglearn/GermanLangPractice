import { data } from "./data.js";

const randomNounBox = document.getElementById("text");
const startOrNextButton = document.getElementById("button");
const derButton = document.getElementById("der");
const dieButton = document.getElementById("die");
const dasButton = document.getElementById("das");
const hintBox = document.getElementById("hint");
const correctSound = document.getElementById("correct");
const incorrectSound = document.getElementById("incorrect");
const correctAnswers = document.getElementById("countdisplay");
const count = 0;
const derEndings = /(ismus|ent|er|ig|or|ich|ist|ling|)$/;
const dieEndings = /(heit|ie|ik|keit|schaft|tät|ung|ette|ine|ion|ur|e)$/;
const dasEndings = /(chen|lein|nis|ing|ment|um|tum|o|ma)$/;
const dasBeginning = /^(ge)/;

startOrNextButton.addEventListener("click", function x() {
  let clicked = false;
  startOrNextButton.innerText = "Next";
  let randomNoun = data[Math.floor(Math.random() * 1957)];
  randomNounBox.innerText = randomNoun[0];
  hintBox.innerText = "";
  randomNounBox.style.background = "LightBlue";
  console.log(randomNoun[0]);

  console.log(randomNoun[0].match(derEndings));

  //originallz tried to check the endins of words using this method but it woudl be too repetitive
  //let lastThree = answer[0].substr(answer[0].length - 3);
  //   if (lastThree == "ung") {
  //     alert("ung is usually feminin");
  //   }

  //so this checks the word displayed against the regular expression. match returns an array and if it doesnt find a match the first element of the arraz will be "" so thats why it test that the first element is not ""
  if (randomNoun[0].match(derEndings)[0] != null) {
    hintBox.innerText = `⚠️many words ending with "${
      randomNoun[0].match(derEndings)[0]
    }" are masculine`;
  }
  // was having problems using the same != logic that der uses with die and das, it kept saying cannot read property zero of null whenver therew was no match, so as it was giving me null, i just said whenver it is not null (ie a match) run the code then there were no erros
  else if (randomNoun[0].match(dieEndings) != null) {
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

  derButton.addEventListener("click", function m() {
    if (randomNoun[1] == "m") {
      randomNounBox.style.background = "LightGreen";

      correctSound.play();

      //  if (clicked == false) {
      //   count++;
      //    correctAnswers.innerText = count;
      //  }

      //  clicked = true;
    } else {
      randomNounBox.style.background = "Tomato";
      incorrectSound.play();
    }
  });

  dieButton.addEventListener("click", function f() {
    if (randomNoun[1] == "f") {
      randomNounBox.style.background = "LightGreen";
      correctSound.play();
      // if (clicked == false) {
      //   count++;
      //   correctAnswers.innerText = count;
      // }

      // clicked = true;
    } else {
      randomNounBox.style.background = "Tomato";
      incorrectSound.play();
    }
  });

  dasButton.addEventListener("click", function n() {
    if (randomNoun[1] == "n") {
      randomNounBox.style.background = "LightGreen";
      correctSound.play();
      // if (clicked == false) {
      //   count++;
      //   correctAnswers.innerText = count;
      // }

      // clicked = true;
    } else {
      randomNounBox.style.background = "Tomato";
      incorrectSound.play();
    }
  });
});

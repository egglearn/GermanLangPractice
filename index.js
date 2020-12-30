import { data } from "data.js";

let dog = "food";
let word = document.getElementById("text");
let btn = document.getElementById("button");
let der = document.getElementById("der");
let die = document.getElementById("die");
let das = document.getElementById("das");
let hint = document.getElementById("hint");
let correct = document.getElementById("correct");
let incorrect = document.getElementById("incorrect");
let correctAnswers = document.getElementById("countdisplay");
let count = 0;
const regexDer = /(ismus|ent|er|ig|or|ich|ist|ling|)$/;
const regexDie = /(heit|ie|ik|keit|schaft|tät|ung|ette|ine|ion|ur|e)$/;
const regexDas = /(chen|lein|nis|ing|ment|um|tum|o|ma)$/;
const regexDasBegin = /^(ge)/;

btn.addEventListener("click", function x() {
  let clicked = false;
  btn.innerText = "Next";
  answer = data[Math.floor(Math.random() * 1957)];
  word.innerText = answer[0];
  hint.innerText = "";
  word.style.background = "LightBlue";
  console.log(answer[0]);

  console.log(answer[0].match(regexDer));

  //originallz tried to check the endins of words using this method but it woudl be too repetitive
  //let lastThree = answer[0].substr(answer[0].length - 3);
  //   if (lastThree == "ung") {
  //     alert("ung is usually feminin");
  //   }

  //so this checks the word displayed against the regular expression. match returns an array and if it doesnt find a match the first element of the arraz will be "" so thats why it test that the first element is not ""
  if (answer[0].match(regexDer)[0] != "") {
    hint.innerText = `⚠️many words ending with "${
      answer[0].match(regexDer)[0]
    }" are masculine`;
  }
  // was having problems using the same != logic that der uses with die and das, it kept saying cannot read property zero of null whenver therew was no match, so as it was giving me null, i just said whenver it is not null (ie a match) run the code then there were no erros
  else if (answer[0].match(regexDie) != null) {
    hint.innerText = `⚠️ many words ending with "${
      answer[0].match(regexDie)[0]
    }" are feminine`;
  } else if (answer[0].match(regexDas) != null) {
    hint.innerText = `⚠️many words ending with "${
      answer[0].match(regexDas)[0]
    }" are neutral`;
  } else if (answer[0].match(regexDasBegin) != null) {
    hint.innerText = `⚠️many words starting with "${
      answer[0].match(regexDasBegin)[0]
    }" are neutral`;
  }

  der.addEventListener("click", function m() {
    if (answer[1] == "m") {
      word.style.background = "LightGreen";

      correct.play();

      //  if (clicked == false) {
      //   count++;
      //    correctAnswers.innerText = count;
      //  }

      //  clicked = true;
    } else {
      word.style.background = "Tomato";
      incorrect.play();
    }
  });

  die.addEventListener("click", function f() {
    if (answer[1] == "f") {
      word.style.background = "LightGreen";
      correct.play();
      // if (clicked == false) {
      //   count++;
      //   correctAnswers.innerText = count;
      // }

      // clicked = true;
    } else {
      word.style.background = "Tomato";
      incorrect.play();
    }
  });

  das.addEventListener("click", function n() {
    if (answer[1] == "n") {
      word.style.background = "LightGreen";
      correct.play();
      // if (clicked == false) {
      //   count++;
      //   correctAnswers.innerText = count;
      // }

      // clicked = true;
    } else {
      word.style.background = "Tomato";
      incorrect.play();
    }
  });
});

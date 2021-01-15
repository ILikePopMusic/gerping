const min = 0;
const max = verben.length - 1;
const minCon = 1;
const maxCon = 6;
var verbForm = '';
var correctAnswer = 0;
var wrongAnswer = 0;
var totalVerbs = 0;
var successRate = 0;
var wrongWords = [];
var conjSequence = 1;
var buttonCLicked;


function checkInput() {
    if (event.key === "Enter") {
        verbInput = document.getElementById("verbInput").value;
        checkWord();
    }
}

function checkWord() {
    verbInput = document.getElementById("verbInput").value;
    if (verbInput.toLowerCase() === verbForm) {
        document.getElementById("verbInput").value = "";
        correctAnswer = correctAnswer + 1;
        document.getElementById("correct_old_word").innerText = verbForm;
        document.getElementById("wrong_old_word").innerText = ""
        getStats();
        getParticiple();
    }
    else {
        document.getElementById("verbInput").value = "";
        wrongAnswer = wrongAnswer + 1;
        document.getElementById("wrong_old_word").innerText = verbForm;
        document.getElementById("correct_old_word").innerText = "";
        wrongWords.push("<br>" + verbForm);
        getStats();
        getParticiple();
    }
}

function getStats() {
    totalVerbs = totalVerbs + 1;
    document.getElementById("correct_answer").innerText = correctAnswer;    
    document.getElementById("incorrect_answer").innerText = wrongAnswer;
    document.getElementById("total_verbs").innerText = totalVerbs;
    var successRate = document.getElementById("success_rate")
  successRate.innerHTML = Math.round(correctAnswer / (correctAnswer + wrongAnswer) * 100) + " %";
    if ((correctAnswer / (correctAnswer + wrongAnswer) * 100) < 50) {
      document.getElementById("success_rate").style.color = "red";
    }
    else {
      document.getElementById("success_rate").style.color = "green";
    }
}

function showWrongVerbs() {
    document.getElementById("wrong_vocab_list").innerHTML = wrongWords;
}


function getParticiple() {
    var rnd = Number(Math.round(Math.floor(Math.random() * (+max + 1 - +min)) + +min))
    verbForm = verben[rnd].Partizip;
    document.getElementById("verb").innerText = verben[rnd].Inf;
     
}


function resetStats() {
document.getElementById("correct_answer").innerText = 0;    
document.getElementById("incorrect_answer").innerText = 0;
document.getElementById("total_verbs").innerText = 0;
document.getElementById("success_rate").innerText = "0 %";
document.getElementById("wrong_vocab_list").innerHTML = "";
document.getElementById("wrong_old_word").innerText = ""
document.getElementById("correct_old_word").innerText = "";
document.getElementById("verbInput").value = ""
correctAnswer = 0;
wrongAnswer = 0;
totalVerbs = 0;
successRate = 0;
wrongWords = [];

document.getElementById("success_rate").style.color = "black";
    getParticiple();
    
}

function selectConjugationFull() {
    document.getElementById("fullButton").style.backgroundColor = "darkgrey";
    document.getElementById("randomButton").style.backgroundColor = "#eaeaea"
    conjSequence = 1;
    randomConjugation = 0;
}
function selectConjugationRandom() {
    document.getElementById("randomButton").style.backgroundColor = "darkgrey"
    document.getElementById("fullButton").style.backgroundColor = "#eaeaea";
    randomConjugation = 1;
}


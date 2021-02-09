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
var wrongInput = [];
var randomConjugation = 1;
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
        document.getElementById("correct_old_word").innerText = person + ' ' + verbForm;
        document.getElementById("wrong_old_word").innerText = ""
        getStats();
        if (randomConjugation == 1) {
        getVerb();
        }
        else {
        getFullVerb();
        }
    }
    else {
        document.getElementById("verbInput").value = "";
        wrongAnswer = wrongAnswer + 1;
        document.getElementById("wrong_old_word").innerText = person + ' ' + verbForm;
        document.getElementById("correct_old_word").innerText = "";
        wrongWords.push("<br>" + person + " " + verbForm);
        wrongInput.push("<br>" + person + " " + verbInput);
        
        getStats();
        if (randomConjugation == 1) {
            getVerb();
            }
            else {
            getFullVerb();
            }          
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
    document.getElementById("show_words_list").style.visibility = "visible";
    console.log("made visible");
    document.getElementById("wrong_vocab_list").innerHTML = wrongWords;
    document.getElementById("wrong_input_list").innerHTML = wrongInput;
}


function getVerb() {
    var rnd = Number(Math.round(Math.floor(Math.random() * (+max + 1 - +min)) + +min))
    var rndCon = Number(Math.round(Math.floor(Math.random() * (+maxCon + 1 - +minCon)) + +minCon))
    
                    if (rndCon == 1) {
                        person = 'ich'
                        verbForm = verben[rnd].ich;                        
                    }
                    else if (rndCon == 2) {
                        person = 'du'
                        verbForm = verben[rnd].du;
                    }
                    else if (rndCon == 3) {
                        person = 'er/sie/es'
                        verbForm = verben[rnd].er;
                    }
                    else if (rndCon == 4) {
                        person = 'wir'
                        verbForm = verben[rnd].wir;
                    }
                    else if (rndCon == 5) {
                        person = 'ihr'
                        verbForm = verben[rnd].ihr;
                    }
                    else if (rndCon == 6) {
                        person = 'sie/Sie'
                        verbForm = verben[rnd].sie;
                    }    
    document.getElementById("verb").innerText = verben[rnd].Inf;
    document.getElementById('person').innerText = person;
     
}


function getFullVerb() {
    if (conjSequence == 1) {
    var rnd = Number(Math.round(Math.floor(Math.random() * (+max + 1 - +min)) + +min))
    }
                if (conjSequence == 1) {
                    person = 'ich'
                    verbForm = verben[rnd].ich;  
                    conjSequence = conjSequence + 1;                      
                }
                else if (conjSequence == 2) {
                    person = 'du'
                    verbForm = verben[randomWord].du;
                    conjSequence = conjSequence + 1;
                }
                else if (conjSequence == 3) {
                    person = 'er/sie/es'
                    verbForm = verben[randomWord].er;
                    conjSequence = conjSequence + 1;
                }
                else if (conjSequence == 4) {
                    person = 'wir'
                    verbForm = verben[randomWord].wir;
                    conjSequence = conjSequence + 1;
                }
                else if (conjSequence == 5) {
                    person = 'ihr'
                    verbForm = verben[randomWord].ihr;
                    conjSequence = conjSequence + 1;
                }
                else if (conjSequence == 6) {
                    person = 'sie/Sie'
                    verbForm = verben[randomWord].sie;
                    conjSequence = 1;
                }
                
    if (conjSequence == 2) {
    document.getElementById("verb").innerText = verben[rnd].Inf;
    }
    else {
        document.getElementById("verb").innerText = verben[randomWord].Inf;
    }
    document.getElementById('person').innerText = person;
    if (conjSequence == 2) {
    return randomWord = rnd;
    }
    else {
    return randomWord;
    }
    
}

function resetStats() {
document.getElementById("verbInput").disabled = false;
document.getElementById("sendButton").disabled = false;
document.getElementById("correct_answer").innerText = 0;    
document.getElementById("incorrect_answer").innerText = 0;
document.getElementById("total_verbs").innerText = 0;
document.getElementById("success_rate").innerText = "0 %";
document.getElementById("wrong_vocab_list").innerHTML = "";
document.getElementById("wrong_old_word").innerText = ""
document.getElementById("correct_old_word").innerText = "";
document.getElementById("verbInput").value = ""
document.getElementById("show_words_list").style.visibility = "hidden"
correctAnswer = 0;
wrongAnswer = 0;
totalVerbs = 0;
successRate = 0;
wrongWords = [];
wrongInput = [];

document.getElementById("success_rate").style.color = "black";
    if (randomConjugation == 1) {
        getVerb();
    }
    else {
        getFullVerb();
    }
}
function switchConjugation() {
    if (document.getElementById("full_identifier").style.color == "grey") {
        document.getElementById("random_identifier").style.color = "grey"
        document.getElementById("full_identifier").style.color = "black"
        selectConjugationFull();
    }
    else {
        document.getElementById("random_identifier").style.color = "black"
        document.getElementById("full_identifier").style.color = "grey"
        selectConjugationRandom();
    }
}

function selectConjugationFull() {
    conjSequence = 1;
    randomConjugation = 0;
}
function selectConjugationRandom() {
    randomConjugation = 1;
}


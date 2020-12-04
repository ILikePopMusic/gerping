$( document ).ready(function() {

const derBtn = document.getElementById("der");
const dieBtn = document.getElementById("die");
const dasBtn = document.getElementById("das");
const wordsBtn = document.getElementById("wrong_vocab_button");

var corAns = 0;
var incorAns = 0;
var min = 0;
var max = data.length - 1;
var totalWords = 0;
var wrongWords = [];

function getWord() {
  var rnd = Number(Math.round(Math.floor(Math.random() * (+max + 1 - +min)) + +min))
  newObject = data[rnd].B.split(' ') //newObject = [article, noun] or [article, article, noun]
  var testVokabel = document.getElementById("vokabel");
  testVokabel.innerHTML = newObject[newObject.length - 1];
};
function getStats() {
  var totalWords = document.getElementById("total_words")
  totalWords.innerHTML = corAns + incorAns;
  var successRate = document.getElementById("success_rate")
  successRate.innerHTML = Math.round(corAns / (corAns + incorAns) * 100) + " %";
    if ((corAns / (corAns + incorAns) * 100) < 50) {
      document.getElementById("success_rate").style.color = "red";
    }
    else {
      document.getElementById("success_rate").style.color = "green";
    }
};
function wrongWordList() {
if (newObject.length == 3) {
  wrongWords.push("<br>" + newObject[0] + " " + newObject[1] + " " + newObject[2]);
}
else {
  wrongWords.push("<br>" + newObject[0] + " " + newObject[1])
}

};
function correctWord() {
      corAns = corAns + 1
      var answer = document.getElementById("correct_answer")
      answer.innerHTML = corAns;
      var infoFieldCorrect = document.getElementById("correct_old_word")
      var infoFieldWrong = document.getElementById("wrong_old_word")
      if (newObject.length == 3) {
      infoFieldCorrect.innerHTML = newObject[0] + " " + newObject[1] + " " + newObject[2]
      infoFieldWrong.innerHTML = " "
      }
      else {
      infoFieldCorrect.innerHTML = newObject[0] + " " + newObject[1]
      infoFieldWrong.innerHTML = " "
      }
      getStats()
      getWord()
};
function wrongWord() {
  incorAns = incorAns + 1
  var falseAnswer = document.getElementById("incorrect_answer")
  falseAnswer.innerHTML = incorAns;
  var infoFieldWrong = document.getElementById("wrong_old_word")
  var infoFieldCorrect = document.getElementById("correct_old_word")
  if (newObject.length == 3) {
    infoFieldWrong.innerHTML = newObject[0] + " " + newObject[1] + " " + newObject[2]
    infoFieldCorrect.innerHTML = " "    
  }
  else {
    infoFieldWrong.innerHTML = newObject[0] + " " + newObject[1]
    infoFieldCorrect.innerHTML = " "    
  }
  getStats()
  wrongWordList()
  getWord()
};

derBtn.addEventListener('click', function(event) {
  if (newObject[0] == "der" || newObject[1] == "der") {
  correctWord()      
  }
  else {
  wrongWord()
  }
});
dieBtn.addEventListener('click', function(event) {
  if (newObject[0] == "die" || newObject[1] == "die") {
  correctWord() 
  }
  else {
  wrongWord()
  }
});
dasBtn.addEventListener('click', function(event) {
  if (newObject[0] == "das" || newObject[1] == "das") {
  correctWord() 
  }
  else {
  wrongWord()
  }
});
wordsBtn.addEventListener('click', function(event) {
 var list = document.getElementById("wrong_vocab_list")
 list.innerHTML = wrongWords
})

getWord()

});


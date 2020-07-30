function wrongWord() {
    incorAns = incorAns + 1
    var falseAnswer = document.getElementById("incorrect_answer")
    var oldfalseAnswer = falseAnswer.innerHTML
    falseAnswer.innerHTML = incorAns;
    var infoFieldWrong = document.getElementById("wrong_old_word")
    var infoFieldCorrect = document.getElementById("correct_old_word")
    var correctAnswer = infoFieldWrong.innerHTML;
    if (newObject.length == 3) {
      infoFieldWrong.innerHTML = newObject[0] + " " + newObject[1] + " " + newObject[2]
      infoFieldCorrect.innerHTML = " "    
    }
    else {
      infoFieldWrong.innerHTML = newObject[0] + " " + newObject[1]
      infoFieldCorrect.innerHTML = " "    
    }
    getWord()
  }
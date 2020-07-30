function correctWord() {
    corAns = corAns + 1
        var answer = document.getElementById("correct_answer")
        var oldAnswer = answer.innerHTML
        answer.innerHTML = corAns;
        var infoFieldCorrect = document.getElementById("correct_old_word")
        var infoFieldWrong = document.getElementById("wrong_old_word")
        var correctAnswer = infoFieldCorrect.innerHTML;
        if (newObject.length == 3) {
        infoFieldCorrect.innerHTML = newObject[0] + " " + newObject[1] + " " + newObject[2]
        infoFieldWrong.innerHTML = " "
        }
        else {
        infoFieldCorrect.innerHTML = newObject[0] + " " + newObject[1]
        infoFieldWrong.innerHTML = " "
        }
        getWord()
  }
function getWord() {
    var rnd = Math.round(Math.floor(Math.random() * (+max + 1 - +min)) + +min)
    randomNumber = Number(rnd)
    newObject = data[randomNumber].B.split(' ') //newObject = [article, noun] or [article, article, noun]
    var testVokabel = document.getElementById("vokabel");
    var oldText = testVokabel.innerHTML;
    testVokabel.innerHTML = newObject[newObject.length - 1];
  }
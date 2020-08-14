var blank = [];
var word = [];
var i = 1;
var textDisplay = document.getElementById("text")
var originalText = document.getElementById("original_text")

    var submit = document.getElementById("submit_button")
    submit.addEventListener("click", function(event) {
    while (true) {                  
        if (document.querySelector(".blank_" + i) == null) {
            console.log("document null")
            break;
        }               
        blank[i] = document.querySelector(".blank_" + i).value
        word[i] = document.getElementById("b" + i)
        word[i].innerText = blank[i]
        i = i + 1;
        }
    textDisplay.style.visibility = "visible"
    i = 1;
    })

    var showButton = document.getElementById("showText_button")
    showButton.addEventListener("click", function(event) {
        
        if (textDisplay.style.visibility == "hidden") {
            textDisplay.style.visibility = "visible"
        }
        else {
            textDisplay.style.visibility = "hidden"
        }
    })

    var showOriginal = document.getElementById("showOriginal_button")
    showOriginal.addEventListener("click", function(event) {
        originalText.style.visibility = "visible"
        textDisplay.innerHTML = originalText.innerHTML
        originalText.style.visibility = "hidden"
        })
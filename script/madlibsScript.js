$( document ).ready(function() { //GIVE ME THAT GOOD PRACTICE BOII
    

var textDisplay = document.querySelector(".text")
var originalText = document.getElementById("original_text")
var blankErrorMsg = document.getElementById("blank_error")
var input = []
var blank = []
var maxNmbr = Number(document.querySelector(".text").id)                //Id is in the HTML to define how many blanks there are in the text
var showButton = document.getElementById("showText_button")
var showOriginal = document.getElementById("showOriginal_button")

originalText.style.visibility = "hidden";
var submit = document.getElementById("submit_button")
submit.addEventListener("click", function(event) {
    textDisplay.style.visibility = "visible"
    for (i=1; i<=maxNmbr; i++) {               
        input[i] = document.querySelector(".blank_" + i).value 
            if (input[i] == "") {                                      //for blank entries
                document.documentElement.scrollTop = 0;                //scrolls to the top of the page
                document.body.scrollTop = 0;                           //scrolls to the top of the page for safari browsers lol
                blankErrorMsg.style.visibility = "visible";            //shows red error message
                textDisplay.style.visibility = "hidden";
                break;
            } else {
                blankErrorMsg.style.visibility = "hidden";
            }
            if (i==maxNmbr) {
                showButton.style.visibility = "visible";                //shows hide/show text button when loop finishes
            }
            
        blank[i] = document.querySelectorAll(".b" + i)
        blank[i].forEach(                                   //in case there are multiple classes with the same name
            function(node, index) {
            node.innerText = input[i]                    
            })
    }
})


showButton.addEventListener("click", function(event) {    
        if (textDisplay.style.visibility == "hidden") {
            textDisplay.style.visibility = "visible"
        }
        else {
            textDisplay.style.visibility = "hidden"
        }
    
})


showOriginal.addEventListener("click", function(event) {
        if (originalText.style.visibility == "hidden") {
            originalText.style.visibility = "visible";
        }
        else {
            originalText.style.visibility = "hidden";
        }
})
});
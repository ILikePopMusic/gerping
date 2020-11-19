
function openNav() {
if (document.getElementById("mySidenav").style.width == "200px") {
closeNav()
}
else {
    $("#sidebar_content").hide() //motherfucker can only fade out, when its hidden but it doesnt work with visibility = hidden ...
document.getElementById("mySidenav").style.width = "200px";
setTimeout(function () {
    $("#sidebar_content").fadeIn(500)
}, 500)
}
}

function closeNav() {
    $("#sidebar_content").fadeOut(500);
setTimeout(function () {
    document.getElementById("mySidenav").style.width = "0"
    document.getElementById("mySidenav").style.marginLeft = "0";
}, 500)
}


var GerpMenuOpen = false;
function openGerpNav() {
    if (MadMenuOpen == true) {
        closeMadNav();
        setTimeout(function() {
            
                $('#gerping_nav_content').hide()
                document.getElementById("gerping_nav").style.width = "600px";
                setTimeout(function () {
                $('#gerping_nav_content').fadeIn(500)
                }, 500)
                GerpMenuOpen = true;

        }, 1500)
    }
    else if (GerpMenuOpen == true) {
        closeGerpNav();
    }
    else {
        $('#gerping_nav_content').hide()
        document.getElementById("gerping_nav").style.width = "600px";
        setTimeout(function () {
        $('#gerping_nav_content').fadeIn(500)
        }, 500)
        GerpMenuOpen = true;

    }
}
function closeGerpNav() {
    $('#gerping_nav_content').fadeOut(500);
setTimeout(function () {
    document.getElementById("gerping_nav").style.width = "0";
    document.getElementById("gerping_nav").style.marginLeft = "0";
}, 500)
    GerpMenuOpen = false;
}
function backEndInfo() { 
    $('#working_backend').hide()
    $('#working_backend').fadeIn(500)
    setTimeout(function () {
    $('#working_backend').fadeOut(500)
    }, 2000)
}
var MadMenuOpen = false;
function openMadNav() {
    if (GerpMenuOpen == true) {
        closeGerpNav();
        setTimeout(function() {
            
                $('#madlibs_nav_content').hide()
                document.getElementById("madlibs_nav").style.width = "600px";
                setTimeout(function () {
                $('#madlibs_nav_content').fadeIn(500)
                }, 500)
                MadMenuOpen = true;
            

        }, 1000)
    }
    else if (MadMenuOpen == true) {
        closeMadNav();
    }
    else {
        $('#madlibs_nav_content').hide()
        document.getElementById("madlibs_nav").style.width = "600px";
        setTimeout(function () {
        $('#madlibs_nav_content').fadeIn(500)
        }, 500)
        MadMenuOpen = true;

    }
}
function closeMadNav() {
$('#madlibs_nav_content').fadeOut(500);
setTimeout(function () {
document.getElementById("madlibs_nav").style.width = "0";
document.getElementById("madlibs_nav").style.marginLeft = "0";
}, 500)
MadMenuOpen = false;
}
function howToPlay() {
    if (document.getElementById("how_to_play").style.display == "") {
    $('#how_to_play').hide()
    $('#how_to_play').fadeIn(500)
}
    else {
    $('#how_to_play').fadeOut(500)
    setTimeout(function () {
    document.getElementById("how_to_play").style.display = "";
    }, 600)
    }
}
var grammarBoxOne = false;
var grammarBoxTwo = false;
var grammarBoxThree = false;
function explainFadeOut() {
    $('#explanation_der').fadeOut(500);
    $('#explanation_die').fadeOut(500);
    $('#explanation_das').fadeOut(500);
    grammarBoxOne = false;
    grammarBoxTwo = false;
    grammarBoxThree = false;       
        
}
function explainGrammarOne() {
    if (grammarBoxTwo == true || grammarBoxThree == true) {
        explainFadeOut();
        setTimeout(function() {
            $('#explanation_der').hide();
            $('#explanation_der').fadeIn(500)
            grammarBoxOne = true;
        }, 1000)
    }
    else if (grammarBoxOne == false) {
        $('#explanation_der').hide();
        $('#explanation_der').fadeIn(500)
        grammarBoxOne = true;            
    }
    
    else {
        explainFadeOut();
    }
}

function explainGrammarTwo() {
    if (grammarBoxOne == true || grammarBoxThree == true) {
        explainFadeOut();
        setTimeout(function() {
            $('#explanation_die').hide();
            $('#explanation_die').fadeIn(500)
            grammarBoxTwo = true;
        }, 1000)
        
    }
    else if (grammarBoxTwo == false) {
        $('#explanation_die').hide();
        $('#explanation_die').fadeIn(500)
        grammarBoxTwo = true;
    }
    
    else {
        explainFadeOut();
    }
}

function explainGrammarThree() {
    if (grammarBoxOne == true || grammarBoxTwo == true) {
        explainFadeOut();
        setTimeout(function() {
            $('#explanation_das').hide();
            $('#explanation_das').fadeIn(500)
            grammarBoxThree = true;
        }, 1000)
        
    }
    else if (grammarBoxThree == false) {
        $('#explanation_das').hide();
        $('#explanation_das').fadeIn(500)
        grammarBoxThree = true;
    }
    
    else {
        explainFadeOut();
    }
}

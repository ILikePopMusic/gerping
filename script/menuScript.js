
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
                }, 1000)
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
        }, 1000)
        GerpMenuOpen = true;

    }
}

function closeGerpNav() {
    $('#gerping_nav_content').fadeOut(500);
setTimeout(function () {
    document.getElementById("gerping_nav").style.width = "0";
    document.getElementById("gerping_nav").style.marginLeft = "0";
}, 1000)
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
                }, 1000)
                MadMenuOpen = true;
            

        }, 1500)
    }
    else if (MadMenuOpen == true) {
        closeMadNav();
    }
    else {
        $('#madlibs_nav_content').hide()
        document.getElementById("madlibs_nav").style.width = "600px";
        setTimeout(function () {
        $('#madlibs_nav_content').fadeIn(500)
        }, 1500)
        MadMenuOpen = true;

    }
}

    function closeMadNav() {
    $('#madlibs_nav_content').fadeOut(500);
    setTimeout(function () {
    document.getElementById("madlibs_nav").style.width = "0";
    document.getElementById("madlibs_nav").style.marginLeft = "0";
    }, 1000)
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
    var grammarBoxDer = false;
    var grammarBoxDie = false;
    var grammarBoxDas = false;
    function explainFadeOut() {
        $('#explanation_der').fadeOut(500);
        $('#explanation_die').fadeOut(500);
        $('#explanation_das').fadeOut(500);
        grammarBoxDer = false;
        grammarBoxDie = false;
        grammarBoxDas = false;       
            
    }
    function explainDer() {
        if (grammarBoxDie == true || grammarBoxDas == true) {
            explainFadeOut();
            setTimeout(function() {
                $('#explanation_der').hide();
                $('#explanation_der').fadeIn(500)
                grammarBoxDer = true;
            }, 1000)
        }
        else if (grammarBoxDer == false) {
            $('#explanation_der').hide();
            $('#explanation_der').fadeIn(500)
            grammarBoxDer = true;            
        }
        
        else {
            explainFadeOut();
        }
    }

    function explainDie() {
        if (grammarBoxDer == true || grammarBoxDas == true) {
            explainFadeOut();
            setTimeout(function() {
                $('#explanation_die').hide();
                $('#explanation_die').fadeIn(500)
                grammarBoxDie = true;
            }, 1000)
            
        }
        else if (grammarBoxDie == false) {
            $('#explanation_die').hide();
            $('#explanation_die').fadeIn(500)
            grammarBoxDie = true;
        }
        
        else {
            explainFadeOut();
        }
    }

    function explainDas() {
        if (grammarBoxDer == true || grammarBoxDie == true) {
            explainFadeOut();
            setTimeout(function() {
                $('#explanation_das').hide();
                $('#explanation_das').fadeIn(500)
                grammarBoxDas = true;
            }, 1000)
            
        }
        else if (grammarBoxDas == false) {
            $('#explanation_das').hide();
            $('#explanation_das').fadeIn(500)
            grammarBoxDas = true;
        }
        
        else {
            explainFadeOut();
        }
    }

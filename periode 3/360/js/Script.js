var scores = '';
function ajax() {
    var newHighscore = $("input").val();
    $.ajax({
        url: "js/php.php/?newHighscore=" + newHighscore,
        success: function (result) {
            scores = (result);
            allHighscores = JSON.parse(result);
            alert("successful");
            $("#value").val("");
        }
    });
}
function updatehiscores() {

    allHighscores.sort(sortNumber);
    $("#first").text(allHighscores[3]);
    $("#second").text(allHighscores[2]);
    $("#third").text(allHighscores[1]);
    $("#fourth").text(allHighscores[0]);
}

function sortNumber(a, b) {
    return a - b;
}




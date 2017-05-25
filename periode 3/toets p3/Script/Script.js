$(document).ready(function () {
// Opdracht 2: Typ hieronder je uitwerking
    $("#zoekInput").keyup(function () {
        var x = $("#zoekInput").val();
        $("#zoekResult").text(x);
    });

// Opdracht 3: Typ hieronder je uitwerking
    $("form").submit(function () {
        var emailString = $("#email").val();
        if (emailString.length < 6) {
            $("#email").addClass('orange');
        }
        else {
            $("#email").removeClass('orange');
            alert("Bedankt voor je aanmelding.");
        }
        return false;
    });

// Opdracht 4: Typ hieronder je uitwerking
    $("h1").click(function () {
        $("#car").animate({
            left: '100%'
        }, 3000);
        setTimeout(function () {
            $("#car").animate({
                left: '0%'
            }, 3000);
        })
    });

// Opdracht 5: Typ hieronder je uitwerking
    $("#ChinaTraffic").click(function () {
        $.ajax({
            url: "https://www.r-spierings.nl/traffic/",
            success: function (result) {
                scores = (result);
                result = $.parseJSON(result);
                $("h2").text("China");
                $("p").text(result.China + " kilometer");
            }
        });
    });

// Extra Opdracht :D
    $("#car").click(function () {
        $("#car").text("");
        $("#car").append("Meep Meep<br>&#128663;");
        setTimeout(function () {
            $("#car").text("");
            $("#car").append("&#128663;");
        }, 750);
    })
});
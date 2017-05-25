$(document).ready(function () {

    $("input").keypress(function () {
        var naam1 = $("#naam1").prop("value");
        var naam2 = $("#naam2").prop("value");

        $.ajax({
            url: "Cupido.php?naam1="+naam1+"&"+naam2,
            success: function (result) {
                result = $.parseJSON(result);

                $("#resultaat").text(result.lovePercentage + "%");
                debugger;
            }
        });


    });





});
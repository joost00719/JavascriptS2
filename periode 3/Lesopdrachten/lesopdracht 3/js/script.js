$(document).ready(function () {
    $("#updateButton").click(function () {
        $.ajax({
//Start de ajax request
            url: "php/temperatuur.php",
            success: function (result) {
                result = $.parseJSON(result);
                $("#tempAmsterdam").text(result.Amsterdam);
                $("#tempGroningen").text(result.Groningen);
                $("#tempDenBosch").text(result.DenBosch);
                $("#tempVlissingen").text(result.Vlissingen);
            }
        })
    });
});
/**
 * Created by Joost Laptop on 16-3-2017.
 */

$(document).ready(begin);
//functie die de data op gaat halen
function begin() {
    for (var i = 0; i < steden.length; i++) {
        $("ol").append(steden[i] + ": <li id='" + steden[i] + "'></li> <br />");
        $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather?q=" + steden[i] + "+&appid=8d294e9544f1f24d1ec04c7e8839cba9&units=metric",
            success: function (result) {
                temperaturen.push(result.main.temp);
            }
        });
    }
    setTimeout(printTemps, 500);
}
//print de temperaturen naar de HTML
function printTemps() {
    for (i = 0; i < steden.length; i++) {
        $("#" + steden[i]).text(temperaturen[i]);
    }
}
//mogelijkheid om een extra stad toe te voegen.
//kan crashen als je een stad invoerd met een spelfout.
function addCity() {
    var customCity = $("#customCity").val();
    steden.push(customCity);
    temperaturen = [];
    $("ol").remove();
    $("#stedenList").append("<ol></ol>");
    $("#customCity").val('');
    begin();
}
function key() {
    if (event.which == 13 || event.keyCode == 13) {
        if ($("#customCity").val() == 'reload') {
            location.reload()
        } else {
            addCity();

        }
    }
}
function forceReload() {
    $("ol").remove();
    $("#stedenList").append("<ol></ol>");
    begin();
}
//lege array voor de temperaturen die wordt gevuld door functie begin()
var temperaturen = [];
//array met alle steden.
var steden = [
    "Amsterdam",
    "Groningen",
    "Vlissingen",
    "Den_Bosch",
    "Arnhem",
    "Leiden",
    "Tilburg",
    "Utrecht",
    "Düsseldorf",
    "CamBidge",
    "NewYork",
    "LosAngeles"
];
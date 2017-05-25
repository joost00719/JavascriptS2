$(document).ready(start);
/*in seconde*/
var speed = 5;


var snelheid = speed * 1000;

function start() {
    $("#zon").animate({
        left: '90%',
        top: '0%',
        backgroundColor: 'yellow'
    }, snelheid, animatie2);
    $("#lucht").animate({
        opacity: 1
    }, snelheid);
}
function animatie2() {
    $("#zon").animate({
        left: '10%',
        top: '0%',
        backgroundColor: 'yellow'
    }, snelheid, animatie3);
}
function animatie3() {
    $("#zon").animate({
        left: '120%',
        top: '70%',
        backgroundColor: '#00ffff'
    }, snelheid, animatie4);
    $("#lucht").animate({
        opacity: 0
    }, snelheid);
}
function animatie4() {
    $("#zon").animate({
        left: '0%',
        top: '70%',
        backgroundColor: 'red'
    }, snelheid, start);


    $("#maan").animate({
        left: '100%',
        top: '0%'
    }, snelheid, resetmaan);
    $("")
}

function resetmaan() {
    $("#maan").css({
            top: '70%',
            left: '-20%'
        }
    );
}
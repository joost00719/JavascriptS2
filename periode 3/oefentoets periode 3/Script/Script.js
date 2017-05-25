
function contactName() {
    if($("#naam").val().length < 4){
        $("#naam").addClass("red");
    }
    else{
        $("#naam").removeClass("red");
    }
}

function contactEmail() {
    var email = $("#email").val();
    if (email.indexOf('@') > -1){
        $("#email").removeClass("red");
    }
    else {
        $("#email").addClass("red");
    }
}
//not working
if($("#message").prop("checked", true)){
    $("#message").css({"display" : ""});

}

$("#advertisement").hover(function(){
  $("#kw1cLogo").animate

})
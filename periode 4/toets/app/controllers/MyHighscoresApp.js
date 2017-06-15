app.controller("MyHighscoresAppUsers", function($scope) {
    //variabelen in de scope, met naam en datum
    $scope.username = "Joost";
    $scope.birthday = "03-10-1999";
});
app.controller("MyHighscoreApp", function($scope) {
    //maken lege array
    $scope.highscores = [];
    //-geen score text- wordt displayed.
    $scope.noScores = true;

    //functie voor de knop met ng-click
    $scope.pushScore = function(){
        //pushed de nieuwe highscore naar de highscores array
    $scope.highscores.push($scope.newScore);
    //haalt de -geen score text- weg.
    $scope.noScores = false;
    }
});
//Ik wilde nog een isUndefined() gebruiken voor als de input niet defined was, maar dat was niet gelukt D:

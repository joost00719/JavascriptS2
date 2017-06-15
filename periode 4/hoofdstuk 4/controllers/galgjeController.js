app.controller("galgje", function($scope) {

$scope.letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
$scope.galgWoord = ["TEST"];
var woord = Array.from(($scope.galgWoord[0]));
    $scope.galgWoordArray = woord;
$scope.getLetter = function (x) {

    if(woord.indexOf(x) >= 0){
        var str = (woord);
        var indicator = [];
        for(var i = 0; i<str.length; i++){
            if (str[i] === x) {indicator.push(i);}

        }
        alert(indicator);
    }
}
});
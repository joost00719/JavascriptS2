app.controller("meter", function($scope) {

$scope.userInput = true;
$scope.meterDiv = false;
$scope.step2 = function () {
    $scope.userInput = false;
    $scope.meterDiv = true;
    $scope.resultaat = Math.floor((Math.random() * 100) + 1) + "%";
};
$scope.again = function () {
    $scope.userInput = true;
    $scope.meterDiv = false;
    $scope.naam1 = "";
    $scope.naam2 = "";
};


});
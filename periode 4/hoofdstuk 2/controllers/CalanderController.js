app.controller("CalenderController", function($scope) {

    $scope.title =          "Mijn kalender!";
    $scope.startDate =      new Date(2016,1,1);
    $scope.endDate =        new Date(2018,31,1);
    $scope.currentMonth =   5;
    $scope.currentYear =    2017;

    //function op een scope
    $scope.next = function next(){
        if ($scope.currentMonth < 12){
            $scope.currentMonth++;
        }else{
            $scope.currentMonth = 1;
            $scope.currentYear++;
        }
    }
    $scope.previous = function previous(){

        if ($scope.currentMonth <=0){
            $scope.currentMonth = 12;
            $scope.currentYear--
        }else{
            $scope.currentMonth -= 1;
        }

    }

});


app.controller("CalenderController", function($scope) {

    $scope.title =          "Mijn kalender!";
    $scope.startDate =      new Date(2016,1,1);
    $scope.endDate =        new Date(2018,31,1);
    $scope.currentMonth =   5;
    $scope.currentYear =    2017;

    //function op een scope
    $scope.nextMonth = function(){
        $scope.currentMonth++;
    };

    var dag;
    var maand;
    var year;
    $scope.next = function next(n){
        switch(n){
            case dag:
                if($scope.startDate <= 31) {
                    return $scope.startDate += 1;
                }
                else{
                    return $scope.currentMonth += 1;
                }
                break;
            //-------------------------------
            case maand:
                if($scope.currentMonth <= 12) {
                    return $scope.currentMonth += 1;
                }
                else {
                    return $scope.currentYear =+ 1;
                }
                break;
            //--------------------------------
            case year:
                return $scope.currentYear += 1;
                break;
            //--------------------------------
            default:
                return "Error";
                break;
        }
    }

});


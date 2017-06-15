<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>hoofdstuk 1</title>
    <script src="../assets/js/angular.js"></script>
    <script src="../app.js"></script>
    <script src="../controllers/CalanderController.js"></script>
    <script src="../controllers/LoginController.js"></script>
    <style>



    </style>
</head>
<body>
    <div ng-app="MyApp">
        <div ng-controller="CalenderController">

            <p>
                {{ title }}
            </p>
            <p>
                startdatum: {{ startDate }}
            </p>
            <p>
                deze maand: {{ currentMonth }}
            </p>
            <p>
                Dit jaar: {{ currentYear }}
            </p>

            <button ng-click="next()">next month</button>
            <button ng-click="previous()">Previous month</button>
        </div>
        <div ng-controller="LoginController">

        </div>
    </div>




</body>
</html>
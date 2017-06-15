<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>hoofdstuk 1</title>
    <script src="../assets/js/angular.js"></script>
    <script src="../app.js"></script>
    <script src="../controllers/loveController.js"></script>
    <style>

    </style>
</head>
<body>
    <div ng-app="MyApp">
        <h1>
            Doe de liefdesmeter test!
        </h1>
        <div ng-controller="meter">
            <div ng-show="userInput">
                <input type="text" ng-model="naam1">
                <span><3</span>
                <input type="text" ng-model="naam2">
                <input type="button" ng-click="step2()" value="Volgende stap">
                <p ng-bind="naam1"></p>
                <p ng-bind="naam2"></p>
            </div>
            <div ng-show="meterDiv">
                <span ng-bind="naam1"> </span> <3 <span ng-bind="naam2"></span> <span ng-bind="resultaat"> </span>
                <br />
                <input type="button" ng-click="again()" value="Nog een keer">
            </div>
        </div>
    </div>




</body>
</html>
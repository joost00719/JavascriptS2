<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>hoofdstuk 1</title>
    <script src="../assets/js/angular.js"></script>
    <script src="../app.js"></script>
    <script src="../controllers/galgjeController.js"></script>
    <style>

    </style>
</head>
<body>
    <div ng-app="MyApp">
        <h1>
            Galgje
        </h1>

        <div ng-controller="galgje">
            <button ng-repeat="letter in letters" value="{{letter}}" ng-click="getLetter(letter);">{{letter}}</button> <br />
            <span ng-repeat="galgletter in  galgWoordArray" ng-bind="galgletter"></span>
        </div>
    </div>

</body>
</html>

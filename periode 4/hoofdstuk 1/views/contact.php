<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>hoofdstuk 1</title>
    <script src="../assets/js/angular.js"></script>
    <script src="../app.js"></script>
    <script src="../controllers/ContactController.js"></script>

    <style>
        table, tr, td{
            border: solid black 1px;
        }
        tr > td:first-child{
            font-weight: bold;
            width:300px;
        }
    </style>
</head>
<body ng-app="MyApp" ng-controller="ContactController">

<table>
    <tr>
        <td>
            Naam:
        </td>
        <td>
            {{ naam }}
        </td>
    </tr>
    <tr>
        <td>
            Geboortedatum:
        </td>
        <td>
            {{ geboortedatum }}
        </td>
    </tr>
    <tr>
        <td>
            Adres:
        </td>
        <td>
            {{ adres }}
        </td>
    </tr>
    <tr>
        <td>
            Woonplaats:
        </td>
        <td>
            {{ woonplaats }}
        </td>
    </tr>
    <tr>
        <td>
            Emailadress:
        </td>
        <td>
            {{ email }}
        </td>
    </tr>
    <tr>
        <td>
            Favourite hobby:
        </td>
        <td>
            {{ hobby }}
        </td>
    </tr>
</table>


</body>
</html>
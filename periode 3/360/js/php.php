<?php
/**
 * Created by PhpStorm.
 * User: Joost Laptop
 * Date: 29-3-2017
 * Time: 08:54
 */
session_start();

if(isset($_SESSION['highscores']) != true ){
    $_SESSION['highscores'] = array();
}
// Kijk of er een GET['newHighscore'] is meegegeven in de URL
if(isset($_GET['newHighscore'])){
    $newScore = $_GET['newHighscore'];
    array_push($_SESSION['highscores'], $newScore);
}
// Lees de Array met de highscores uit de $_SESSION in
$sessionArray = $_SESSION["highscores"];

// Verander de Array naar een JSON string
$jsonString = json_encode($sessionArray);

// Echo de JSON String
echo $jsonString;
?>
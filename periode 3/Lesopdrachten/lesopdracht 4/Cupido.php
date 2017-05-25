<?php

$naam1 = "";
$naam2 = "";

// Kijk of naam1 gevuld is in de GET paramater
if(isset($_GET['naam1'])){
    $naam1 = $_GET['naam1'];
}

// Kijk of naam2 gevuld is in de GET parameter
if(isset($_GET['naam2'])){
    $naam2 = $_GET['naam2'];
}

// Tel de ASCII code van de eerste 2 karakters van de twee namen bij elkaar op
$asciiNaam1 = ord($naam1) + ord(substr($naam1, 1, 1));
$asciiNaam2 = ord($naam2) + ord(substr($naam2, 1, 1));

// Tel de 2 uitkomsten bij elkaar op neem de modulo hiervan
$result['lovePercentage'] = ($asciiNaam1 + $asciiNaam2) % 100;

// Zet de array om naar een JSON string
$resultJSON = json_encode($result);

// echo deze JSON string
echo $resultJSON;

?>
<?php
// De tijdzone naar onze tijd zetten
date_default_timezone_set('Europe/Amsterdam');

// Welk uur van de dag is het?
$hour = date("H");

// Bereken 4 verschillende temperaturen en bewaar deze in een array
$temperature = array();
$temperature['Amsterdam'] = $hour . '.'. rand(1, 99);
$temperature['Vlissingen'] = $hour . '.'. rand(1, 99);
$temperature['DenBosch'] = $hour . '.'. rand(1, 99);
$temperature['Groningen'] = $hour . '.'. rand(1, 99);

// Encode de temperatuur array naar JSON object
$jsonTemperature = json_encode($temperature);

// Echo het JSON object
echo $jsonTemperature;

?>
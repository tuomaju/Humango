<?php
header('Access-Control-Allow-Origin: *');
$data .=  $_GET['json']  ;
file_put_contents('assets/palaute.json',   $_GET['json'] )
?>
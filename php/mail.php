<?php

$message = '';
$message .= '<h1>Вопрос с сайта Министерства обороны"</h1>';
$message .= '<p> Имя: '.$_POST['exampleInputName1'].'</p>';
$message .= '<p> Телефон: '.$_POST['phone'].'</p>';
$message .= '<p> Вопрос: '.$_POST['exampleFormControlTextarea1'].'</p>';

$to = 'bogdancoo@yandex.ru';
$spectext = '<!DOCTYPE HTML><!DOCTYPE html><html><head><title>Заказ</title></head><body>';
$headers = 'MIME-Version: 1.0'. "\r\n";
$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";

$m = mail($to, 'Вопрос с сайта', $spectext.$message.'</body></html>', $headers);
if ($m) {echo 1;} else {echo 0;}
?>
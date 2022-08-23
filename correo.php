<?php
    ini_set('display_errors', 1);
    error_reporting(E_ALL);

    $destinatario = 'franco.lgnm@gmail.com';
    $asunto = "Formulario Web";
    $email = $_POST['email'];
    $name = $_POST['name'];
    $cel = $_POST['cel'];
    $message = $_POST['message'];
    $header = "Enviado desde la página LIBRE";
    $mensajeCompleto = $message . "\nAtentamente: " . $name;

    $result = mail($destinatario, $asunto, $mensajeCompleto);

    if(!$result) {   
	#echo "Error";
    } else {
      #echo "Success";
    }
    
    echo "<script>alert('gracias por escribirnos, en breve nos ponemos en contacto')</script>";
    echo "<script>setTimeout(\"location.href='index.html'\", 1000)</script>";
?>

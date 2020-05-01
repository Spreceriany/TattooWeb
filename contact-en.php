<?php
if(isset($_POST['submit']))
{

    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['email'];
    $message = $_POST['message'];

    $mailTo = "manovistudio@gmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have recieved an e-mail from".$name.".\n\n".$message;
 
    mail($mailFrom, $subject, $txt, $headers);
    header("Location: index-en.php?mailsend");
  
}

?>
<?php
if(isset($_POST['submit'])){
    $name = $_POST['name'];
    $subject = $_POST['subject'];
    $mailFrom = $_POST['mail'];
    $message = $_POST['message'];
    
    $mailTo = "developerjason@protonmail.com";
    $headers = "From: ".$mailFrom;
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;
    mail($mailTo, $subject, $txt, $headers);
    header("Location: contactform.php?mailsend");
};
echo '<script type="text/javascript">
           window.location = "http://www.jasonwarner.dev/html/contact.html"
      </script>';
?>

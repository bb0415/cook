<html>
    <body style = "max-width: 100%; max-height: 100%; background-color: #f9ecfc79;">
    
    </body>
</html>

<?php

$id = $_GET["id"];

$dbcon = mysqli_connect('localhost','root','');
mysqli_select_db($dbcon, 'cook');

$query = "SELECT u_id FROM user WHERE u_id = '$id' ";

$result = mysqli_query($dbcon, $query);

$rs = mysqli_fetch_array($result);

if($rs==false){
    echo "사용 가능한 아이디입니다.";

    echo "<script> document.getElementById('sigup_b;').disabled = false;</script>";

        
    
}else{ 
    echo "<script> document.getElementById('sigup_b').disabled = true;</script>";
    echo "사용 불가능한 아이디입니다";
}


mysqli_close($dbcon);

?>
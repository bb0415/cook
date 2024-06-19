
<?php

$uid = $_POST["u_id"];
$upw = $_POST["u_pw"];

$dbcon = mysqli_connect('localhost','root','');
mysqli_select_db($dbcon, 'cook');

$query = "SELECT * FROM user WHERE u_id = '$uid' AND u_pw = '$upw' ";

$result = mysqli_query($dbcon, $query);

$rs = mysqli_fetch_array($result);

if($rs==false){
    echo "<script>alert(`비밀번호 또는 아이디가 일치하지 않습니다.`)</script>";

    echo "<script>window.history.back()</script>";
}else{
    session_start();
    $_SESSION['uid'] = $uid;
    echo("<script>location.href='../post.html';</script>");
}



mysqli_close($dbcon);

?>
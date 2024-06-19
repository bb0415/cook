<?php

$pw = $_POST["u_pw"];
$id = $_POST["u_id"];
$repw = $_POST["u_repw"];


if($pw == $repw){
    $dbcon = mysqli_connect('localhost','root','');
    mysqli_select_db($dbcon, 'cook');

    $query = "INSERT INTO user values(null ,'$id', '$pw')";

    $query2 = "SELECT * FROM user WHERE u_id = '$id' ";

    $result = mysqli_query($dbcon, $query2);

    $rs = mysqli_fetch_array($result);

    if($rs==false){
        echo "<script>location.href='../post.html';</script>";
        mysqli_query($dbcon, $query);   
    }else{
        echo("<script>window.history.back()</script>");
    }

    mysqli_close($dbcon);  
}else{
    echo("<script>window.history.back()</script>");

}

    

<?php
session_start();
if(!isset($_SESSION['id'])){
  header('login.php');
}

$userID = $_SESSION['id'];
$postName = mysql_real_escape_string($_POST['postName']);
$postContent = mysql_real_escape_string($_POST['postContent']);

if($_SERVER["REQUEST_METHOD"] == "POST"){
if(isset($postName) && isset($postContent)){
  if(!empty($postName) && !empty($postContent)){

    $host = "cosc360.ok.ubc.ca";
    $database = "db_49180145";
    $user = "49180145";
    $password = "49180145";

    $connection = mysqli_connect($host, $user, $password, $database);

    $error = mysqli_connect_error();
    if($error == null)
    {
      $sql = "INSERT INTO thread(userID, postContent, postName) VALUES('$userID', '$postContent', '$postName')";
      $result = mysqli_query($connection,$sql);

      echo"success";
      header("Location: thread.php");
      mysqli_close($connection);
    }else{
      $output = "<p>Unable to connect to database!</p>";
      exit($output);
    }

}
}
}
 ?>

<?php
session_start();
$userID = $_SESSION['id'];
$postComment = mysql_real_escape_string($_POST['postComment']);
$postID = $_GET['postID'];


if($_SERVER["REQUEST_METHOD"] == "POST"){
if(isset($postComment)){
  if(!empty($postComment)){

    $host = "cosc360.ok.ubc.ca";
    $database = "db_49180145";
    $user = "49180145";
    $password = "49180145";

    $connection = mysqli_connect($host, $user, $password, $database);

    $error = mysqli_connect_error();
    if($error == null)
    {
      $sql = "INSERT INTO comment(userID, comContent, postID) VALUES('$userID', '$postComment', '$postID')";
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

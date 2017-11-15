<?php
session_start();
if(isset($_SESSION['id']))
    header("Location:profile.php");


$username = mysql_real_escape_string($_POST['username']);
$password1 = mysql_real_escape_string(md5($_POST['password']));

if($_SERVER["REQUEST_METHOD"] == "POST"){
  if(isset($username)&&isset($password1)){
    if(!empty($username)&&!empty($password1)){
      $host = "cosc360.ok.ubc.ca";
      $database = "db_49180145";
      $user = "49180145";
      $password = "49180145";

      $connection = mysqli_connect($host, $user, $password, $database);

      $error = mysqli_connect_error();
      if($error == null)
      {
        $sql = "SELECT username, userID FROM users WHERE username = '$username' and password = '$password1'";
        $result = mysqli_query($connection,$sql)OR DIE($sql.mysql_error());
        $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
        $count = mysqli_num_rows($result);

        // If result matched $myusername and $mypassword, table row must be 1 row

        if($count == 1) {
          $_SESSION['id']=$row['userID'];
          echo '<script type="text/javascript"> window.open("profile.php","_self");</script>';  //open the home page if login is successful

        }else {
           echo"Your Login Name or Password is invalid";
        }
        mysqli_close($connection);  }else{
            $output = "<p>Unable to connect to database!</p>";
            exit($output);
          }
    }
  }
}
 ?>

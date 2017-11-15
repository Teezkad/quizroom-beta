<?php

$username = mysql_real_escape_string($_POST["username"]);
$password1 = mysql_real_escape_string(md5($_POST["oldpassword"]));
$password2 = mysql_real_escape_string(md5($_POST["newpassword"]));
$password3 = mysql_real_escape_string(md5($_POST["newpassword-check"]));

if($_SERVER["REQUEST_METHOD"] == "POST"){
  if(isset($username)&&isset($password1)&&isset($password2)&&isset($password3)){
    if(!empty($username)&&!empty($password1)&&!empty($password2)&&!empty($password3)){

      $host = "cosc360.ok.ubc.ca";
      $database = "db_49180145";
      $user = "49180145";
      $password = "49180145";

      $connection = mysqli_connect($host, $user, $password, $database);
      $error = mysqli_connect_error();
      if($error == null)
      {

  $sql = "SELECT username FROM users WHERE username = '$username' and password = '$password1'";
  $result = mysqli_query($connection,$sql)OR DIE($sql.mysql_error());
  $row = mysqli_fetch_array($result,MYSQLI_ASSOC);

  $count = mysqli_num_rows($result);

  // If result matched $myusername and $mypassword, table row must be 1 row

  if($count == 1) {
  $sql2 = "UPDATE users SET password = '$password2' WHERE username = '$username'";
  $result2 = mysqli_query($connection,$sql2)OR DIE($sql2.mysql_error());
  echo "password UPDATED";
  }else {
echo "INCORRECT PASSWORD, cannot change!!!";
  }


  mysqli_close($connection);
}
      else
      {
        $output = "<p>Unable to connect to database!</p>";
        exit($output);
      }
    }
  }
}
 ?>

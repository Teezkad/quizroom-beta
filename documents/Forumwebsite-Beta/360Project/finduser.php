<?php
session_start();
if(!isset($_SESSION['ID'])){
  header('login.php');
}
$username = mysql_real_escape_string($_POST['username']);

if($_SERVER["REQUEST_METHOD"] == "POST"){
if(isset($username)){
  if(!empty($username)){

    $host = "cosc360.ok.ubc.ca";
    $database = "db_49180145";
    $user = "49180145";
    $password = "49180145";

    $connection = mysqli_connect($host, $user, $password, $database);

    $error = mysqli_connect_error();
    if($error == null)
    {
    $sql = "SELECT firstname, lastname, email, userID FROM users WHERE username = '$username'";
    $result = mysqli_query($connection,$sql)OR DIE($sql.mysql_error());
    $row = mysqli_fetch_array($result,MYSQLI_ASSOC);
    $ID = $row['userID'];

    $count = mysqli_num_rows($result);

    $sql2 = "SELECT image, contentType FROM userimages WHERE userID = '$ID'";
    $result2 = mysqli_query($connection,$sql2)OR DIE($sql2.mysql_error());
    $row2 = mysqli_fetch_array($result2,MYSQLI_ASSOC);
    $image = $row2['image'];
    $type = $row2['contentType'];

if($count == 1){
echo "<fieldset>";
echo '<legend>'.$ID.'</legend>' ;
echo "<table><tr><td>firstname:".$row['firstname']."</td></tr>";
echo "<tr><td>Lastname:".$row['lastname']."</td></tr>";
echo "<tr><td>email:".$row['email']."</td></tr>";
echo "</fieldset>";
		echo '<img src="data:image/'.$type.';base64,'.base64_encode($image).'"/>';
}else{
  echo "$username does not exist";
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

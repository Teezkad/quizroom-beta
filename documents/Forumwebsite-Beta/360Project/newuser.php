<?php
session_start();
$firstname = $_POST["firstname"];
$lastname = $_POST["lastname"];
$username = mysql_real_escape_string($_POST['username']);
$email = $_POST["email"];
$password1 = md5( $_POST["password"]);
$userID;


if($_SERVER["REQUEST_METHOD"] == "POST"){
  if(isset($firstname)&& isset($lastname) &&isset($username)&&isset($email)&&isset($password1)&&isset($_FILES["userImage"])){
    if(!empty($firstname)&&!empty($lastname)&&!empty($username)&&!empty($email)&&!empty($password1)){
//this part handles the image, puts it in the uploads dir

$dir = "uploads/";
$file = $dir . basename($_FILES["userImage"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($file,PATHINFO_EXTENSION);


//makes sure the image is less than 100k
if($_FILES["userImage"]['size'] > 100000){
  echo "The imgae file is too large";
     $uploadOk = 0;
}

//check imageFileType
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "gif" ) {
    echo "Sorry, only JPG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}

if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["userImage"]["tmp_name"], $file)) {
        echo "The file ". basename( $_FILES["userImage"]["name"]). " has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}



$host = "cosc360.ok.ubc.ca";
$database = "db_49180145";
$user = "49180145";
$password = "49180145";

      $connection = mysqli_connect($host, $user, $password, $database);

      $error = mysqli_connect_error();
      if($error == null)
      {



$query = "SELECT username, email FROM users WHERE username = '$username' or email = '$email'";

$result = mysqli_query($connection, $query);


if(mysqli_fetch_assoc($result)){
    echo ' <p>User with this email/username already exists </p><p><a href ="newuser.html" >Return to user entry</a></p>';
  }else{
    mysqli_free_result($result);
    $stmt = $connection->prepare("INSERT INTO users(username, firstName, lastName, email, password) VALUES (?, ?, ?, ?, ?);");
    $stmt->bind_param("sssss" , $username, $firstname, $lastname, $email, $password1);
    $stmt->execute();
    $stmt->close();
  }

$stmt2 =$connection -> prepare("SELECT userID FROM users WHERE username ='$username'");
$stmt2->execute();
$stmt2->bind_result($userID_);
$stmt2->fetch();
$userID = $userID_;
$stmt2->close();

//while ($row = mysql_fetch_assoc($result2)) {
//$userID = $row['firstname'];}

$imagedata = file_get_contents($file);
//store the contents of the files in memory in preparation for upload
$sql = "INSERT INTO userImages (userID, contentType, image) VALUES(?,?,?)";
 // create a new statement to insert the image into the table. Recall
// that the ? is a placeholder to variable data.
$stmt3 = mysqli_stmt_init($connection); //init prepared statement object

mysqli_stmt_prepare($stmt3, $sql); // register the query

$null = NULL;
mysqli_stmt_bind_param($stmt3, "iss", $userID, $imageFileType, $imagedata);
// bind the variable data into the prepared statement. You could replace
// $null with $data here and it also works. You can review the details
// of this function on php.net. The second argument defines the type of
// data being bound followed by the variable list. In the case of the
// blob, you cannot bind it directly so NULL is used as a placeholder.
// Notice that the parametner $imageFileType (which you created previously)
// is also stored in the table. This is important as the file type is
// needed when the file is retrieved from the database.

mysqli_stmt_send_long_data($stmt3, 2, $imagedata);
// This sends the binary data to the third variable location in the
// prepared statement (starting from 0).
$result = mysqli_stmt_execute($stmt3) or die(mysqli_stmt_error($stmt3));
// run the statement

mysqli_stmt_close($stmt3); // and dispose of the statement.

//$stmt3->close();
echo'<br /><p> User created successfully click<a href = "home.php">home</a> to go to home page.</p>';
mysqli_close($connection);
$_SESSION['id']= $userID;
}
  else
  {
    $output = "<p>Unable to connect to database!</p>";
    exit($output);}
}
}else{echo "fail";}
}
 ?>

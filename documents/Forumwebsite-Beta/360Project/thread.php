<?php
session_start();
 ?>

<!DOCTYPE HTML>
<html lang = "en">
<head>
<meta charset="utf-8" >
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel = "stylesheet" href = "css/layout.css" />
</head>
<body>


  <?php
  $host = "cosc360.ok.ubc.ca";
  $database = "db_49180145";
  $user = "49180145";
  $password = "49180145";

  $connection = mysqli_connect($host, $user, $password, $database);

  $error = mysqli_connect_error();
  if($error == null)
  {
    $sql ="SELECT postName, postContent, thread.userID , username, postID FROM thread, users where thread.userID=users.userID";
    $result = mysqli_query($connection,$sql)OR DIE($sql.mysql_error());
    $username;
    $postName;
    $postContent;
    $postID;
    $j=0;

    while($row = mysqli_fetch_assoc($result)){

      $username[$j] = $row['username'];
      $postName[$j] = $row['postName'];
      $postContent[$j] = $row['postContent'];
      $postID[$j] = $row['postID'];
    $j++;
    }
   ?>
  <div>
  <ul>
    <li><a href="thread.php">Home</a></li>
    <li><a href="profile.php">Profile</a></li>
    <li><a href="logout.php">Log Out</a></li>
  </ul>
    </div>

  <div class="wrapper">
    <h1>POSTER</h1>
    <header>PAST THREADS</header>

    <nav>
    <?php

    for ($i =0; $i<count($postName); $i++){
      echo '<div>
      <p><a href ="#'.$postName[$i].'">'.$postName[$i].'</a></p>
      </div>';
}
     ?>
    </nav>

    <section>
<div class = "container">
        <?php


        for ($t =0; $t<count($postName); $t++){

          $name = $postName[$t];
          $id = $postID[$t];
          //this is to fetch the comments and put them in their respective posts
          $sql2 = "SELECT comContent, username, cTime, comment.userID, comment.postID FROM users, comment WHERE users.userID = comment.userID
          and postID = '".$postID[$t]."'";
          $result2 = mysqli_query($connection,$sql2)OR DIE($sql2.mysql_error());
          $comment;
          $c =0;

          echo '<div class = "content"><u><h2 id="'.$name.'">'.$postName[$t].'</h2></u>
          <p>Created BY: '.$username[$t].'</p>
          <p>'.$postContent[$t].'</p><hr/>';

          if (mysqli_num_rows($result2) > 0) {
          while($row2 = mysqli_fetch_assoc($result2)){
            echo '<div>';
            echo '<p class = "comment">
            '.$row2['username'].' Commented: <i>on <time> "'.$row2['cTime'].'"</time></i>
            <br/>'.$row2['comContent'].'</p>
            </div><hr/>';


          }
}else {
  echo 'cmment could not be loaded';
}

          if(!isset($_SESSION['id'])){
            echo '<p>
            you need to be logged in to comment. <a href = '."login.php".'>login</a>
            </p></div>';
          }else{

          echo '<form method = "post" action = "processComment.php?postID='.($id).'">
          <input type = "text" class = "input" placeholder = "Enter a Comment" name = "postComment"/>
          <input type = "Submit" value = "Comment"/>
          </form></div>';

      }
    }

         ?>
</div>
    </section>

    <footer>This is the Footer</footer>
  </div>

</body>

</html>
<?php
  mysqli_close($connection);
}else{
  $output = "<p>Unable to connect to database!</p>";
  exit($output);
} ?>

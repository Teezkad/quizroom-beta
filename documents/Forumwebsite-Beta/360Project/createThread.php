<?php
session_start();
if(!isset($_SESSION['id'])){
  echo "you must be logged in to view this page";
  header('Location:login.php');
}
 ?>

<!DOCTYPE HTML>
<html lang = "en">
<head>
<meta charset="utf-8" >
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel = "stylesheet" href = "css/layout.css" />
</head>
<body>
  <style>
ul  {
     list-style-type: none;
     background-color: black;
     margin: 0;
     padding: 0;
     overflow: hidden;

 }
 li a {
     display: block;
     text-align: center;
     padding: 11px 13px;
       color: white;
       text-decoration: none;
 }

 li {
     float: left;
 }

 li a:hover {
     background-color: blue;
 }

 textarea{
   overflow: scroll;
 }
  </style>
  <div>
  <ul>
    <li><a href="thread.php">Threads</a></li>
    <li><a href="profile.php">Profile</a></li>
    <li><a href="logout.php">Log Out</a></li>
  </ul>
    </div>

  <div class="wrapper">
    <h1>POSTER</h1>
    <form method = "post" action = "processThread.php">
    <header><input placeholder ="Enter thread title" name = "postName" id = "postName" /></header>
    <nav>
      Navigation of topics
    </nav>
    <section>Body

          <div id ="area">
            <textarea placeholder="Remember, be nice!" rows="3" cols="60" name = "postContent" id="postContent"></textarea>
            <button type = "submit" class = "btn">Submit</button>
          </div>
        </form>
    </section>
    <footer>This is the Footer</footer>
  </div>

</body>

</html>

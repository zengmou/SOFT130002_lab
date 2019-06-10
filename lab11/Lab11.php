<?php
//Fill this place

//****** Hint ******
//connect database and fetch data here
	$dbms='mysql';     //数据库类型
	$host='localhost'; //数据库主机名
	$dbName='travel';    //使用的数据库
	$user='root';      //数据库连接用户名
	$pass='sasuke62587719';          //对应的密码
	try {
	    $conn = new PDO("mysql:host=$host;dbname=$dbName", $user, $pass);
	    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	}
	catch(PDOException $e) {
	    echo "Error: " . $e->getMessage();
	}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Lab11</title>

      <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>

    <link rel="stylesheet" href="css/bootstrap.min.css" />
    
    

    <link rel="stylesheet" href="css/captions.css" />
    <link rel="stylesheet" href="css/bootstrap-theme.css" />    

</head>

<body>
    <?php include 'header.inc.php'; ?>
    


    <!-- Page Content -->
    <main class="container">
        <div class="panel panel-default">
          <div class="panel-heading">Filters</div>
          <div class="panel-body">
            <form action="Lab11.php" method="get" class="form-horizontal">
              <div class="form-inline">
              <select name="continent" class="form-control">
                <option value="0">Select Continent</option>
                <?php
                //Fill this place

                //****** Hint ******
                //display the list of continents
								$stmt = $conn->prepare("SELECT * FROM continents;"); 
								$stmt->execute();
								// echo "<script>console.log(".$stmt.")</script>";
								// 设置结果集为关联数组
								

                while($row = $stmt->fetch()) {
                  echo '<option value=' . $row['ContinentCode'] . '>' . $row['ContinentName'] . '</option>';
                }

                ?>
              </select>     
              
              <select name="country" class="form-control">
                <option value="0">Select Country</option>
                <?php 
                //Fill this place

                //****** Hint ******
                /* display list of countries */ 
                $stmt2 = $conn->prepare("SELECT * FROM countries;"); 
                $stmt2->execute();
                while($row = $stmt2->fetch()) {
                  echo '<option value=' . $row['CountryCode'] . '>' . $row['CountryName'] . '</option>';
                }
                ?>
              </select>    
              <input type="text"  placeholder="Search title" class="form-control" name=title>
              <button type="submit" class="btn btn-primary">Filter</button>
              </div>
            </form>

          </div>
        </div>     
                                    

		<ul class="caption-style-2">
            <?php 
            //Fill this place

            //****** Hint ******
            /* use while loop to display images that meet requirements ... sample below ... replace ???? with field data
            <li>
              <a href="detail.php?id=????" class="img-responsive">
                <img src="images/square-medium/????" alt="????">
                <div class="caption">
                  <div class="blur"></div>
                  <div class="caption-text">
                    <p>????</p>
                  </div>
                </div>
              </a>
            </li>        
            */ 
            $countryCode = "CountryCodeISO='".$_GET["country"]."'";
						$continentCode = "ContinentCode='".$_GET["continent"]."'";
						$input = "Title='".$_GET["title"]."'";
						$query = "SELECT * FROM imagedetails";
						if($_GET["country"] != '0'){
							$query = $query." where ".$countryCode;
						}else{
							$query = $query." where UID<1000000";
						}
						if($_GET["continent"] != "0"){
							$query = $query." AND ".$continentCode;
						}
						if($_GET["title"] != ""){
							$query = $query." AND ".$input;
						}
						// if($_GET["country"] === '0' && $_GET["continent"] === "0" && $_GET["title"] === ""){
						// 	$query = "SELECT * FROM imagedetails";
						// }
						// echo "<script>console.log(".$query.")</script>";
						$stmt3 = $conn->prepare($query); 
						$stmt3->execute();
								while($row = $stmt3->fetch()) {
									  echo '            <li>
              <a href="detail.php?id='.$row["ImageID"].'" class="img-responsive">
                <img src="images/square-medium/'.$row["Path"].'" alt="'.$row["Title"].'" style="width:225px;height:225px">
                <div class="caption">
                  <div class="blur"></div>
                  <div class="caption-text">
                    <p>'.$row["Title"].'</p>
                  </div>
                </div>
              </a>
            </li>        ';
								}
            ?>
       </ul>       

      
    </main>
    
    <footer>
        <div class="container-fluid">
                    <div class="row final">
                <p>Copyright &copy; 2017 Creative Commons ShareAlike</p>
                <p><a href="#">Home</a> / <a href="#">About</a> / <a href="#">Contact</a> / <a href="#">Browse</a></p>
            </div>            
        </div>
        

    </footer>


        <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
</body>

</html>
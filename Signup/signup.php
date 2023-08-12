<?php
    // $host = "localhost";
    // $user = "root";
    // $pass = "";
    // $dbname = "迎新報名表";

    // $conn = new mysqli($host,$user,$pass,$dbname,3306 );

    class SQLiteDB extends SQLite3{
        function __construct(){
            $this->open('register_files.db');
        }
    }

    $db = new SQLiteDB();

    if(!$db){
        echo $db->lastErrorMsg();
    } else {
        echo "Yes, Opened database successfully<br/>\n";
    }

    if(isset($_POST['submit']) && (!empty($_POST['submit']))){
        $username = $_POST['name'];
        $id = $_POST['id'];
        $sex = $_POST['sex'];
        $food = $_POST['food'];
        $idcard = $_POST['idcard'];
        $birth = $_POST['birth'];
        $birthdate = new DateTime($birth);
        $year = $birthdate->format('Y');
        $month = $birthdate->format('m');
        $day = $birthdate->format('d');
        $roc_year = $year - 1911;
        $roc_birth = $roc_year . "/" . $month . "/" . $day;
        $phone = $_POST['phone'];
        $size = $_POST['size'];
        $emgname = $_POST['emgname'];
        $emgphone = $_POST['emgphone'];
        $relation = $_POST['relation'];

        $sql = "INSERT INTO `applicants`(`name`, `id`, `sex`, `food`, `idcard`, `birth`, `phone`, `size`, `emgname`, `emgphone`, `relation`) 
        values ('$username','$id','$sex','$food','$idcard','$roc_birth','$phone','$size','$emgname','$emgphone','$relation')";

        //$result = mysqli_query($conn,$sql) or die("something went wrong");

        $ret = $db->exec($sql);

        if(!$ret){
            echo $db->lastErrorMsg();
        } else {
            echo "Yes, Some Records has Inserted successfully<br/>\n";
        }
        $db->close();
?>
<?php	
    include('./includes/dbconnect.inc.php');
    session_start();
    
    if ($_POST["text"] && $_POST["user-id"] && isset($_POST["fpfti-id"])) { //&& $_POST['g-recaptcha-response']) {   
        try{
            $text = htmlspecialchars($_POST["text"]);
            $user_id = $_POST['user-id'];
            $fpfti_id = $_POST['fpfti-id'];

            $stmt = $dbh->prepare('INSERT INTO comments SET text = :text, user_id = :user_id, fpfti_id = :fpfti_id');
            $stmt->execute([':text' => $text, ':userid' => $userid, ':fpftiid' => $fpftiid]);
            header("Location: https://s113.labagh.pl/index.html?page=profile&mess=commentadded");
            exit();
        } catch(PDOException $e) {
            header("Location: https://s113.labagh.pl/index.html?page=profile&mess=error");
            exit();
        }
    }
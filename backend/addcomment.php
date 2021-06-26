<?php	
    include('./includes/dbconnect.inc.php');
    
    if ($_POST["text"] && $_POST["userid"] && isset($_POST["fpftiid"])) { //&& $_POST['g-recaptcha-response']) {   
        $text = htmlspecialchars($_POST["text"]);
        $userid = $_POST['userid'];
        $fpftiid = $_POST['fpftiid'];
        try {
            $stmt = $dbh->prepare('INSERT INTO comments (id, text, userid, fpftiid, created) 
                                    VALUES (null, :text, :userid, :fpftiid, NOW())');
            $stmt->execute([':text' => $text, ':userid' => $userid, ':fpftiid' => $fpftiid]);
            print '<span style="color: green;">Congratulations, you have successfully posted a comment!</span>';
        } catch (PDOException $e) {
            print '<span style="color: red;">Something\'s wrong!</span>';
        }    
    } else {
        print '<p style="font-weight: bold; color: red;">Wrong data!</p>';
    }	
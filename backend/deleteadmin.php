<?php
    if (isset($_POST['admin-remove'])) { // NAZWA DO USTALENIA TODO
        try {
            include("./includes/dbconnect.inc.php");
            session_start();

            //getting current user info
            $stmt1 = $dbh->prepare("SELECT * FROM users WHERE id = :id");
            $stmt1->execute([':id' => $_SESSION['id']]);

            while($user = $stmt1->fetch(PDO::FETCH_ASSOC)){
                if( $user['is_admin'] === 1){
                    //deleting fpfti's tags
                    $delete_stmt = $dbh->prepare("UPDATE users SET is_admin = 0, WHERE id = :user_id");
                    $delete_stmt->execute([':user_id' => $_POST['user-id']]);
                    header("Location: https://s113.labagh.pl/index.html?page=profile&mess=admindeleted");
                    exit();
                }
            }
        } catch(PDOException $e) {
            header("Location: https://s113.labagh.pl/index.html?page=profile&mess=error");
            exit();
        }
    }
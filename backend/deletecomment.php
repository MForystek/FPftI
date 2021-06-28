<?php
    if (isset($_POST['comment-remove'])) {
        try{
            include("./includes/dbconnect.inc.php");
            session_start();

            //getting OP id
            $stmt2 = $dbh->prepare("SELECT user_id FROM comments WHERE id = :comment_id");
            $stmt2->execute([':comment_id' => $_POST['comment-id']]);
            $poster_id = $stmt2->fetch(PDO::FETCH_ASSOC);

            //getting current user info
            $stmt1 = $dbh->prepare("SELECT * FROM users WHERE id = :id");
            $stmt1->execute([':id' => $_SESSION['id']]);

            while($user = $stmt1->fetch(PDO::FETCH_ASSOC)){
                if($user['id'] === $poster_id || $is_admin === 1){
                    
                        $delete_stmt = $dbh->prepare("DELETE FROM comments WHERE id = :id");
                        $delete_stmt->execute([':id' => $_POST['comment-id']]);
                        header("Location: https://s113.labagh.pl/index.html?page=profile&mess=commentdeleted");
                        exit();
                }
            }
        } catch(PDOException $e) {
            header("Location: https://s113.labagh.pl/index.html?page=profile&mess=error");
            exit();
        }
    }
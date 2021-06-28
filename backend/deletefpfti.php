<?php

    //TODO test if user can remove his fpfti
    //TODO remove fpfti from ftp server, for now script only removes fpfti related data from database not from ftp server

    if (isset($_POST['fpfti-remove'])) {
        try {
            include("./includes/dbconnect.inc.php");

            session_start();

            //getting OP id
            $stmt2 = $dbh->prepare('SELECT user_id FROM fpfti WHERE id = :fpfti_id');
            $stmt2->execute([':fpfti_id' => $_POST['fpfti-id']]);
            $op_id = $stmt2->fetch(PDO::FETCH_ASSOC);
            
            //getting current user info
            $stmt1 = $dbh->prepare('SELECT id, is_admin FROM users WHERE id = :id');
            $stmt1->execute([':id' => $_SESSION['id']]);
            $user = $stmt1->fetch(PDO::FETCH_ASSOC);

            if ($_SESSION['is_admin'] != true && $op_id['user_id'] !== $user['id']) {
                header("Location: https://s113.labagh.pl/index.html?page=profile&mess=accessdeny");
                exit();
            }
            //deleting fpfti's tags
            $delete_stmt = $dbh->prepare('DELETE FROM tags WHERE fpfti_id = :fpfti_id');
            $delete_stmt->execute([':fpfti_id' => $_POST['fpfti-id']]);
            //deleting fpfti's likes
            $delete_stmt1 = $dbh->prepare('DELETE FROM likes WHERE fpfti_id = :id');
            $delete_stmt1->execute([':id' => $_POST['fpfti-id']]);                
            //deleting fpfti's comments
            $delete_stmt2 = $dbh->prepare('DELETE FROM comments WHERE fpfti_id = :id');
            $delete_stmt2->execute([':id' => $_POST['fpfti-id']]);
            //deleting fpfti
            $delete_stmt3 = $dbh->prepare('DELETE FROM fpfti WHERE id = :id');
            $delete_stmt3->execute([':id' => $_POST['fpfti-id']]);

            if ($op_id['user_id'] !== $user['id'] && $_SESSION['is_admin'] == true) {
                header("Location: https://s113.labagh.pl/index.html?page=admin&mess=fpftideleted");
                exit();
            }
            header("Location: https://s113.labagh.pl/index.html?page=profile&mess=fpftideleted");
            exit();
        } catch (PDOException $e) {
            header("Location: https://s113.labagh.pl/index.html?page=profile&mess=error");
            exit();
        }
    }
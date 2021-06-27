<?php
    if (isset($_POST['fpfti-remove'])) { // NAZWA DO USTALENIA TODO
        //getting OP id
        $stmt2 = $dbh->prepare("SELECT user_id FROM fpfti WHERE id = :fpfti_id");
        $stmt2->execute([':id' => $_POST['fpfti_id']]);
        $poster_id = $stmt2->fetch(PDO::FETCH_ASSOC);

        //getting current user info
        $stmt1 = $dbh->prepare("SELECT * FROM users WHERE id = :id");
        $stmt1->execute([':id' => $_SESSION['id']]);

        while($user = $stmt1->fetch(PDO::FETCH_ASSOC)){
            extract($user);
            if($id === $poster_id || $is_admin === 1){
                //deleting fpfti's tags
                $delete_stmt = $dbh->prepare("DELETE * FROM tags WHERE fpfti_id = :id");
                $delete_stmt->execute([':id' => $_POST['fpfti_id']]);
                //deleting fpfti's likes
                $delete_stmt = $dbh->prepare("DELETE * FROM likes WHERE fpfti_id = :id");
                $delete_stmt->execute([':id' => $_POST['fpfti_id']]);                
                //deleting fpfti's comments
                $delete_stmt = $dbh->prepare("DELETE * FROM comments WHERE fpfti_id = :id");
                $delete_stmt->execute([':id' => $_POST['fpfti_id']]);
                //deleting fpfti
                $delete_stmt = $dbh->prepare("DELETE * FROM fpfti WHERE id = :id");
                $delete_stmt->execute([':id' => $_POST['fpfti_id']]);
                //TUTAJ JAKIŚ HEADER ŻE POMYŚLNIE USUNIĘTO TODO
            } else {
                //TU NIE WIEM CZY TO W OGÓLE JEST POTRZEBNE TODO
            }
        }
    }
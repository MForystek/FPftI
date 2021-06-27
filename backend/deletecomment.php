<?php
    if (isset($_POST['comment-remove'])) { // NAZWA DO USTALENIA TODO
        //getting OP id
        $stmt2 = $dbh->prepare("SELECT user_id FROM comments WHERE id = :comment_id");
        $stmt2->execute([':comment_id' => $_POST['comment-id']]);
        $poster_id = $stmt2->fetch(PDO::FETCH_ASSOC);

        //getting current user info
        $stmt1 = $dbh->prepare("SELECT * FROM users WHERE id = :id");
        $stmt1->execute([':id' => $_SESSION['id']]);

        while($user = $stmt1->fetch(PDO::FETCH_ASSOC)){
            extract($user);
            if($id === $poster_id || $is_admin === 1){
                $delete_stmt = $dbh->prepare("DELETE FROM comments WHERE id = :id");
                $delete_stmt->execute([':id' => $_POST['comment-id']]);
                //TUTAJ JAKIŚ HEADER ŻE POMYŚLNIE USUNIĘTO TODO
            } else {
                //TU NIE WIEM CZY TO W OGÓLE JEST POTRZEBNE TODO
            }
        }
    }
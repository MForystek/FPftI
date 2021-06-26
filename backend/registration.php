<?php	
    if (isset($_POST["regbutton"])) {
        include('./includes/dbconnect.inc.php');
        if (isset($_POST["reglogin"]) && isset($_POST["regpassword"]) && isset($_POST["regrepassword"])) { //&& $_POST['g-recaptcha-response']) {
            if (strlen($_POST["reglogin"]) > 0 && strlen($_POST["regpassword"]) > 0) {
                if ($_POST['regpassword'] === $_POST['regrepassword']) {
                    $register_login = htmlspecialchars($_POST['reglogin']);
                    $register_password = password_hash(htmlspecialchars($_POST['regpassword']), PASSWORD_DEFAULT);
                    try {
                        $stmt = $dbh->prepare('INSERT INTO users (login, password) VALUES (:login, :password)');
                        $stmt->execute([':login' => $register_login, ':password' => $register_password]);
                        header("Location: https://s113.labagh.pl/index.html?page=main&mess=registrationsuccess");
                    } catch (PDOException $e) {
                        header("Location: https://s113.labagh.pl/index.html?page=main&mess=error");
                    }    
                } else {
                    header("Location: https://s113.labagh.pl/index.html?page=main&mess=passwordthesame");
                }
            } else {
                header("Location: https://s113.labagh.pl/index.html?page=main&mess=tooshort");
            }
        } else {
            header("Location: https://s113.labagh.pl/index.html?page=main&mess=formnotfilled");
        }	
    }
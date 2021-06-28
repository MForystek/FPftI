<?php	
    if (isset($_POST["reg-button"])) {
        include('./includes/dbconnect.inc.php');
        if (isset($_POST["reg-login"]) && isset($_POST["reg-password"]) && isset($_POST["reg-repassword"])) { //&& $_POST['g-recaptcha-response']) {
            if (strlen($_POST["reg-login"]) > 0 && strlen($_POST["reg-password"]) > 0) {
                if ($_POST['reg-password'] === $_POST['reg-repassword']) {
                    $register_login = htmlspecialchars($_POST['reg-login']);
                    $register_password = password_hash(htmlspecialchars($_POST['reg-password']), PASSWORD_DEFAULT);
                    try {
                        $stmt = $dbh->prepare('INSERT INTO users (login, password) VALUES (:login, :password)');
                        $stmt->execute([':login' => $register_login, ':password' => $register_password]);
                        header("Location: https://s113.labagh.pl/index.html?page=main&mess=registrationsuccess");
                        exit();
                    } catch (PDOException $e) {
                        header("Location: https://s113.labagh.pl/index.html?page=main&mess=error");
                        exit();
                    }    
                } else {
                    header("Location: https://s113.labagh.pl/index.html?page=main&mess=passwordthesame");
                    exit();
                }
            } else {
                header("Location: https://s113.labagh.pl/index.html?page=main&mess=tooshort");
                exit();
            }
        } else {
            header("Location: https://s113.labagh.pl/index.html?page=main&mess=formnotfilled");
            exit();
        }	
    }
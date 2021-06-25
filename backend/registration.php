<?php	
    include('dbconnect.php');
    if (isset($_POST["login"]) && isset($_POST["password"]) && isset($_POST["repassword"])) { //&& $_POST['g-recaptcha-response']) {
        if ($_POST['password'] === $_POST['repassword']) {
            $register_login = htmlspecialchars($_POST['login']);
            $register_password = password_hash(htmlspecialchars($_POST['password']), PASSWORD_DEFAULT);
            try {
                $stmt = $dbh->prepare('INSERT INTO users (id, login, password, created, name, isadmin) 
                                        VALUES (null, :login, :password, NOW(), null, 0)');
                $stmt->execute([':login' => $register_login, ':password' => $register_password]);
                print '<span style="color: green;">Congratulations, you have an account now!</span>';
            } catch (PDOException $e) {
                print '<span style="color: red;">This login is already used!</span>';
            }    
        } else {
            print '<p style="font-weight: bold; color: red;">Passwords must be the same!</p>';
        }
    } else {
        print '<p style="font-weight: bold; color: red;">Wrong data!</p>';
    }	
?>
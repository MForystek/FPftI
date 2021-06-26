<?php	
    include('./includes/dbconnect.inc.php');
    if ($_POST["login"] && $_POST["password"]) { //&& $_POST['g-recaptcha-response']) {
        try{
            $login = htmlspecialchars($_POST["login"]);
            $password = htmlspecialchars($_POST["password"]);
            $stmt = $dbh->prepare("SELECT * FROM users WHERE login = :login");
            $stmt->execute([':login' => $login]);
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
            if($user && $user['password'] === password_hash($password, PASSWORD_DEFAULT)){
                print '<span style="color: red;">Hasło pasuje, tu trzeba jakieś logowanie zrobić!</span>';
            }else{
                print '<span style="color: red;">Niepoprawne hasło, nie wiem co z tym faktem chcemy robić </span>';
            }
        } catch (PDOException $e) {
            print '<span style="color: red;">Nie wiem co zrobiliście że zepsuliście tego if\'a...</span>';
        }  
    } else {
        print '<p style="font-weight: bold; color: red;">Wrong data! Nie wpisane hasło lub login.</p>';
    }

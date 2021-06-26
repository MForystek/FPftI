<?php
    if (isset($_POST['fpfti-submit'])) {
        if (isset($_POST["title"])) {
            if(isset($_FILES["fpfti-image"])) { //&& $_POST['g-recaptcha-response']) {
                $ftpFile = $_FILES['fpfti-image'];
                $fileName = $ftpFile['name'];
                $fileTmpName = $ftpFile['tmp_name'];
                $fileSize = $ftpFile['size'];
                $fileError = $ftpFile['error'];
                $fileType = $ftpFile['type'];

                $fileExt = explode('.', $fileName);
                $fileActualExt = strtolower(end($fileExt));

                $allowed = array('jpg', 'jpeg', 'png', 'webm', 'gif');

                if (in_array($fileActualExt, $allowed)) {
                    if ($fileError === 0) {
                        if ($fileSize < 10_485_760) {
                            include('dbconnect.php');
                
                            $fpfti_title = htmlspecialchars($_POST['title']);
                            $fpfti_tags = htmlspecialchars($_POST['tags']);
                            $fpfti_tags_array = explode(' ', $fpfti_tags);
                            $fileNameNew = uniqid('', true).".".$fileActualExt;
                            $fileDestination = '../resources/fpfti/'.$fileNameNew;
                            $fpfti_link = 'https://s113.labagh.pl/resources/fpfti/' . $fileNameNew;
                            try {
                                $stmt = $dbh->prepare('INSERT INTO fpfti (title, link) VALUES (:title, :link)');
                                $stmt->execute([':title' => $fpfti_title, ':link' => $fpfti_link]);
                                
                                move_uploaded_file($fileTmpName, $fileDestination);

                                header("Location: https://s113.labagh.pl/index.html?page=profile&mess=uploadsuccess");
                            } catch (PDOException $e) {
                                header("Location: https://s113.labagh.pl/index.html?page=profile&mess=error");
                            }
                        } else {
                            header("Location: https://s113.labagh.pl/index.html?page=profile&mess=toobig");
                        }
                    } else {
                        header("Location: https://s113.labagh.pl/index.html?page=profile&mess=uploaderror");
                    }
                } else {
                    header("Location: https://s113.labagh.pl/index.html?page=profile&mess=wrongext");
                }
            } else {
                header("Location: https://s113.labagh.pl/index.html?page=profile&mess=nofpfti");
            }
        } else {
            header("Location: https://s113.labagh.pl/index.html?page=profile&mess=notitle");
        }
    }
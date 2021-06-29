<?php
    //Headers
    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../../config/Database.php';
    include_once '../../models/Fpfti.php';

    //Instantiate DB & connect
    $database = new Database();
    $db = $database->connect();

    //Instantiate fpfti object
    $fpfti = new Fpfti($db);

    try {
    $page = isset($_GET['page']) ? $_GET['page'] : die();
    $fpfti_tag = htmlspecialchars($_POST['query']);

    

    if (mb_strlen($fpfti_tag) !== 0) {
            if (mb_strlen($fpfti_tag) > 64) {
                echo json_encode(
                    array('message' => 'hashtag too long')
                );
            }
            if ($fpfti_tag[0] !== '#' || mb_strlen($fpfti_tag) <= 1) {
                echo json_encode(
                    array('message' => 'hash without hashtag')
                );
            }
            $result = $fpfti->read_search($page, $fpfti_tag);

            //get row count
            $num = $result->rowCount();

            //check if any fpfti
            if($num > 0) {
                //Post array
                $fpfti_arr = array();
                $fpfti_arr['data'] = array();

                while($row = $result->fetch(PDO::FETCH_ASSOC)) {
                    extract($row);
                    $fpfti_item = array(
                        'id' => $id,
                        'title' => $title,
                        'user_id' => $user_id,
                        'link' => $link,
                        'accepted' => $accepted,
                        'likes' => $likes,
                        'created' => $created
                    );

                    //Push to "data"
                    array_push($fpfti_arr['data'], $fpfti_item);
                }
            }

        //Turn to JSON & output
        echo json_encode($fpfti_arr);
    } else {
        echo json_encode(
            array('message' => 'No tags found')
        );
    }
}catch (PDOException $e) {
    echo json_encode(
        array('error' => $e)
    );
}
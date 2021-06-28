<?php
    class Fpfti {
        //DB stuff
        private $conn;
        private $table = 'fpfti';

        //Constructor with DB
        public function __construct($db) {
            $this->conn = $db;
        }

        public function read_waiting($number){
            $first = ($number - 1)*5;
            $query = 'SELECT * FROM ' . $this->table . ' f WHERE accepted = 0 ORDER BY f.created DESC LIMIT ' . $first . ', 5';
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt;
        }

        public function read_main($number){
            $first = ($number - 1)*5;
            $query = 'SELECT * FROM ' . $this->table . ' f WHERE accepted = 1 ORDER BY f.created DESC LIMIT ' . $first . ', 5';
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt;
        }

        public function read_top10(){
            $query = 'SELECT * FROM ' . $this->table . ' f ORDER BY f.likes DESC LIMIT 10';
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt;
        }

        public function read_profile($user_id){
            $query = 'SELECT * FROM users u WHERE id = ' . $user_id . '';
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt;
        }

        public function read_user_fpfti($user_id){
            $query = 'SELECT * FROM ' . $this->table . ' f WHERE user_id = ' . $user_id . '';
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt;
        }

        public function read_user_likes($user_id){
            // $query = 'SELECT fpfti_id FROM likes l WHERE user_id = ' . $user_id . '';
            // $stmt = $this->conn->prepare($query);

            // $fpfti_arr = array();
            // $fpfti_arr['data'] = array();
            // while($fpfti_id = $stmt->execute()){
            //     $query = 'SELECT * FROM ' . $this->table . ' f WHERE fpfti_id = ' . $fpfti_id . '';
            //     $stmt2 = $this->conn->prepare($query);
            //     array_push($fpfti_arr['data'], $stmt2->execute());
            // }


            // $query = 'SELECT * FROM ' . $this->table . ' f WHERE user_id = ' . $user_id . '';
            // $stmt = $this->conn->prepare($query);
            // $stmt->execute();
            // return $stmt;

            $query = 'SELECT f.id, f.title, f.user_id, f.link, f.accepted, f.likes, f.created
                FROM fpfti as f
                JOIN likes as l
                ON f.id = l.fpfti_id
                WHERE l.user_id = :user_id';
            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(":user_id", $user_id, PDO::PARAM_INT);
            $stmt->execute();
            return $stmt;
        }

        public function read_fpfti_comments($fpfti_id){
            $query = 'SELECT c.*, u.login FROM comments c JOIN users u ON c.user_id = u.id WHERE fpfti_id = ' . $fpfti_id . ' ORDER BY c.created DESC';
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt;
        }
    }
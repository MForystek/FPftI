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
    }
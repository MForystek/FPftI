<?php
    class Fpfti {
        //DB stuff
        private $conn;
        private $table = 'fpfti';

        //fpfti properties
        public $id;
        public $title;
        public $user_id;
        public $image;
        public $accepted;
        public $likes;
        public $created;

        //Constructor with DB
        public function __construct($db) {
            $this->conn = $db;
        }

        //Get Fpfti
        public function read() {
            //Create query
            $query = 'SELECT * FROM ' . $this->table . ' f ORDER BY f.created DESC';
            $stmt = $this->conn->prepare($query);
            $stmt->execute();
            return $stmt;
        }
    }
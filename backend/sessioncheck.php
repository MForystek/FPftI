<?php
    session_start();
    if (isset($_SESSION['id']) && isset($_SESSION['login'])) {
        echo 1;
    } else {
        header("Location: https://s113.labagh.pl/index.html");
    }
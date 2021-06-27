<?php
    if (isset($_POST['logoutbutton'])) {
        session_start();
        session_destroy();
    }
    header("Location: https://s113.labagh.pl");
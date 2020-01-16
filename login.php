<?php
    //session_start();
    //if(!isset($_SESSION['user'])){
        if(isset($_POST['username'])&& $_POST['username']!= ""){
            if(isset($_POST['password'])&& $_POST['password']!= ""){
                if($_POST['username'] == "reksi" && $_POST['password'] == "reksi"){
                    //$_SESSION['user'] == "reksi";
                }    
            }
        }
    //}
?>
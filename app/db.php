<?php

namespace App;

use PDO;

class Database
{
    public $db;

    public function __construct()
    {
        try {
            $pdo = new PDO('mysql:localhost', 'root', '');
            $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
        } catch (\PDOException $e) {
            die($e->getMessage());
        }
    }
}

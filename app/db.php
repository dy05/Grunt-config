<?php
namespace App;
class Database {
    public $db;
    public function __construct()
    {
        try {
            $pdo = new \PDO('mysql:localhost', 'root', 'root');
            $pdo->setAttribute(\PDO::ERRMODE_EXCEPTION);
        } catch (\PDOException $e) {
            die($e->getMessage());
        }
    }
}
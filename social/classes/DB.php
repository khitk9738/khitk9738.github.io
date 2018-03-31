<?php
class DB {
        private static function connect() {
                $pdo = new PDO('mysql:host=172.31.100.41;dbname=db20158010;charset=utf8', '20158010', '20158010');
                $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                return $pdo;
        }
         public static function query($query, $params = array()) {
                $statement = self::connect()->prepare($query);
                $statement->execute($params);
                if (explode(' ', $query)[0] == 'SELECT') {
                $data = $statement->fetchAll();
                return $data;
                }
        }
}
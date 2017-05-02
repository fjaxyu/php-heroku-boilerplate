<?php

return [
  'database' => [
    'name' => 'Products',
    'username' => 'root',
    'password' => 'root',
    'host' => '127.0.0.1:8889',
    'options' => [
      PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
      PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
      PDO::ATTR_EMULATE_PREPARES   => false 
    ]
  ]
];
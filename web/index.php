<?php  

include 'includes/head.php';
require 'core/Database.php';

$app = require 'config.php';
$app['db'] = Database::connection($app['database']);

include 'includes/footer.php';
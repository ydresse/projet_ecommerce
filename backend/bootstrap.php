<?php 
require_once "vendor/autoload.php";

use Doctrine\ORM\Tools\Setup;
use Doctrine\ORM\EntityManager;

date_default_timezone_set('America/Lima');
$dotenv = Dotenv\Dotenv::createImmutable(__DIR__);
$dotenv->load();

$isDevMode = true;
$config = Setup::createYAMLMetadataConfiguration(array(__DIR__ . "/config"), $isDevMode); 

$conn = array( 
    'driver' => 'pdo_pgsql', 
    'host' => 'ec2-54-247-89-181.eu-west-1.compute.amazonaws.com',
    'user' => 'azfbhcvtivxsnn', 
    'password' => '6f143e404fdede54a33b297b405387fdc061fdb42be5ce1aedad0fb600a8e0b5', 
    'dbname' => 'dj63vc8c0b0f3', 
    'port' => '5432' ,
); 


$entityManager = EntityManager::create($conn, $config);
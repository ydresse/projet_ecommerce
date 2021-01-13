<?php

use Slim\Factory\AppFactory;
use Dotenv\Dotenv;
use Doctrine\ORM\EntityManager;

require __DIR__ . '/../vendor/autoload.php';
require_once __DIR__ . '/../bootstrap.php';

// Load env variables
$dotenv = Dotenv::createImmutable(__DIR__ . "/..");
$dotenv->load();

// Create Entity Manager
$container = new DI\Container();
$container->set(EntityManager::class, function($container) use ($entityManager) {
    return $entityManager;
});
AppFactory::setContainer($container);


// Create app
$app = AppFactory::create();

// // Load routes
$routes = require __DIR__ . '/../app/routes.php';
$routes($app);

$app->run();

?>
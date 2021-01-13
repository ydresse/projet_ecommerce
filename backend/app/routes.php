<?php

use Slim\App;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Slim\Interfaces\RouteCollectorProxyInterface as Group;

use App\Controllers\UserController;
use App\Middlewares\CorsMiddleware;

return function(App $app){

    $app->options('/{routes:.*}', function (Request $request, Response $response) {
        return $response;
    });

    $app->add(CorsMiddleware::class);

    $app->get('/', "App\Controllers\HomeController:home");

    $app->group('/users', function(Group $group){
        $group->post('/login', UserController::class . ":login");
        $group->post('/register', UserController::class . ":register");
    });

    $app->group('/products', function(Group $group){
        $group->get("/all", "App\Controllers\ProductController:getAll");
        $group->get("/{id}", "App\Controllers\ProductController:getOne");
    });

};

?>
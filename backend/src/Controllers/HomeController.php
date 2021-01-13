<?php

namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class HomeController
{

    public function home(Request $request, Response $response, array $args): Response
    {
        $response->withStatus(200);
        $response->getBody()->write("API de Yassine fonctionelle");

        return $response;
    }

}

<?php
namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Firebase\JWT\JWT;
use Doctrine\ORM\EntityManager;

class ProductController {

    private $em;

    public function __construct(EntityManager $em)
    {
        $this->em = $em;
    }

    public function getAll(Request $request, Response $response, $args) {

        $productRepo = $this->em->getRepository('Product');
        $products = $productRepo->findAll();

        if($products == null){
            $response->getBody()->write(json_encode(['success' => false]));
            return $response->withStatus(401);
        }
        
        $data = [];
        foreach($products as $product) {
            array_push($data, [
                'idProduct' => $product->getIdProduct(),
                'name' => $product->getName(),
                'price' => $product->getPrice(),
                'image' => $product->getImage(),
                'description' => $product->getDescription(),
                'release_date' => $product->getReleaseDate(),
                'stock' => $product->getStock(),
                'category' => $product->getCategory(),
                'character' => $product->getCharacter()
            ]);
        }

        $response->getBody()->write(json_encode($data, true));
        return $response->withStatus(200);
    }



    public function getOne(Request $request, Response $response, $args) {
        require_once  __DIR__ . './../../bootstrap.php';
        $id = intval($args['id']);
        $product = $entityManager->getRepository('Product')->findOneByIdProduct($id);
        if($product) {
            $data = [
                'idProduct' => $product->getIdProduct(),
                'name' => $product->getName(),
                'price' => $product->getPrice(),
                'image' => $product->getImage(),
                'description' => $product->getDescription(),
                'release_date' => $product->getReleaseDate(),
                'stock' => $product->getStock(),
                'category' => $product->getCategory(),
                'character' => $product->getCharacter()
            ];
            $response->getBody()->write(json_encode([
                "success" => true,
                'data' => $data
            ]));
        }
        else {
            $response->getBody()->write(json_encode([
                "success" => false,
            ]));
            $response = $response->withStatus(401);
        }
        return $response
        ->withHeader("Content-Type", "application/json")
        ->withHeader('Access-Control-Expose-Headers', '*');
    }

}
<?php

namespace App\Controllers;

use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Firebase\JWT\JWT;
use Doctrine\ORM\EntityManager;

class UserController
{

    private $em;

    public function __construct(EntityManager $em)
    {
        $this->em = $em;
    }

    private static function createToken(Response $response, string $id): Response
    {

        $issuedAt = time();

        $payload = [
            'iat' => $issuedAt,
            'exp' => $issuedAt + 60,
            'user_id' => $id
        ];

        $token_jwt = JWT::encode($payload, $_ENV['JWT_SECRET'], "HS256");
        $response = $response->withHeader("Authorization", "Bearer {$token_jwt}");
        return $response;
    }

    private static function check_fields(array $data): bool
    {
        return (preg_match("/[a-zA-Z]{1,256}/", $data['gender']) ||
            preg_match("/[A-Za-z]{1,256}/", $data['lastname']) ||
            preg_match("/[A-Za-z]{1,256}/", $data['firstname']) ||
            preg_match("/[A-Za-z0-9 ]{1,256}/", $data['address']) ||
            preg_match("/[0-9]{0,16}/", $data['phone']) ||
            preg_match("/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/", $data['email']) ||
            preg_match("/[0-9]{5}/", $data['cp']) ||
            preg_match("/[A-Za-z]{1,256}/", $data['city']) ||
            preg_match("/[A-Za-z]{1,256}/", $data['country']) ||
            preg_match("/[A-Za-z0-9]{4,256}/", $data['login']) ||
            preg_match("/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,256}/", $data['password']));
    }


    public function login(Request $request, Response $response, array $args): Response
    {
        $data = $request->getParsedBody();
        $login = $data['login'] ?? "";
        $password = $data['password'] ?? "";

        $userRepository = $this->em->getRepository('User');

        // Check Login & Email
        $user = $userRepository->findOneBy(['login' => $login]);
        if ($user == null) return $response->withStatus(401); 

        if ($user->getPassword() != $password) {
            $response->getBody()->write(json_encode(["success" => false]));
            return $response->withStatus(401);
        }

        $user = [
            'idUser' => $user->getIdUser(),
            'login' => $user->getLogin($login),
        ];

        $result = [
            'success' => true,
            'user' => $user,
        ];
        $response = UserController::createToken($response, $user['idUser']);
        $response->getBody()->write(json_encode($result));

        return $response->withStatus(200);
    }

    public function register(Request $request, Response $response, array $args): Response
    {
        $body = $request->getParsedBody();
        $json = $body['user'] ?? "";
        $data = json_decode($json, true);

        $lastname = $data['lastname'] ?? "";
        $firstname = $data['firstname'] ?? "";
        $gender = $data['gender'] ?? "";
        $address = $data['address'] ?? "";
        $phone = $data['phone'] ?? "";
        $email = $data['email'] ?? "";
        $cp = $data['cp'] ?? "";
        $city = $data['city'] ?? "";
        $country = $data['country'] ?? "";
        $login = $data['login'] ?? "";
        $password = $data['password'] ?? "";

        
        if (!UserController::check_fields($data)) return $response->withStatus(401);

        $userRepository = $this->em->getRepository('User');

        // Check Login & Email
        $user = $userRepository->findOneBy(['login' => $login]);
        if ($user != null) return $response->withStatus(403); 
        $user = $userRepository->findOneBy(['email' => $email]);
        if ($user != null) return $response->withStatus(402); 

        // Create new User
        $user = new \User;
        $user->setGender($gender);
        $user->setLastname($lastname);
        $user->setFirstname($firstname);
        $user->setAddress($address);
        $user->setPhone($phone);
        $user->setEmail($email);
        $user->setPostal($cp);
        $user->setCity($city);
        $user->setCountry($country);
        $user->setLogin($login);
        $user->setPassword($password);
        $this->em->persist($user);
        $this->em->flush();
        
        $result = [
            "success" => true,
            "id" => $user->getIdUser()
        ];

        $response = UserController::createToken($response, $login);
        $response->getBody()->write(json_encode($result));
        return $response->withHeader("Content-Type", "application/json")->withStatus(200);
    }
}

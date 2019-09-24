<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\Group;

class ApiController extends AbstractController
{
    /**
     * @Route("/api", name="api")
     */
    public function index()
    {
        return $this->render('api/index.html.twig', [
            'controller_name' => 'ApiController',
        ]);
    }

    /**
     * @Route("/api/group/create", name="createGroup")
     */
    public function createGroup()
    {
      $errors = [];
      if (!isset($_POST['instance'])) {$errors[] = "instance";}
      if (!isset($_POST['server'])) {$errors[] = "server";}
      if (!isset($_POST['level'])) {$errors[] = "level";}
      if (!isset($_POST['dps'])) {$errors[] = "dps";}
      if (!isset($_POST['tank'])) {$errors[] = "tank";}
      if (!isset($_POST['healer'])) {$errors[] = "healer";}

      if (sizeof($errors) > 0 ) {
        return new JsonResponse(["status" => false, "errors" => $errors]);
      }

      $group = new Group();
      $group->setInstance("test");
      $group->setLevel(10);
      $group->setServer("bloodfang");
      $group->setCreatedat(20);
      $group->setActive(true);

      $entityManager = $this->getDoctrine()->getManager();
      $entityManager->persist($group);
      $entityManager->flush();


      return new JsonResponse(["status" => "true"]);
    }
}

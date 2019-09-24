<?php

namespace App\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Party;

class ApiController extends AbstractController
{
    /**
     * @Route("/api", name="api")
     */
    public function index()
    {
      $data = [
        "beans",
        "carrots"
      ];

        return $this->render('api/index.html.twig', [
            'data' => $data,
        ]);
    }

    /**
    * @Route("/api/groups/get", name="api/groups/get")
    */
   public function getApplications(){

     $results = $this->getDoctrine()->getRepository(Party::class)->findAll();

     $return = [];

     foreach ($results as $result){
       $party = [
         "id" => $result->getId(),
         "instance" => $result->getInstance(),
         "server" => $result->getServer(),
         "minlevel" => $result->getMinlevel()
       ];

       $return[] = $party;
     }


     return new JsonResponse([
       "items" => $return
     ]);
   }
}

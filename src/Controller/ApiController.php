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

   /**
   * @Route("/api/group/create", name="api/group/create")
   */
  public function createGroup()
  {
    $errors = [];
    if (!isset($_POST['instance'])) {$errors[] = "instance";}
    if (!isset($_POST['server'])) {$errors[] = "server";}
    if (!isset($_POST['minlevel'])) {$errors[] = "minlevel";}
    if (!isset($_POST['dps'])) {$errors[] = "dps";}
    if (!isset($_POST['tank'])) {$errors[] = "tank";}
    if (!isset($_POST['healer'])) {$errors[] = "healer";}

    if (sizeof($errors) > 0 ) {
      return new JsonResponse(["status" => false, "errors" => $errors]);
    }

    $group = new Party();
    $group->setInstance($_POST['instance']);
    $group->setMinlevel($_POST['minlevel']);
    $group->setServer($_POST['server']);
    $group->setCreatedat(1563815369);
    $group->setActive(true);

    $entityManager = $this->getDoctrine()->getManager();
    $entityManager->persist($group);
    $entityManager->flush();


    return new JsonResponse(["status" => "true"]);
  }
}

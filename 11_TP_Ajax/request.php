<?php
    if(!isset($_GET['r'])) die('NO R param'); 
    try{
        $bdd = new PDO(
            'mysql:host=localhost;dbname=bdProduits;charset=utf8;port=3306',
            'root',
            '',
            array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_WARNING)
        );
    }
    catch(Exception $e){
        die('Erreur : '.$e->getMessage());
    }



    // Requette 1
    if($_GET['r'] == 1) {
        
        header("Content-type: text/xml");
        echo '<?xml version="1.0"?><tb>';

        $req = $bdd->prepare('SELECT * FROM categories');
        $req->execute();
        while($row  = $req->fetch()) {
            echo '<option>
                    <id>'.  $row['codeCat'] . '</id>
                    <lib>'. $row['libCat']  .'</lib>
                </option>';
        }
        echo '</tb>';
    }



    // Requette 2
    if($_GET['r'] == 2) {
        $req = $bdd->prepare('SELECT * FROM produits WHERE codeCat = :id');
        $req->bindValue('id', $_POST['id']);
        $req->execute();
        
        echo json_encode($req->fetchAll());
    }
?>
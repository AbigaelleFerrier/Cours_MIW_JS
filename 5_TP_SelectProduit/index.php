<?php 
    include 'assets/php/controler/CONTROLER.php' ;
    echo HEAD::headerHTML('Accueil');
?>
    <body>
        <?php include 'assets/php/common/menu.php' ?>

        <div class="container">
            <div class="row">
                <div class="col">
                    <h1>ACCUEIL</h1>
                </div>
            </div>


            <form class="contactForm" action="#" id="form">

                <!-- identification -->
                <div id="idd">
                    <div class="row">
                        <div class="col">    
                            <label for="nom">Nom</label>
                            <input type="text" name="nom" placeholder="Votre nom">
                        </div>
                        <div class="col">    
                            <label for="prenom">Prenom</label>
                            <input type="text" name="prenom" placeholder="Votre prenom">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">    
                            <label for="adresse">Adresse</label>
                            <input type="text" name="adresse" placeholder="Votre Adresse">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">    
                            <label for="CP">Code Postal</label>
                            <input type="text" name="CP" placeholder="Votre code postal">
                        </div>
                        <div class="col">    
                            <label for="ville">Ville</label>
                            <input type="text" name="ville" placeholder="Votre ville">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col">    
                            <label for="tel">Telephone</label>
                            <input type="phone" name="tel" placeholder="Votre numero de telephone">
                        </div>
                        <div class="col">    
                            <label for="mail">Email</label>
                            <input type="mail" name="mail" placeholder="Votre adresse mail">
                        </div>
                    </div>
                </div>


                <!-- sélection des produits -->

                <div class="row">
                    <div class="col">    
                        <table id="boncom">
                            <tr>
                                <th>Référence</th>
                                <th>Prix UHT</th>
                                <th>Quantité</th>
                                <th></th>
                                <th></th>
                                <th>Total</th>


                            </tr>
                        </table>
                        <input id="btaddline" type="button" value="Ajouter une ligne" onclick="ajouteLigne();" style="margin-top : 2rem" />
                    </div>
                </div>


                <!-- montants -->

                <div class="row">
                    <div class="col"> 
                       <div id="TTC">
                            <p>HT        : <input id="ht"  value="0" disabled/></p> 
                            <p>TVA (20%) : <input id="pht" value="0" disabled/></p>
                            <p>TTC       : <input id="ttc" value="0" disabled/></p>
                        </div>
                    </div>
                </div>

                <!-- boutton -->

                <div class="row">
                    <div class="col"> 
                       <button type="reset">Reset</button>
                       <a      href="#" onclick="verif()">Valider</button>
                    </div>
                </div>

            </form>
           

        </div>

        

        <?php include 'assets/php/common/footer.php' ?>

        <datalist id="produits">
        </datalist>

        <script>
            ajouteLigne();
        </script>
        
    </body>
</html>
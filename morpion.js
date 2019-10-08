function Morpion(tailleTableau = 5, nbCaseW = 3, valeurTableau = [0,1,2]) {

    // - - - D O C - - - //
        /**
         *  this.tableau =  [ i : tailleTableau][ j : tailleTableau] {default : 5}
         *  this.nbCaseW =  nbCaseW {default : 3} --> nombre de case pour win
         * 
         *  this.valeurTableau = [  case vide   : valeurTableau[0] {default :"0"},
         *                          player 1    : valeurTableau[1] {default :"1"},
         *                          player 2    : valeurTableau[2] {default :"2"} ...
         *                      ]
         */

    // - - - - - - - - - //
        this.tableau        = Array(tailleTableau);
        this.tailleTableau  = tailleTableau;
        this.nbCase         = nbCaseW;
        this.valeurTableau  = valeurTableau;
        this.maLigne = Array(this.tailleTableau);
        this.gagnant        = "";

    // - - - - - - - - - //
        this.reset_Tableau = function() {
            this.reset_Ma_Ligne();

            for (let i = 0; i < this.tailleTableau; i++) {
                for (let j = 0; j < this.tailleTableau; j++) {
                    this.tableau[i][j] = this.valeurTableau[0];                   
                }
            }
        }

     

        /**
         * Ajoute au tableau le signe de this.valeurTableau[indexPlayer] à la position this.tableau[x,y]
         * Renvoye true/false selon si l'ajout c'est bien passé ou non 
         * 
         * @param {*} indexPlayer
         * @param {*} x
         * @param {*} y
         */

            this.remplir_le_tableau = function(indexPlayer, x, y) {
                try {
                    if (! (indexPlayer >= 1 && indexPlayer <= this.valeurTableau.length - 1)) {
                        throw "Error - Valeur d'index n'a auccun équivalent dans this.valeurTableau";
                    }
                    if (! ( (x >= 0 && y >= 0) && 
                            (x <= this.tailleTableau - 1 && y <= this.tailleTableau-1 ) 
                        )) {
                        throw "Error - Valeur de l'index de x ou y ne correspond pas au taille du tableau";
                    }
                    if (this.tableau[x][y] != this.valeurTableau[0]) {
                        throw "Error - La case à deja etais joué";                        
                    }
                    
                    this.tableau[x][y] = this.valeurTableau[indexPlayer];
                    return true;

                } catch (error) {
                    return false;
                }
            }
        // ----------------------------------------

        /**
         * Remplie alléatoirement le tableau de valeur
         * 
         * @param {*} ValeurNull definie si des cases vide son implementer dans la generation
         */

            this.generation = function(valeurNull = false) {
                for (i = 0; i < this.tailleTableau ; i++) {
                    this.tableau[i] = Array(this.tailleTableau);
                    for (j = 0; j < this.tailleTableau; j++) {
                        this.tableau[i][j] = (valeurNull)   ? this.valeurTableau[ Math.floor(Math.random() * Math.floor(this.valeurTableau.length)) ]
                                                            : this.valeurTableau[ Math.floor(Math.random() * Math.floor(this.valeurTableau.length-1)) + 1];
                    }
                }
                console.table(this.tableau);
                // return JSON.stringify(this.tableau);
            }

        // ----------------------------------------

        /**
         *  Renvoye le tableau
         */
            this.get_tableau = function() {
                return JSON.stringify(this.tableau);
            }

            this.affiche = function(sortie = "html") {
                if (sortie == "console") {
                    for (i = 0; i < this.tailleTableau; i++) {
                        chaine = "";
                        for (j = 0; j < this.tailleTableau; j++) {
                            chaine += this.tableau[i][j] + " ";
                        }
                        console.log(chaine);
                    }
                    document.write(chaine);
                }
                else if (sortie = "html") {
                    for (i = 0; i < this.tailleTableau; i++) {
                        document.getElementById("body").innerHTML += "/ ";
                        for (j = 0; j < this.tailleTableau; j++) {
                            document.getElementById("body").innerHTML += this.tableau[i][j] + " / "
                        }
                        document.getElementById("body").innerHTML += "<br>";
                    }
                }
            }

        // ----------------------------------------


        this.remplir_Ma_Ligne = function (value) {
            this.maLigne.push() = value ;
        }

        this.test_Ma_ligne = function() {

            console.log("test_Ma_ligne");

            i               = 0;
            signeConsecutif = 0;
            signePrecedant  = "";
            sortie          = false;

            console.table(this.maLigne);
            console.log(this.maLigne);
            

            // while (!sortie || i < this.maLigne.length) {

            //     console.log("test_Ma_ligne - - - " + i);
                
            //     if (signePrecedant != this.maLigne[i]) {                
            //         signeConsecutif = 1;
            //         signePrecedant = this.maLigne[i];
            //     }
            //     else if (this.maLigne[i] != this.valeurTableau[0]) {
            //         signeConsecutif++;
            //     }

            //     if (signeConsecutif >= this.nbCaseW) {
            //         sortie = true;
            //         this.gagnant = signeConsecutif;
            //     }
            //     i++;
            // }
            return sortie;
        }

        this.reset_Ma_Ligne = function() {
            this.maLigne = Array(this.tailleTableau);
        }

    // - - - - - - - - //
        /**
         * Renvoye le gagnant pour les ligne horizontal
         *
         *  . | X | .
         *  . | X | .
         *  . | X | .
         *
         */
            this.verif_winner_Horizontal = function() {
                
                
                console.log("verif_winner_Horizontal");


                i = 0;
                while (!this.test_Ma_ligne() && i <= this.tailleTableau) {
                    this.reset_Ma_Ligne();
                    j = 0;
                    while (!this.test_Ma_ligne() && j  <= this.tailleTableau) {
                        console.log(i + " " +j)
                        this.remplir_Ma_Ligne(this.tableau[i][j]);
                        j++;
                    }
                    i++;
                }
                return this.test_Ma_ligne();
            }

        /**
         * Renvoye le gagnant pour les ligne vertical
         *
         *  . | . | .
         *  X | X | X
         *  . | . | .
         *
         */
            this.verif_winner_Vertical = function () {


                console.log("verif_winner_Vertical");


                j = 0;
                while (!this.test_Ma_ligne() && j <= this.tailleTableau) {
                    this.reset_Ma_Ligne();
                    i = 0;
                    while (!this.test_Ma_ligne() && i + this.nbCaseW <= this.tailleTableau) {
                        this.remplir_Ma_Ligne(this.tableau[i][j]);
                        i++;
                    }
                    j++;
                }
                return this.test_Ma_ligne();
            }

        /**
         * Renvoye le gagnant pour les ligne diagonal de Gauche a Droite
         *
         *  X | . | .
         *  . | X | .
         *  . | . | X
         *
         */
            this.verif_winner_Diagonal_GtoD = function () {


                console.log("verif_winner_Diagonal_GtoD");
                


                t = 0; // tampon
                j = 0;
                while (!this.test_Ma_ligne() && j + this.nbCaseW < this.tailleTableau) {
                    this.reset_Ma_Ligne();
                    i = 0;
                    while (!this.test_Ma_ligne() && j + this.nbCase < this.tailleTableau) {
                        this.remplir_Ma_Ligne(this.tableau[i][j]);
                        i++;
                        j++;
                    }
                    t++;
                    j = t;
                }

                t = 0; // tampon
                j = 0;
                i = 1;
                while (!this.test_Ma_ligne() && i + this.nbCaseW < this.tailleTableau) {
                    this.reset_Ma_Ligne();
                    j = 0;
                    while (!this.test_Ma_ligne() && j + this.nbCase < this.tailleTableau) {
                        this.remplir_Ma_Ligne(this.tableau[i][j]);
                        i++;
                        j++;
                    }
                    t++;
                    j = t;
                }

                return this.test_Ma_ligne();
            }

        /**
         * Renvoye le gagnant pour les ligne diagonal de Droite a Gauche
         * 
         *  . | . | X
         *  . | X | .
         *  X | . | .
         * 
         */
            this.verif_winner_Diagonal_DtoG = function () {


                console.log("verif_winner_Diagonal_DtoG");




                t = this.tailleTableau - 1;
                while (!this.test_Ma_ligne() && this.nbCaseW - t >= 0) {
                    i = 0;
                    while (!this.test_Ma_ligne() && j > 0) {
                        this.remplir_Ma_Ligne(this.tableau[i][j]);
                        i++
                        j--;
                    }
                    j = t;
                    t--;
                }

                t = 1;
                i = 1;

                while (!this.test_Ma_ligne() && this.nbCaseW - t >= 0) {
                    j = this.tailleTableau - 1;
                    while (!this.test_Ma_ligne() && i <= this.tailleTableau - 1) {
                        this.remplir_Ma_Ligne(this.tableau[i][j]);
                        j--;
                        i++;
                    }
                    i = t;
                    t++;
                }
                return this.test_Ma_ligne();
            }

    // - - - - - - - - //

        /**
         *  Renvoye false si auccun gagnant si non renvoye le signe du gagnant (défini au depart par valeurTableau)
         */ 
            this.un_gagnant = function() {
                return (    this.verif_winner_Horizontal()    ||
                            this.verif_winner_Vertical()      ||
                            this.verif_winner_Diagonal_GtoD() ||
                            this.verif_winner_Diagonal_DtoG()
                        ) 
                        ? this.gagnant
                        : false;
            }
        
}
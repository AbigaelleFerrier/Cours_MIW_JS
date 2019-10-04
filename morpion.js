function Morpion(tailleTableau = 5, nbCaseW = 3, valeurTableau = [0,1,2]) {

    // - - - D O C - - - //
        /**
         *  this.tableau =  [ i : tailleTableau][ j : tailleTableau] {default : 5}
         *  this.nbCaseW =  nbCaseW {default : 3} --> nombre de case pour win
         * 
         *  this.valeurTableau = [  case vide   : valeurTableau[0] {default :"0"},
         *                          player 1    : valeurTableau[1] {default :"1"},
         *                          player 2    : valeurTableau[2] {default :"2"}
         *                      ]
         */

    // - - - - - - - - - //
        this.tableau        = [];
        this.tailleTableau  = tailleTableau;
        this.nbCase         = nbCaseW;
        this.valeurTableau  = valeurTableau;
        this.maLigne        = Array();
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
                
                this.tableau[x, y] = this.valeurTableau[indexPlayer];
                return true;

            } catch (error) {
                return false;
            }
        }


        this.remplir_Ma_Ligne = function (value) {
            this.maLigne.push() = value ;
        }

        this.test_Ma_ligne = function() {
            i               = 0;
            signeConsecutif = 0;
            signePrecedant  = "";
            sortie          = false;

            while (!sortie || i < this.maLigne.length) {
                if (signePrecedant != this.maLigne[i]) {
                    signeConsecutif = 1;
                    signePrecedant = this.maLigne[i];
                }
                else if (this.maLigne[i] != this.valeurTableau[0]) {
                    signeConsecutif++;
                }

                if (signeConsecutif >= this.nbCaseW) {
                    sortie = true;
                    this.gagnant = signeConsecutif;
                }
            }
            return sortie;
        }

        this.reset_Ma_Ligne = function() {
            this.maLigne = Array();
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
            this.verif_Winer_Horizontal = function() {
                i = 0;
                
                while (!this.test_Ma_ligne() && i < this.tailleTableau) {
                    this.reset_Ma_Ligne();
                    j   = 0;
                    while (!this.test_Ma_ligne() && j + this.nbCaseW < this.tailleTableau) {
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
            this.verif_Winer_Vertical = function () {
                j = 0;
                while (!this.test_Ma_ligne() && j < this.tailleTableau) {
                    this.reset_Ma_Ligne();
                    i = 0;
                    while (!this.test_Ma_ligne() && i + this.nbCaseW < this.tailleTableau) {
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
            this.verif_Winer_Diagonal_GtoD = function () {
                t = 0; // tampon
                j = 0;
                while (!this.test_Ma_ligne() && j + this.nbCaseW < this.tailleTableau) {
                    i = 0;
                    j = t;
                    while (!this.test_Ma_ligne() && j + this.nbCase < this.tailleTableau) {
                        this.remplir_Ma_Ligne(this.tableau[i][j]);
                        i++;
                        j++;
                    }
                    t++;
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
            this.verif_Winer_Diagonal_DtoG = function () {
                t = 0; // tampon
                i = 0;
                while (!this.test_Ma_ligne() && i+ this.nbCaseW < this.tailleTableau) {
                    j = 0;
                    i = t;
                    while (!this.test_Ma_ligne() && i + this.nbCase < this.tailleTableau) {
                        this.remplir_Ma_Ligne(this.tableau[i][j]);
                        i++;
                        j++;
                    }
                    t++;
                }
                return this.test_Ma_ligne();
            }

    // - - - - - - - - //

        /**
         *  Renvoye false si auccun gagnant si non renvoye le signe du gagnant (défini au depart par valeurTableau)
         */ 
            this.un_gagnant = function() {
                return (    this.verif_Winer_Horizontal()    ||
                            this.verif_Winer_Vertical()      ||
                            this.verif_Winer_Diagonal_GtoD() ||
                            this.verif_Winer_Diagonal_DtoG()
                        ) 
                        ? this.gagnant
                        : false;
            }
        
}
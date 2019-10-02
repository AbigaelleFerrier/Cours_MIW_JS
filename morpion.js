function Morpion(tailleTableau = 5, nbCaseW = 3) {

    // - - - D O C - - - //
        /**
         *  this.tableau =  [ i : tailleTableau][ j : tailleTableau] {default : 5}
         *  this.nbCaseW =  {default : 3} --> nombre de case pour win
         * 
         *  valeur posible du tableau {
         *      case vide   : "0";
         *      player 1    : "1";
         *      player 2    : "2";
         *  }
         */

    // - - - - - - - - - //
        this.tableau        = [];
        this.tailleTableau  = tailleTableau;
        this.nbCase         = nbCaseW;
        this.maLigne        = Array();

    // - - - - - - - - - //
        this.reset_Tableau = function() {
            this.reset_Ma_Ligne();

            for (let i = 0; i < this.tailleTableau; i++) {
                for (let j = 0; j < this.tailleTableau; j++) {
                    this.tableau[i][j] = "0";                   
                }
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
                else {
                    signeConsecutif++;
                }

                if (signeConsecutif >= this.nbCaseW) {
                    sortie = true;
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
     * Renvoye le gagnant pour les ligne diagonal de Gauche a droite
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

    // - - - - - - - - //
        
}
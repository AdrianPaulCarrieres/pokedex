var AjouterPokemonVue = (function() {

    var fragmentBarreNavigationHaut = document.getElementById("fragment-barre-navigation-haut").innerHTML;
    var fragmentBarreNavigationBas = document.getElementById("fragment-barre-navigation-bas").innerHTML;
    var pageAJouterPokemon = document.getElementById("page-ajouter-pokemon").innerHTML;
    
    return function(actionAjouterPokemon) {
        this.afficher = function() {
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = fragmentBarreNavigationHaut + pageAJouterPokemon + fragmentBarreNavigationBas;

            var formulaireAjouter = document.getElementById("formulaire-ajouter");
            formulaireAjouter.addEventListener("submit", enregistrer);
        }

        var enregistrer = function(evenement){
            evenement.preventDefault();

            var nom = document.getElementById("ajouter-nom");
            var type = document.getElementById("ajouter-type");
            var image = document.getElementById("ajouter-image");
            var pv = document.getElementById("ajouter-pv");
            var pc = document.getElementById("ajouter-pc");

            var pokemon = new Pokemon(nom, type, image, pv, pc);
            actionAjouterPokemon(pokemon);
        }

    }
})();
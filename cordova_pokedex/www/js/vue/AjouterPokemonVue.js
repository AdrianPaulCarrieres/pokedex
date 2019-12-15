var AjouterPokemonVue = (function() {

    var fragmentBarreNavigationHaut = document.getElementById("fragment-barre-navigation-haut").innerHTML;
    var fragmentBarreNavigationBas = document.getElementById("fragment-barre-navigation-bas").innerHTML;
    var pageAJouterPokemon = document.getElementById("page-ajouter-pokemon").innerHTML;
    
    return function(actionAjouterPokemon) {
        this.afficher = function() {

            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = fragmentBarreNavigationHaut + pageAJouterPokemon + fragmentBarreNavigationBas;        
        }
    }
})();
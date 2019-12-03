var ListePokemonVue = (function() {

    var fragmentBarreNavigationHaut = document.getElementById("fragment-barre-navigation-haut").innerHTML;
    var fragmentBarreNavigationBas = document.getElementById("fragment-barre-navigation-bas").innerHTML;
    var pageListePokemon = document.getElementById("page-liste-pokemon").innerHTML;
    
    return function() {
        this.afficher = function() {

            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = fragmentBarreNavigationHaut + pageListePokemon + fragmentBarreNavigationBas;        
        }
    }
})();
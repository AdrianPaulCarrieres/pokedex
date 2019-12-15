(function() {
    var PokemonDOA = null;
    var initialiser = function initialiser() {
        window.addEventListener("hashchange", naviguer);
        pokemonDAO = new PokemonDOA();
        naviguer();
        AOS.init();
    };

    var naviguer = function() {
        var hash = window.location.hash;
        if(!hash) {
            listePokemonVue = new ListePokemonVue();
            listePokemonVue.afficher();
        }
        else if(hash.match(/^#page-ajouter-pokemon/)) {

            ajouterPokemonVue = new AjouterPokemonVue(actionAjouterPokemon);
            ajouterPokemonVue.afficher();
        }
        else if(hash.match(/^#page-modifier-pokemon/)) {
            modifierPokemonVue = new ModifierPokemonVue();
            modifierPokemonVue.afficher();
        }
        else if(hash.match(/^#page-detail-pokemon/)) {
            detailPokemonVue = new DetailPokemon();
            detailPokemonVue.afficher();
        }
    };

    var actionAjouterPokemon = function(pokemon){
        pokemonDAO.ajouter(pokemon);
        window.location.hash = "#";
    };

    initialiser();
})();
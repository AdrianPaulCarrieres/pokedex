(function() {
    var pokemonDAO = null;
    var initialiser = function initialiser() {
        window.addEventListener("hashchange", naviguer);
        pokemonDAO = new PokemonDAO();
        naviguer();
        AOS.init();
    };

    var naviguer = function() {
        var hash = window.location.hash;
        if(!hash) {
            var listePokemons = pokemonDAO.lister();
            listePokemonVue = new ListePokemonVue(listePokemons);
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
        else if(hash.match(/^#page-detail-pokemon\/([0-9]+)/)) {
            var navigation = hash.match(/^#page-detail-pokemon\/([0-9]+)/);
            var idPokemon = navigation[1];

            var detailPokemonVue = new DetailPokemon(pokemonDAO.recupererPokemonParId(idPokemon));
            detailPokemonVue.afficher();
        }
    };

    var actionAjouterPokemon = function(pokemon){
        pokemonDAO.ajouter(pokemon);
        window.location.hash = "#";
    };

    initialiser();
})();
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
        else if(hash.match(/^#page-modifier-pokemon\/([0-9]+)/)) {
            var navigation = hash.match(/^#page-modifier-pokemon\/([0-9]+)/);
            var idPokemon = navigation[1];
            modifierPokemonVue = new ModifierPokemonVue(pokemonDAO.recupererPokemonParId(idPokemon), actionModifierPokemon);
            modifierPokemonVue.afficher();
        }
        else{
            var navigation = hash.match(/^#page-detail-pokemon\/([0-9]+)/);
            var idPokemon = navigation[1];
            console.log(idPokemon);
            console.log(pokemonDAO.recupererPokemonParId(idPokemon));
            var detailPokemonVue = new DetailPokemon(pokemonDAO.recupererPokemonParId(idPokemon));
            detailPokemonVue.afficher();
        }
    };

    var actionModifierPokemon = function (pokemon) {
        pokemonDAO.modifier(pokemon);
        window.location.hash = "#";
    };

    var actionAjouterPokemon = function(pokemon){
        pokemonDAO.ajouter(pokemon);
        window.location.hash = "#";
    };

    initialiser();
})();
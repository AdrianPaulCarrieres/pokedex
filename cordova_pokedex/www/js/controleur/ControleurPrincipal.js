(function() {

    var initialiser = function initialiser() {
        window.addEventListener("hashchange", naviguer);
        naviguer();
    };

    var naviguer = function() {
        var hash = window.location.hash;
        if(!hash) {
            listePokemonVue = new ListePokemonVue();
            listePokemonVue.afficher();
        }
        else if(hash.match(/^#page-ajouter-pokemon/)) {
            ajouterPokemonVue = new AjouterPokemonVue();
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
    }

    initialiser();
})();
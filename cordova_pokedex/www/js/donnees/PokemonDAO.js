var PokemonDAO = function() {
    //Initialisation
    var listePokemon = null;
    var initialiser = function() {
        if (!listePokemon) {
            listePokemon = [];
        }
    }

    this.lister = function() {
        if (localStorage['pokemon']) {
            listePokemon = JSON.parse(localStorage['pokemon']);
        }

        for (position in listePokemon) {
            var pokemon = new PokemonDAO(listePokemon[position].nom, listePokemon[position].type, listePokemon[position].pv, listePokemon[position].pc, listePokemon[position].image, listePokemon[position].son)
            listePokemon[poisition] = pokemon
        }

        return listePokemon;
    }

}();
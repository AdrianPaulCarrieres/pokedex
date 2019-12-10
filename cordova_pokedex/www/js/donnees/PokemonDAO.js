var PokemonDAO = function() {
    //Initialisation
    var listePokemon = null;
    var initialiser = function() {
        if (!listePokemon) {
            listePokemon = [];
        }
    }

    //Lister le pokemon
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

    //Modifier le pokemon
    this.modifier = function(pokemon) {
        for (position in listePokemon) {
            if (listePokemon[position].id == pokemon.id) {
                listePokemon[poisition] = pokemon;
            }
        }
        localStorage['pokemon'] = JSON.stringify(listePokemon);
        console.log("JSON.stringify(listePokemon) : " + JSON.stringify(listePokemon));
    }

    //

}();
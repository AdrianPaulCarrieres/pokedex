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
console.log(listePokemon);
        for (position in listePokemon) {
            var pokemon = new Pokemon(listePokemon[position].nom, listePokemon[position].type,listePokemon[position].cheminImage, listePokemon[position].pv, listePokemon[position].pc,/* listePokemon[position].son*/)
            listePokemon[position] = pokemon
        }

        return listePokemon;
    }

    //Modifier le pokemon
    this.modifier = function(pokemon) {
        for (position in listePokemon) {
            if (listePokemon[position].id == pokemon.id) {
                listePokemon[position] = pokemon;
            }
        }
        localStorage['pokemon'] = JSON.stringify(listePokemon);
        console.log("JSON.stringify(listePokemon) : " + JSON.stringify(listePokemon));
    }

    //Ajouter un pokemon
    this.ajouter = function(pokemon) {
        console.log(pokemon);
        if (listePokemon.length > 0 ) {
            pokemon.id = listePokemon[listePokemon.length - 1].id + 1;
        } else {
            pokemon.id = 0;
        }
        console.log(pokemon.nom, pokemon.id);

        listePokemon.push(pokemon);
        localStorage['pokemon'] = JSON.stringify(listePokemon);
        console.log("JSON.stringify(listePokemon) : " + JSON.stringify(listePokemon));
    }


    //Rechercher un pokemon avec son id
    this.recupererPokemonParId = function(id) {
        for (position in listePokemon) {
            if (listePokemon[position].id == id) {
                return listePokemon[position];
            }
        }
    }
    initialiser();
};
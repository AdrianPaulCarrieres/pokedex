var ModifierPokemonVue = (function() {
    var fragmentBarreNavigationHaut = document.getElementById("fragment-barre-navigation-haut").innerHTML;
    var fragmentBarreNavigationBas = document.getElementById("fragment-barre-navigation-bas").innerHTML;
    var pageModifierPokemon = document.getElementById("page-modifier-pokemon").innerHTML;

    return function(pokemon, actionModifierPokemon) {
        this.pokemon = pokemon;
        this.afficher = function() {
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = fragmentBarreNavigationHaut + pageModifierPokemon;
            document.getElementById("modifier-nom").value = this.pokemon.nom;
            document.getElementById("modifier-type").value = this.pokemon.type;
            document.getElementById("chemin-image-si-nul").value = this.pokemon.cheminImage;
            document.getElementById("modifier-pv").value = this.pokemon.pv;
            document.getElementById("modifier-pc").value = this.pokemon.pc;
            document.getElementById("modifier-id").value = this.pokemon.id;
            var formulaireModifier = document.getElementById("formulaire-modifier");
            formulaireModifier.addEventListener("submit", enregistrer);
        }

        var enregistrer = function(evenement) {
            evenement.preventDefault();
            var nom = document.getElementById("modifier-nom").value;
            var type = document.getElementById("modifier-type").value;
            var image = document.getElementById("modifier-image").value;
            if (image == null || image == "") {
                image = document.getElementById("chemin-image-si-nul").value;
            }
            var pv = document.getElementById("modifier-pv").value;
            var pc = document.getElementById("modifier-pc").value;
            var id = document.getElementById("modifier-id").value;
            console.log(nom + type + image + pv + pc);
            var pokemon = new Pokemon(nom, type, image, pv, pc, id);
            actionModifierPokemon(pokemon);
        }


        function cameraTakePicture(evenement) {
            evenement.preventDefault();
            navigator.camera.getPicture(onSuccess, onFail, {
                quality: 25,
                destinationType: Camera.DestinationType.DATA_URL
            });

            function onSuccess(imageData) {
                console.log("ajouterPokemonVue -> takePicture success");
                image = "data:image/jpeg;base64," + imageData;
            }

            function onFail(message) {
                alert('Failed because: ' + message);
            }
        }
    }
})();
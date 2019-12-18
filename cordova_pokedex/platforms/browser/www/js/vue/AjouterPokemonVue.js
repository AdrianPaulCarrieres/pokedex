var AjouterPokemonVue = (function() {

    var fragmentBarreNavigationHaut = document.getElementById("fragment-barre-navigation-haut").innerHTML;
    var fragmentBarreNavigationBas = document.getElementById("fragment-barre-navigation-bas").innerHTML;
    var pageAJouterPokemon = document.getElementById("page-ajouter-pokemon").innerHTML;

    var image = null;

    return function(actionAjouterPokemon) {
        this.afficher = function() {
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = fragmentBarreNavigationHaut + pageAJouterPokemon;

            var formulaireAjouter = document.getElementById("formulaire-ajouter");
            formulaireAjouter.addEventListener("submit", enregistrer);

            //Ajouter une image
            document.getElementById("ajouter-image").addEventListener("click", cameraTakePicture);
        }

        var enregistrer = function(evenement) {
            evenement.preventDefault();

            var nom = document.getElementById("ajouter-nom").value;
            var type = document.getElementById("ajouter-type").value;
            var pv = document.getElementById("ajouter-pv").value;
            var pc = document.getElementById("ajouter-pc").value;
            console.log(nom + type + image + pv + pc);
            var pokemon = new Pokemon(nom, type, image, pv, pc, null);
            actionAjouterPokemon(pokemon);
        }


        function cameraTakePicture() {
            navigator.camera.getPicture(onSuccess, onFail, {
                quality: 100,
                destinationType: Camera.DestinationType.DATA_URL
            });

            function onSuccess(imageData) {
                image = "data:image/jpeg;base64," + imageData;
            }

            function onFail(message) {
                alert('Failed because: ' + message);
            }
        }

    }
})();
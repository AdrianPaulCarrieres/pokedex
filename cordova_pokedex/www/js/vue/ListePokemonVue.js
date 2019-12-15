var ListePokemonVue = (function() {

    var fragmentBarreNavigationHaut = document.getElementById("fragment-barre-navigation-haut").innerHTML;
    var fragmentBarreNavigationBas = document.getElementById("fragment-barre-navigation-bas").innerHTML;
    var pageListePokemon = document.getElementById("page-liste-pokemon").innerHTML;
    
    return function(listePokemons) {
        this.afficher = function() {

            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = fragmentBarreNavigationHaut + pageListePokemon + fragmentBarreNavigationBas;
            liste = document.getElementById("conteneur-liste");
            texteListe = "";
            for (let i = 0; i < listePokemons.length; i++) {
                texteListe+= '<div data-aos="flip-left" class="col-6 col-md-4 col-lg-3">\n' +
                    '\t\t\t\t<a href="#page-detail-pokemon/'+ listePokemons[i].id +'" class="card my-2 carte-pokemon">\n' +
                    '\t\t\t\t\t<img src="https://via.placeholder.com/150 '+ /*listePokemons[i].image +*/'" class="card-img-top" width="150" height="150" alt="...">\n' +
                    '\t\t\t\t\t<div class="card-body text-center">\n' +
                    '\t\t\t\t\t\t<h5 class="card-title">'+ listePokemons[i].nom +'</h5>\n' +
                    '\t\t\t\t\t</div>\n' +
                    '\t\t\t\t</a>\n' +
                    '\t\t\t</div>'
            }
            liste.innerHTML = texteListe;
        }
    }
})();
var DetailPokemon = (function() {

    var fragmentBarreNavigationHaut = document.getElementById("fragment-barre-navigation-haut").innerHTML;
    var fragmentBarreNavigationBas = document.getElementById("fragment-barre-navigation-bas").innerHTML;
    var pageDetailPokemon = document.getElementById("page-detail-pokemon").innerHTML;

    return function(pokemon) {
        this.afficher = function() {
            console.log(pokemon);
            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = fragmentBarreNavigationHaut + pageDetailPokemon;
            document.getElementById("bouton-son").setAttribute("onclick", "audio.jouer()");
            document.getElementById("icone-pokemon").setAttribute("src", pokemon.cheminImage);
            document.getElementById("nom-pokemon").innerHTML = pokemon.nom;
            document.getElementById("type-pokemon").innerHTML = pokemon.type;
            document.getElementById("pc-pokemon").innerHTML = pokemon.pc;
            document.getElementById("pv-pokemon").innerHTML = pokemon.pv;
            document.getElementById("lien-modifier-pokemon").setAttribute("href", "#page-modifier-pokemon/"+pokemon.id);
            console.log(document.getElementById("lien-modifier-pokemon").getAttribute("href"));

            var ctx = document.getElementById('graphiquePv').getContext('2d');
            var chart = new Chart(ctx, {

                type: 'bar',
                data: {
                    labels: ["Qulbutoké", "Psychokwak"],
                    datasets: [
                        {
                            label: "PV",
                            backgroundColor: ["#3e95cd", "#8e5ea2"],
                            data: [4320,5267]
                        }
                    ]
                },
                options: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'PVs des pokémons du type :'
                    }
                }

            });
            type= pokemon.type;
            var gradient1;
            var gradient2;
            if (type.toUpperCase() == "FEU"){
                gradient1 = ['#ff9900', '#ff5e62'];
                gradient2 = ['#ff5e62', '#ff9900'];
            }else if (type.toUpperCase == "FEUILLE"){
                gradient1 = ['#80ED80', '#00FF00'];
                gradient2 = ['#00FF00', '#80ED80'];
            }else if (type.toUpperCase() == "EAU"){
                gradient1 = ['#59FFF9', '#003F3C'];
                gradient2 = ['#003F3C', '#59FFF9'];
            }else if (type.toUpperCase() == "ACIER"){
                gradient1 = ['#35352E', '#EEEEEE'];
                gradient2 = ['#EEEEEE', '#35352E'];
            }else if (type.toUpperCase() == "ELECTRIQUE" || type.toUpperCase() == "ÉLECTRIQUE"){
                gradient1 = ['#FFDD00', '#35352E'];
                gradient2 = ['#35352E', '#FFDD00'];
            }else if (type.toUpperCase() == "COMBAT"){
                gradient1 = ['#BD0707', '#35352E'];
                gradient2 = ['#35352E', '#BD0707'];
            }
            var granimInstance = new Granim({
                element: '#canvas-interactive',
                isPausedWhenNotInView: true,
                states : {
                    "default-state": {
                        gradients: [
                            gradient1,
                            gradient2
                        ]
                    }
                }
            });
            var ctx = document.getElementById('graphiquePc').getContext('2d');
            var chart = new Chart(ctx, {

                type: 'bar',
                data: {
                    labels: ["Qulbutoké", "Psychokwak"],
                    datasets: [
                        {
                            label: "PC",
                            backgroundColor: ["#3e95cd", "#8e5ea2"],
                            data: [4320,5267]
                        }
                    ]
                },
                options: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'PCs des pokémons du type :'
                    }
                }

            });



            $('.carousel').carousel('pause');
        }
    }
})();
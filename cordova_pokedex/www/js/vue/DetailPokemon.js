var DetailPokemon = (function() {

    var fragmentBarreNavigationHaut = document.getElementById("fragment-barre-navigation-haut").innerHTML;
    var fragmentBarreNavigationBas = document.getElementById("fragment-barre-navigation-bas").innerHTML;
    var pageDetailPokemon = document.getElementById("page-detail-pokemon").innerHTML;

    return function() {
        this.afficher = function() {

            elementBody = document.getElementsByTagName("body")[0];
            elementBody.innerHTML = fragmentBarreNavigationHaut + pageDetailPokemon;
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
            type="eau";
            var gradient1;
            var gradient2;
            if (type == "feu"){
                gradient1 = ['#ff9900', '#ff5e62'];
                gradient2 = ['#ff5e62', '#ff9900'];
            }else if (type == "feuille"){
                gradient1 = ['#80ED80', '#00FF00'];
                gradient2 = ['#00FF00', '#80ED80'];
            }else if (type == "eau"){
                gradient1 = ['#59FFF9', '#003F3C'];
                gradient2 = ['#003F3C', '#59FFF9'];
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
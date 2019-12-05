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
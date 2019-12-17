// var Audio = function() {

//     var initialiser = async function(){
//         createjs.Sound.registerSound({ id: "soundId", src: "./Pika.mp3" });
//     }

//     this.jouer = function() {
//         console.log('blop');   
//         createjs.Sound.play("soundId");
//     }

//     initialiser();

// }

class Audio {

    constructor(){
        console.log('here');
        
        createjs.Sound.registerSound({ id: "soundId", src: "./Pika.mp3" });
    }

    jouer(){
        createjs.Sound.play("soundId");   
    }

}


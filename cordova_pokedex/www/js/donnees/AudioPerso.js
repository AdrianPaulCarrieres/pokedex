var AudioPerso = function() {

    var id = "id";

    var initialiser = async function(){
        createjs.Sound.registerSound("asset/audio/Pika.mp3", id);
    }

    this.jouer = function() {
        console.log('blop');   
        createjs.Sound.play(id);
    }

    initialiser();

}

// class AudioPerso {


//     constructor(){
//         console.log('here');
        
//         createjs.Sound.registerSound("./Pika");
//     }

//     jouer(){
//         createjs.Sound.play("soundId");
//     }

// }
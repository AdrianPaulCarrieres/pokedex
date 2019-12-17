var Audio = function() {

    var initialiser = function(){
        createjs.Sound.registerSound({ id: "soundId", src: "../../asset/audio/Pika Pikapika Pikachuu.mp3" });
    }

    this.jouer = function() {
        createjs.Sound.play("soundId");
    }

    initialiser();

}
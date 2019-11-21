var Objet = function (id, x, y, jeu) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.representation = jeu.create(x,y,'star');
};
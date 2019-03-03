function User() {
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer) {
        targetPlayer.life += 1;
        console.log(this.name + " gave 1 life to " + targetPlayer.name);
    }
}

var Hyodae = new User();
var Wendy = new User();
Hyodae.name = "Hyodae";
Wendy.name = "Wendy";

Hyodae.giveLife(Wendy);
console.log(Hyodae.name+":" + Hyodae.life);
console.log(Wendy.name+":" + Wendy.life);

User.prototype.uppercut = function uppercut(targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.name + " just uppercutted " + targetPlayer.name);
}

Wendy.uppercut(Hyodae);
console.log(Hyodae.name+":" + Hyodae.life);
console.log(Wendy.name+":" + Wendy.life);

// You can add properties to all objects
User.prototype.magic = 60;
console.log(Hyodae.magic);
console.log(Wendy.magic);
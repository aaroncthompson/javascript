function player(name, class) {
  this.name = name;
  this.class = class;
  this.species = "human";
}

function npc(name, species) {
  this.name = name;
  this.species = species;
}

function monster(species) {
  this.species = species;
}

function item(type, rarity) {
  this.type = type;
  this.damage = 0;
  this.rarity = rarity;
}

funciton terrain(pass, color) {
  this.pass = pass;
  this.color = color;
}

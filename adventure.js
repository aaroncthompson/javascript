function player(name, prof) {
  this.name = name;
  this.prof = prof;
  this.species = "human";
  this.level = xp / 60;
  this.xp = 0;
  this.addxp = function(amount) {
    xp += amount;
  }
}

function ally(name, level, prof, species) {
  this.name = name;
  this.level = level + xp/60;
  this.xp = 0;
  this.addxp = function(amount) {
    xp += amount;
  }
  this.prof = prof;
  this.species = species;
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

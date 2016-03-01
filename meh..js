// Initial variables */
var jig = {
	happiness: 25, // baseline 50
	health: 30, // baseline 50
	knowledge: 10, // baseline 50
	money: 500,
	career: 0, // baseline 50
	profession: "unemployed"
	sobriety: 100; // regens to 100, based on events or time
}

var bak = {
	happiness: 50,
	health: 50,
	knowledge: 50,
	money: 5000,
	career: 50,
	profession: "an office worker"
	sobriety: 100
}

var yong: {
	happiness: 40,
	health: 30,
	knowledge: 60,
	money: 0,
	career: 50,
	profession: "a student"
	sobriety: 100
}

var day = 1;

// Global methods and functions
var addHappy = function (number) {
  this.happiness += number;
};

var addHealth = function (number) {
  this.health += number;
};

var addKnowledge = function (number) {
  this.knowledge += number;
};

var addMoney = function (number) {
  this.money += number;
};

var addCareer = function (number) {
  this.career += number;
};

var changeProfession = function (Prof) {
  this.profession = newProf;
};

var addSobriety = function (number) {
  this.sobriety += number;
};

var addday = function (number) {
  day += number;
};

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

// Global functions
var addhappy = function (number) {
  happiness += number;
};

var addhealth = function (number) {
  health += number;
};

var addknowledge = function (number) {
  knowledge += number;
};

var addday = function (number) {
  day += number;
};

var addmoney = function (number) {
  money += number;
};

var addcareer = function (career) {
  career += number;
};

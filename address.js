var friends = {
    Bill: {
        firstName: "Bill",
        lastName: "Jones",
        number: "7",
        address: ["1 Baker St","WV"]
    },
    Steve: {
        firstName: "Steve",
        lastName: "Kwon",
        number: "J",
        address: ["44 Stanford Cr","TX"]
    },
    Josh: {
        firstName: "Josh",
        lastName: "Wilson",
        number: "9",
        address: ["18545 Jollibee Way","CA"]
    },
    Drake: {
        firstName: "Drake",
        lastName: "Gupta",
        number: "555-5555",
        address: ["unknown", "unknown"]
    }
};

var list = function(key) {
    for (var key in friends) {
        console.log(key)
    }
}

var search = function(name) {
    for (var name in friends) {
        if (name === friends[name].firstName) {
            console.log(friends[name]);
            return friends[name];
        }
    }
};

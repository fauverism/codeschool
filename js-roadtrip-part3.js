//JS Roadtrip Part3

//1
var fear = fearGenerated(numPeeps, rainInInches, numSharks);
var fearMessage;

//For fear levels less than 200
var low = function() {
  prompt("Fear Level: LOW Should be no problem at all...mwahaha. Still wanna ride?");
};

//For fear levels 200 through and including 300
var medium = function() {
  prompt("Fear Level: MEDIUM. You may want to rethink this one, man. MWAHAHA! Think you'll make it?");
};

//For fear levels above 300 and up to 400
var high = function() {
  prompt("Fear Level: HIGH ABANDON ALL HOPE!! Have a death wish?");
};

var fearMessage = function() {
};

confirmRide(fearMessage);

function confirmRide( confirmToGo ){
  return confirmToGo();
}

var startRide = function() {
};

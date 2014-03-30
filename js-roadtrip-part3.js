function theBridgeOfHoistingDoom() {
    var ring = undefined;
    var power = undefined;
    var wizard = undefined;
    function balrog() {
      return "fire";
    }
    function wizard(){
        return "white";
    }
    function elf() {
        return "immortal";
    }
}

//4.2
var vehicle1 = { type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot" };
var vehicle2 = { type: "Jet Ski", capacity: 1, storedAt: "Reef Dock" };
var vehicle3 = { type: "Submarine", capacity: 8, storedAt: "Underwater Outpost" };

//4.4
var vehicle1 = { type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot" };
var vehicle2 = { type: "Jet Ski", capacity: 1, storedAt: "Reef Dock" };
var vehicle3 = { type: "Submarine", capacity: 8, storedAt: "Underwater Outpost" };

var vehicles = [vehicle1,vehicle2,vehicle3];

var findVehicle = function(name, list) {
    for (var i = 0; i<list.length; i++) {
        if(list[i].type === name) {
            return list[i].storedAt;
        }
    }
};
findVehicle("Submarine", vehicles);

//4.5
var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};

vehicle1.capacity(10);
vehicle2.submersible(false);
vehicle3.weapon("Torpedoes");
vehicle1.submersible(false);
vehicle2.weapon("Lasers”);
vehicle3.capacity(16);
vehicle1.weapon("Rear-Mounted Slingshot");
vehicle3.submersible(true);

//4.6
var vehicle1 = {type: "Motorboat", capacity: 6, storedAt: "Ammunition Depot"};
var vehicle2 = {type: "Jet Ski", capacity: 1, storedAt: "Reef Dock"};
var vehicle3 = {type: "Submarine", capacity: 8, storedAt: "Underwater Outpost"};
vehicle1.capacity += 4;
vehicle2.submersible = false;
vehicle3.weapon = "Torpedoes";
vehicle1.submersible = false;
vehicle2.weapon = "Lasers";
vehicle3.capacity *= 2;
vehicle1.weapon = "Rear-Mounted Slingshot";
vehicle3.submersible = true;













































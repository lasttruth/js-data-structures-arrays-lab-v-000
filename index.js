// Write your solution here!
const drivers = ["Milo", "Otis","Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
  drivers
}

function destructivelyPrependDriver(name){
  drivers.unshift(name);
  drivers;
}

function destructivelyRemoveLastDriver() {
  drivers.pop;
  drivers;
}

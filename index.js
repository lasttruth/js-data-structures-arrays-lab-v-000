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
  drivers.pop();
  drivers;
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
  drivers;
}

function appendDriver(name) {
  return newDrivers = [...drivers, name]
}

function prependDriver(name) {
  return newDrivers = [name, ...drivers]
}

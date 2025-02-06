
const startTime = new Date();


let currentTime;

do {
    
    currentTime = new Date();
    
    const elapsedTime = currentTime - startTime;
    
    
    console.log(`Пройшло: ${(elapsedTime / 1000).toFixed(1)} секунд`);
    
} while (currentTime - startTime < 10000); 

// Використання класу Car
const myCar = new Car('Toyota', 'Camry');
myCar.setSpeed(100).setSpeed(150);
console.log(myCar.getSpeed()); // Виведе: 150
myCar.clearSpeed();
console.log(myCar.getSpeed()); // Виведе: 0

// Використання класу Bike
const myBike = new Bike('Giant', 'Mountain');
myBike.setGear(3);
console.log(myBike.getGear()); // Виведе: 3
myBike.clearGear();
console.log(myBike.getGear()); // Виведе: 1

// Використання класу Truck
const myTruck = new Truck('Volvo', 10);
myTruck.loadCargo(5);
console.log(myTruck.getLoad()); // Виведе: 5
myTruck.unloadCargo(3);
console.log(myTruck.getLoad()); // Виведе: 2
myTruck.unloadCargo(5);
console.log(myTruck.getLoad()); // Виведе: 0

class Car extends Vehicle {
    constructor(brand, model, doors) {
        super(brand, model); // Виклик конструктора батьківського класу
        this.doors = doors;
    }

    displayInfo() {
        return `${super.displayInfo()}, Doors: ${this.doors}`;
    }
}

class Bike extends Vehicle {
    constructor(brand, model, type) {
        super(brand, model);
        this.type = type;
    }

    displayInfo() {
        return `${super.displayInfo()}, Type: ${this.type}`;
    }
}

class Truck extends Vehicle {
    constructor(brand, model, capacity) {
        super(brand, model);
        this.capacity = capacity; // в тоннах
    }

    displayInfo() {
        return `${super.displayInfo()}, Capacity: ${this.capacity} tons`;
    }
}


const startTime = new Date();

let currentTime;

do {
    currentTime = new Date();

    const 
}


const Startime = new Date();

let = currentTime;

do {
    currentTime = new Date();

    elapsedTime = currentTime - startTime;

    c
}
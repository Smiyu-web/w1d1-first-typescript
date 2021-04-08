const carMakers = ["ford", "toyota", "chevy"];
const dates = [new Date(), new Date()];

// const carsByMake: string[][];  // must have initialization
const carsByMake: string[][] = [];

// help with inference when extracting values
const car1 = carMakers[0];
const myCar = carMakers.pop();

// prevent incompatible values
// carMakers.push(100);

// help with map
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

console.log(carMakers);

// Flexible type
const importantDates: (Date | string)[] = [];
importantDates.push("2021-04-08");
importantDates.push(new Date());
// importantDates.push(true);
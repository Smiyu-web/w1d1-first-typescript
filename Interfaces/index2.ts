interface Report {
  summary(): string;
}

const oldCivicCar = {
  name: "civic",
  year: 2000,
  broken: true,
  summary(): string {
    return `Name ${this.name}`;
  },
};

const drink = {
  color: "brown",
  carbonate: true,
  suger: 40,
  summary(): string {
    return `My drink has ${this.suger} grams of sugar`;
  },
};

const printSummary = (item: Report): void => {
  console.log(item.summary());
};

printSummary(oldCivicCar);
printSummary(drink);

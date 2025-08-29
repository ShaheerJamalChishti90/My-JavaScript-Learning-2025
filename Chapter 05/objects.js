const my_car = {
  make: "Toyota",
  model: "Fortuner",
  year: 2021,
  variant: "Sigma 4 (7-seater)",
  engine: "2.8L Turbo-Diesel Inline-4",
  transmission: "6-speed Automatic with Sequential Shift",
  drivetrain: "4x4 (with low-range transfer case)",
  color: "Pearl White",
  mileage_km: 42000,
  features: [
    "LED headlamps & DRLs",
    "Cruise control",
    "Push-button start",
    "Reverse camera & parking sensors",
    "Apple CarPlay/Android Auto",
    "7 airbags",
    "ABS with EBD & traction control"
  ]
};

// Accessing a item
console.log(my_car.model)

// Updating a item
my_car.year = 2024
console.log(my_car.year)

// Adding a new item
my_car.FxF = true
console.log(my_car)
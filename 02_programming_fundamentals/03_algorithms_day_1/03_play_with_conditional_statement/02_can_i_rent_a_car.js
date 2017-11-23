// Do not pay attention to this line for the moment

// eslint-disable-next-line
const driverData = require('./.driver_data');

// These are the variables against which you should test
// driverLicense is a string with the kind of license (ex: AM, B, D...)
const driverLicense = driverData.driverLicense;
// licenceIssued is an integer with the year it was issued (ex: 2001)
const licenceIssued = driverData.licenceIssued;
// numberOfAccident is an integer with the number of accidents.
const numberOfAccident = driverData.numberOfAccident;
// bonus is a float that represent the driver's bonus
const bonus = driverData.bonus;

// Assign a boolean to this variable:
//   `true` if the driver can rent a car
//   `false` if not
let canRentACar = false;

// Your code here:
let result = false;
let conductorA = {
  name:"John",
  license:"B",
  licenseYear:1997,
  accidentsCount:3,
  bonus:0.9
};


if (driverLicense < "B") {
  result = false;
} else if (licenceIssued > 2016) {
  result = false;
} else if (numberOfAccident > 0 && bonus < 0.8) {
  result = false;
}
else result = true;

canRentACar = result;

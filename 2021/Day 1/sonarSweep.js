const measurements = require("./data");

let numOfIncreases = 0;
for (let i = 0, j = 1; j < measurements.length; i++, j++) {
  let firstValue = measurements[i];
  let secondValue = measurements[j];
  if (secondValue > firstValue) {
    numOfIncreases += 1;
  }
}

return console.log(numOfIncreases);

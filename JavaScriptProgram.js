//Calculating Prime Factors
function GetPrimeFactors(number) {
    let primeFactorsArray = new Array();
    for (let i = 2; i <= number / 2; i++) {
      if (number % i == 0) {
        let count = 0;
        for (let j = 2; j <= Math.sqrt(i); j++) {
          if (i % j == 0) count++;
        }
        if (count == 0 && i > 1) primeFactorsArray.push(i);
      }
    }
    return primeFactorsArray;
  }
  let number = Math.floor(Math.random() * 1000);
  console.log("Prime Factors of " + number + " are : ");
  console.log(GetPrimeFactors(number));

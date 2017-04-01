// https://projecteuler.net/problem=3
// Largest prime factor
// The prime factors of 13195 are 5, 7, 13, and 29.
// What is the largest prime factor of the number of 600851475143?

function isLargestPrimeFactor(num) {

  var n = 2;

  while (n * n <= num) {
    if ((num % n) == 0) {
      return isLargestPrimeFactor(num/n);
    } else {
      n++;
    }
  }

  return num;
}

isLargestPrimeFactor(600851475143);

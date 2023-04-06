function calculatePayments(principal, rate, years, startDate) {
  const monthlyRate = rate / 12 / 100;
  const totalPayments = years * 12;
  let remainingPrincipal = principal;
  let totalInterest = 0;

  const startDateObj = new Date(startDate);
  let month = startDateObj.getMonth();
  let year = startDateObj.getFullYear();

  for (let i = 0; i < totalPayments; i++) {
    const interest = remainingPrincipal * monthlyRate;
    const payment = remainingPrincipal * (monthlyRate / (1 - Math.pow(1 + monthlyRate, -totalPayments + i)));
    const principalPaid = payment - interest;

    remainingPrincipal -= principalPaid;
    totalInterest += interest;

    if (year >= startDateObj.getFullYear() && month >= startDateObj.getMonth()) {
      console.log(`${year}-${String(month + 1).padStart(2, '0')}: Principal: ${principalPaid.toFixed(2)}, Interest: ${interest.toFixed(2)}`);
    }

    month++;
    if (month >= 12) {
      month = 0;
      year++;
    }
  }

  const monthlyPayment = (principal + totalInterest) / totalPayments;

  return {
    totalInterest,
    monthlyPayment,
    totalPayments
  };
}

const principal = 50000;
const rate = 2.5;
const years = 20;
const startDate = '2023-06-01';

const payments = calculatePayments(principal, rate, years, startDate);

console.log(`Monthly payment: ${payments.monthlyPayment.toFixed(2)}`);
console.log(`Total payments: ${payments.totalPayments}`);
console.log(`Total interest: ${payments.totalInterest.toFixed(2)}`);
console.log(`Total cost: ${(principal + payments.totalInterest).toFixed(2)}`);




// Math.pow() is a built-in method in JavaScript that returns the base to the exponent power, that is, it calculates the power of a number.

// For example, if you want to calculate 2 to the power of 3 (2^3), you can use Math.pow(2, 3), which will return 8.

// The first argument of Math.pow() is the base, and the second argument is the exponent. It is important to note that both arguments should be numbers.

// Here's an example usage:

// arduino
// Copy code
// const result = Math.pow(2, 3); // result will be 8
// You can also achieve the same result using the exponentiation operator (**):

// arduino
// Copy code
// const result = 2 ** 3; // result will be 8
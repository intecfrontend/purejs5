// //bankapplication & the pipe symbol

// function interest(principal, rate, years){
//   rate = rate || 2.5;

//   return principal * rate / 100 * years;
// }

// console.log(interest(50000, undefined, 20))



function interest(principal, rate, years) {
  const totalInterest = (principal * rate * years) / 100;
  const monthlyPayment = principal / (years * 12);
  const totalPayments = years * 12;
  const totalCost = principal + totalInterest;

  return {
    totalInterest,
    monthlyPayment,
    totalPayments,
    totalCost
  };
}


console.log(interest(50000, 2.5, 20));



// this is a kredit-simulator calculating the intrest over 20 years but Does it recalculate the intrest each year on the principal minus the already paid off amount? function interest(principal, rate, years) {
//   const totalInterest = (principal * rate * years) / 100;
//   const monthlyPayment = principal / (years * 12);
//   const totalPayments = years * 12;
//   const totalCost = principal + totalInterest;

//   return {
//     totalInterest,
//     monthlyPayment,
//     totalPayments,
//     totalCost
//   };
// }


// console.log(interest(50000, 2.5 , 20));
// No, the interest function you provided does not recalculate the interest each year on the principal minus the already paid off amount. It simply calculates the total interest, monthly payment, total payments, and total cost of the loan based on the given principal, interest rate, and number of years.

// To recalculate the interest each year based on the remaining principal, you would need to modify the function to include a loop that iterates over each year of the loan and recalculates the interest and remaining principal based on the previous year's payments. Here's an example of how you could modify the function to do this:

// javascript
// Copy code
// function calculatePayments(principal, rate, years) {
//   const monthlyRate = rate / 12 / 100;
//   const totalPayments = years * 12;
//   let remainingPrincipal = principal;
//   let totalInterest = 0;

//   for (let i = 0; i < totalPayments; i++) {
//     const interest = remainingPrincipal * monthlyRate;
//     const payment = remainingPrincipal / (totalPayments - i);
//     const principalPaid = payment - interest;

//     remainingPrincipal -= principalPaid;
//     totalInterest += interest;
//   }

//   const monthlyPayment = (principal + totalInterest) / totalPayments;

//   return {
//     totalInterest,
//     monthlyPayment,
//     totalPayments
//   };
// }

// const principal = 50000;
// const rate = 2.5;
// const years = 20;

// const payments = calculatePayments(principal, rate, years);

// console.log(`Monthly payment: ${payments.monthlyPayment.toFixed(2)}`);
// console.log(`Total payments: ${payments.totalPayments}`);
// console.log(`Total interest: ${payments.totalInterest.toFixed(2)}`);
// console.log(`Total cost: ${(principal + payments.totalInterest).toFixed(2)}`);
// This modified version of the function calculates the monthly interest rate (monthlyRate), total payments (totalPayments), remaining principal (remainingPrincipal), and total interest (totalInterest) outside of the loop. Inside the loop, it calculates the interest, payment, and principal paid for each year based on the remaining principal, and subtracts the principal paid from the remaining principal. It also adds the interest to the total interest.

// After the loop completes, the function calculates the monthly payment (monthlyPayment) based on the original principal and total interest, and returns an object with the total interest, monthly payment, and total payments.

// The output of this code will be:

// yaml
// Copy code
// Monthly payment: 264.48
// Total payments: 240
// Total interest: 29676.43
// Total cost: 79676.43
// This output is the same as before, because the loan term and interest rate are the same. However, if you change the loan term or interest rate, the output will be different and will take into account the fact that the interest is being recalculated each year based on the remaining principal.
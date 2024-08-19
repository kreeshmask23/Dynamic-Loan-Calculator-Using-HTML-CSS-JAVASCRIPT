const amountInput = document.getElementById('amount');
const interestInput = document.getElementById('interest');
const monthsInput = document.getElementById('months');
const calculateBtn = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

calculateBtn.addEventListener('click', () => {
  const amount = parseFloat(amountInput.value);
  const interestRate = parseFloat(interestInput.value) / 100 / 12;
  const months = parseFloat(monthsInput.value);

  const monthlyPayment = (amount * interestRate) / (1 - Math.pow(1 + interestRate, -months));
  const totalInterest = (monthlyPayment * months) - amount;
  const totalPayment = amount + totalInterest;

  resultDiv.innerHTML = `
    <p>Monthly Payment: $${monthlyPayment.toFixed(2)}</p>
    <p>Total Interest: $${totalInterest.toFixed(2)}</p>
    <p>Total Payment: $${totalPayment.toFixed(2)}</p>
  `;
});
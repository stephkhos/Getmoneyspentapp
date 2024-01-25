function getMoneySpent(keyboards, drives, budget) {
  let maxMoneySpent = -1;

  for (let keyboardPrice of keyboards) {
    for (let drivePrice of drives) {
      const totalCost = keyboardPrice + drivePrice;
      if (totalCost <= budget && totalCost > maxMoneySpent) {
        maxMoneySpent = totalCost;
      }
    }
  }

  return maxMoneySpent;
}

function calculateMoneySpent() {
  const budget = parseFloat(document.getElementById('budget').value);
  const keyboardsInput = document.getElementById('keyboards').value;
  const drivesInput = document.getElementById('drives').value;

  const keyboards = keyboardsInput.split(',').map(price => parseFloat(price));
  const drives = drivesInput.split(',').map(price => parseFloat(price));

  const result = getMoneySpent(keyboards, drives, budget);

  const resultElement = document.getElementById('result');
  resultElement.textContent = result >= 0 ? `Maximum Money Spent: $${result}` : 'No valid combination found.';
}

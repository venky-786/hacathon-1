// script.js

document.getElementById('expense-form').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const amount = document.getElementById('amount').value;
    const category = document.getElementById('category').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
  
    addExpense(amount, category, description, date);
    document.getElementById('expense-form').reset();
  });
  
  function addExpense(amount, category, description, date) {
    const expenseList = document.getElementById('expense-list');
  
    const li = document.createElement('li');
  
    li.innerHTML = `
      <span>${date} - ${category} - $${amount} - ${description}</span>
      <button onclick="removeExpense(this)">Delete</button>
    `;
  
    expenseList.appendChild(li);
  }
  
  function removeExpense(button) {
    const li = button.parentElement;
    li.remove();
  }
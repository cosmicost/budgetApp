let budgetLimit = document.getElementById('budgetLimit')
let calculateBudget = document.getElementById('budgetCalc')
let calculateExpense = document.getElementById('expenseCalc')
let allContainer = document.getElementById('allContainer')
let expenseName = document.getElementById('expenseName')
let expenseAmount = document.getElementById('expenseAmount')

let budget = document.createElement('td')
let expense = document.createElement('td')
let balanceDisplay = document.createElement('td')
let tableExpense = document.createElement('td')

allContainer.appendChild(budget)
allContainer.appendChild(expense)
allContainer.appendChild(balanceDisplay)
     
calculateBudget.onclick = function () { 
    let expenseNameList = document.getElementById('expenseNameList')
    let amountList = document.getElementById('expenseAmountList')
    expenseNameList.innerHTML = ''
    amountList.innerHTML = ''
    expenseName.value = ''
    expenseAmount.value = ''
    expense.innerHTML = '0'
    balanceDisplay.innerHTML = budgetLimit.value 
    budget.innerHTML = budgetLimit.value 
    if(budget.innerHTML == ''){
        budget.innerHTML = '0'
        balanceDisplay.innerHTML = '0'
    }
}

calculateExpense.onclick = function () {
    if (expenseAmount.value != "" && expenseName != ""){ 
        let expenseNameList = document.getElementById('expenseNameList')
        let amountList = document.getElementById('expenseAmountList')
        let newExpenseList = document.createElement('li')
        let newAmountList = document.createElement('li')
        expenseNameList.appendChild(newExpenseList)
        amountList.appendChild(newAmountList)
        newExpenseList.innerHTML = expenseName.value 
        newAmountList.innerHTML = expenseAmount.value

        if (expense.innerHTML != "") {
            expense.innerHTML = parseInt(expense.innerHTML) + parseInt(expenseAmount.value)
        } else {
            expense.innerHTML = expenseAmount.value
        }
        balanceDisplay.innerHTML = budgetLimit.value - expense.innerHTML
    
}
}

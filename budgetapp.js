function myFunction() {
    var currency = document.getElementById('currency').value
    var totalSalary = Number(document.getElementById('totalSalary').value)
    var taxes = Number(document.getElementById('taxes').value)
    var expenses = Number( document.getElementById('expenses').value)
    var savings = Number(document.getElementById('savings').value)
    var balance = document.getElementById('balance')
    var totalExpenses = taxes + expenses + savings 
    console.log(totalSalary)
    if ( totalExpenses > totalSalary) {
        balance.innerHTML = 'your expenses exceed your total salary'
        console.log(deficit)
    }
    else if(totalExpenses < totalSalary) {
        var deficit = totalSalary - totalExpenses
        balance.innerHTML = deficit +' '+ currency
    }
}
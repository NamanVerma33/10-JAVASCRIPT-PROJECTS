function calculateloan(){
    const loan = parseFloat(document.querySelector('#loan').value);
    const interest = parseFloat(document.querySelector('#interest').value);
    const term = parseFloat(document.querySelector('#months').value);
    if(isNaN(loan) || isNaN(interest) || isNaN(term) ){
        alert('Please Enter the valid number for all the fields');
    }
    const monthlyinterest = interest / 100 / 12;
    const totalPayments = term;
    const monthlypayment = (loan * monthlyinterest)/(1-Math.pow(1+ monthlyinterest,-totalPayments));
    const totalinterest = (monthlypayment * totalPayments) - loan;
    displayResult(monthlypayment,totalinterest);
}
function displayResult(monthlypayment,totalinterest){
    const result = document.querySelector('#result');
    result.innerHTML = ` <p>Monthly Payment: ${monthlypayment.toFixed(2)}</p> </br>
    <p><strong>Total Interest: ${totalinterest.toFixed(2)}</strong></p>`;
}
